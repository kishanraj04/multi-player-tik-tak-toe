# 🎮 Real-Time Multiplayer Tic Tac Toe Game

A full-stack real-time **Multiplayer Tic Tac Toe** game where users can:
- Authenticate via signup/login
- View and challenge active users
- Accept/decline game requests
- Play a real-time Tic Tac Toe game
- Chat live during the match
- Track Win/Loss/Draw in their profile
- See match result at game end

---

## 🛠 Tech Stack

### 🔹 Frontend
- **React 19**
- **Material UI (MUI)**
- **Redux Toolkit**
- **Socket.IO Client**
- **React Router v7**
- **Toast Notifications (React Toastify)**
- **Emoji Picker (emoji-mart)**
- **Vite** for blazing fast dev server

### 🔹 Backend
- **Node.js + Express 5**
- **Socket.IO** for WebSocket support
- **MongoDB + Mongoose** for database
- **JWT** for secure login
- **Bcrypt** for password hashing
- **Multer + Cloudinary** (optional: for profile image uploads)
- **CORS, Cookie-parser, dotenv, moment**

---

## ✅ Features

### 🔐 Authentication
- Register/Login with hashed passwords
- JWT for secure sessions
- Cookies to persist login

### 👥 Active Players & Matchmaking
- View online users
- Send/receive game requests
- Accept or decline challenge
- Only one request accepted at a time

### 🎮 Real-time Game Logic
- Game begins only when request is accepted
- Synchronized 3x3 board using Socket.IO
- Show turns and disable board when not your turn
- Detect **Win**, **Loss**, **Draw**

### 📊 Profile & Stats
- View user profile with:
  - Avatar and name
  - Total games played
  - Wins, losses, draws
- Game stats updated after each match

### 💬 In-Game Chat
- Realtime messaging between players during game
- Supports emojis
- Optional: draggable/resizable chat box
- Chat cleared after match ends


