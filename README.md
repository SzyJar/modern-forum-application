# Forum application

Visit https://szyjar.github.io/modern-forum-application/ for live project.<br>
(Waking up the replit may take a few seconds.)

Backend is hosted on replit.com
https://replit.com/@RedGlimmer/modern-forum-app

If you are having trouble logging in or registering, please make sure your browser allows third-party cookies.

![image](https://github.com/SzyJar/modern-forum-application/assets/107247457/af3e9191-3739-4af3-b6b9-70b6c45156a6)



# How it works

Client (frontend) sends request with axios to API hosted on replit.com (backend), server performs operations on Mongo database and returns information to client. In addition,
a web socket connection is established between clients and server to handle client status. Other clients can see who is in which chat room and who is typing. <br><br>
When user makes request to modify database (make new chat room, send message) server makes changes in database accordingly and sends information to other clients that a change has been made.

## Home screen
Home screen shows available chat rooms and active users.

![image](https://github.com/SzyJar/modern-forum-application/assets/107247457/b3a628f6-93ca-49b4-95fe-3914443f677c)

## In conversation
By pressing on the conversation or user client gets directed to the specified chat room.

![image](https://github.com/SzyJar/modern-forum-application/assets/107247457/a5b02503-3acd-4583-9d66-939126d52b36)

Client can see who is currently typing and who is present in a conversation.

## New conversation
Creating a new conversation is done in the pop-up window that appears after pressing the "Create new room" button.

![image](https://github.com/SzyJar/modern-forum-application/assets/107247457/2d7970d2-54d7-4fa6-a4d8-7018bc54424a)


