require('dotenv').config();
const express = require('express');
const http = require('http');
const session = require('express-session');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const apiRoutes = require('./routes/api.js');


const app = express();

// Middleware
app.use(
    helmet.contentSecurityPolicy(),
    helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }),
    helmet.xssFilter(),
    helmet.frameguard({ action: 'deny' }),
    helmet.hsts({ maxAge: 31536000, includeSubDomains: true }),
    helmet.hidePoweredBy()
);

app.use(cors({
    origin: ['https://szyjar.github.io', 'http://localhost:8080'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SECURITY_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

// Routing
apiRoutes(app);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Socket
const s = socket(server, {
    cors: {
        origin: '*',
      }
});

// Store active users, list is exposed to clients
const userList = [];

// Store active user socket id, list is server only
const userIds = [];

s.sockets.on('connect', (socket) => {
    console.log(`\x1b[32mNew client connected!\x1b[0m\nClient ID: ${socket.id}\n`);
    let user = '';

    socket.on('login', (name, avatar) => {
        user = name;
        const index = userList.findIndex((item) => item.name === user);
        if (index === -1){
            userList.push({
              name: user,
              avatar: avatar,
              room: null
            });
            userIds.push({
              name: user,
              id: socket.id
            });
        };
        socket.broadcast.emit('user-list-updated', userList);
        socket.emit('user-list-updated', userList);
    });

    socket.on('logout', () => {
        let index = userList.findIndex((item) => item.name === user);
        if (index !== -1){
            userList.splice(index, 1);
        };
        index = userIds.findIndex((item) => item.name === user);
        if (index !== -1) {
          userIds.splice(index, 1);
        }
        socket.broadcast.emit('user-list-updated', userList);
    });

    socket.on('room-change', (room) => {
        const index = userList.findIndex((item) => item.name === user);
        if (index !== -1){
            userList[index].room = room;
        };
        socket.broadcast.emit('user-list-updated', userList);
    });

    socket.on('typing', (room) => {
        socket.broadcast.emit('typing', room, user);
    });

    socket.on('new-message', (message, room) => {
      if(room.includes('@')) {
        const names = room.split('@');
        names.pop();
        const user1 = userIds.find(user => user.name === names[0]);
        const user2 = userIds.find(user => user.name === names[1]);
        if(user1.id === socket.id) {
          socket.to(user2.id).emit('new-message', message, room, user1.name);
        } else {
          socket.to(user1.id).emit('new-message', message, room, user2.name);
        };
      } else {
        socket.broadcast.emit('new-message', message, room);
      }
    });

    // Client created new room, tell other clients to update room list
    socket.on('room-update', () => {
        socket.broadcast.emit('room-update');
    }); 

    socket.on('disconnect', () => {
        console.log(`\x1b[31mClient disconnected!\x1b[0m\nClient ID: ${socket.id}\n`);
        let index = userList.findIndex((item) => item.name === user);
        if (index !== -1){
            userList.splice(index, 1);
        };
        index = userIds.findIndex((item) => item.name === user);
        if (index !== -1) {
          userIds.splice(index, 1);
        }
        socket.broadcast.emit('user-list-updated', userList);
    });
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));