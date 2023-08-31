[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=white)](#) [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](#) [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)](#) [![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=white)](#) [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](#)
# Forum application

## Visit https://szyjar.github.io/modern-forum-application/ for live project.<br>
(Waking up the replit server may take a few seconds.)

Backend is hosted on replit.com
https://replit.com/@RedGlimmer/modern-forum-app

User authentication is done using express-session.
If you are having trouble logging in or registering, please make sure your browser allows third-party cookies.

# Functionality available in the application

Create new room, or join exisitng one and chat with people online.
* Real-time user status handled via WebSocket connection
* All messages are stored in a Mongo database
* Private chat with users online

![image](https://github.com/SzyJar/modern-forum-application/assets/107247457/b254ea82-ddac-46c4-9e21-c8166009fb91)


* Clicking on the conversation will take the client to the specified chat room
* Clicking on the active user will take the client to the private chat
* The client can see who is typing and who is present in a conversation
* Creating a new conversation is done in the pop-up window that appears after pressing the "Create public chat" button

# API Endpoints
## Login or register
- Method: `POST`
- Endpoint: `https://modern-forum-app.redglimmer.repl.co/signup`
```json
{
  "name": "your_username",
  "password": "your_password",
  "newuser": false,
  "avatar": 3
}
```
"newuser" false: login, true: register<br>
"avatar" avatar number (1-5) - Only used for registering new user.
## Logout
- Method: `POST`
- Endpoint: `https://modern-forum-app.redglimmer.repl.co/logout`
## Get all chat rooms
Session cookie is required
- Method: `GET`
- Endpoint: `https://modern-forum-app.redglimmer.repl.co/chat`
## See chat messages
Session cookie is required
- Method: `GET`
- Endpoint: `https://modern-forum-app.redglimmer.repl.co/chat/:chatname`
## Send message
Session cookie is required
- Method: `Post`
- Endpoint: `https://modern-forum-app.redglimmer.repl.co/chat/:chatname`
```json
{
  "content": "message_content"
}
```
## Make new chat room
Session cookie is required
- Method: `POST`
- Endpoint: `https://modern-forum-app.redglimmer.repl.co/chat/:chatname`
```json
{
  "users": ["user_name", "user_name"]
}
```
Users array contains users allowed to enter chat room. Leave empty for public chat.
