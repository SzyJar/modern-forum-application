require('dotenv').config();
const express = require('express');
const http = require('http');
const session = require('express-session');
const cookieParser = require('cookie-parser');
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
    origin: 'http://localhost:8080',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
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

s.sockets.on('connect', (socket) => {
    console.log(`\x1b[32mNew client connected!\x1b[0m\nClient ID: ${socket.id}\n`);

    socket.on('new-message', (room) => {
        socket.broadcast.emit('new-message', room);
    });

    socket.on('room-update', () => {
        socket.broadcast.emit('room-update');
    });
    
    socket.on('typing', (room, user) => {
        socket.broadcast.emit('typing', room, user);
    });
    
    socket.on('disconnect', () => {
        console.log(`\x1b[31mClient disconnected!\x1b[0m\nClient ID: ${socket.id}\n`)
    });
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));