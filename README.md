# Forum application

## Visit https://szyjar.github.io/modern-forum-application/ for live project.<br>
(Waking up the replit may take a few seconds.)

Backend is hosted on replit.com
https://replit.com/@RedGlimmer/modern-forum-app

User authentication is done using express-session.
If you are having trouble logging in or registering, please make sure your browser allows third-party cookies.

#

Client sends request with axios to API hosted on replit.com, server performs operations on Mongo database and returns information to client. In addition,
a web socket connection is established between clients and server to handle client status. Other clients can see who is in which chat room and who is typing. <br><br>
When user makes request to modify database (make new chat room, send message) server makes changes in database accordingly and sends information to other clients that a change has been made.

![image](https://github.com/SzyJar/modern-forum-application/assets/107247457/74cdba3d-122c-4a4a-9277-a9f49f9ce342)


Clicking on the conversation or user will take the client to the specified chat room.
The client can see who is typing and who is present in a conversation.
Creating a new conversation is done in the pop-up window that appears after pressing the "Create New Room" button.

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
"avatar" avatar number (1-5) - Only used for registering new user<br>
"newuser" false: login, true: register
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
