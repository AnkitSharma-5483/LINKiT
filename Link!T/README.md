# LINK!T 🔗

<p align="center">
  <img src="public/logo.png" alt="LINK!T Logo" width="120"/>
</p>

<p align="center">
A modern <b>Linktree-inspired web application</b> built with <b>Next.js</b>, <b>MongoDB</b>, <b>GSAP</b>, and <b>Tailwind CSS</b> that enables users to create a personalized "link in bio" page and share all their important links through a single URL.
</p>

---

## 📖 Overview

LINK!T is a responsive web application that allows users to create their own customizable profile page containing multiple social or personal links.

Instead of sharing several URLs separately, users only need to share one LINK!T profile that contains everything.

The project recreates the modern Linktree experience with custom animations, responsive layouts, and a clean user interface.

---

## ✨ Features

- 🔗 Create your own unique LINK!T profile
- 👤 User Registration
- 🔐 User Login using Email or Username
- 📝 Add unlimited custom links
- 🖼️ Profile picture support
- 📄 Personal bio / description
- 🚫 Username uniqueness validation
- 🚫 Email uniqueness validation
- 💾 MongoDB database integration
- 📱 Fully responsive design
- ⚡ Fast UI built with Next.js App Router
- 🎬 Smooth GSAP animations
- 🍞 Toast notifications
- 🎨 Modern Linktree inspired interface

---

# 🚀 Demo

> Coming Soon

You can deploy the project easily using **Vercel**.

---

# 🛠 Tech Stack

### Frontend

- Next.js 15
- React 19
- Tailwind CSS
- GSAP
- React Toastify
- React Icons
- Bootstrap

### Backend

- Next.js API Routes

### Database

- MongoDB
- MongoDB Native Driver

### Tools

- VS Code
- Git
- GitHub

---

# 📂 Folder Structure

```
LINK!T
│
├── app
│   ├── api
│   │    ├── generate
│   │    ├── login
│   │    └── signup
│   │
│   ├── generate
│   ├── LogIn
│   ├── SignUp
│   ├── [username]
│   ├── page.js
│   └── layout.js
│
├── components
│   ├── Navbar
│   ├── Navbar1
│   ├── Cards
│   ├── Featured
│   ├── MovingCards
│   ├── MovingVideo
│   ├── WordSwitcher
│   └── ...
│
├── lib
│   └── mongodb.js
│
├── public
│
└── package.json
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/AnkitSharma-5483/LINKiT.git
```

Go inside the project

```bash
cd LINKiT
```

Install dependencies

```bash
npm install
```

Create a `.env.local`

```env
MONGODB_URI=your_mongodb_connection_string
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🔑 Environment Variables

```
MONGODB_URI=
```

---

# 🧠 How It Works

## 1. User Signup

- User enters email and profile information.
- Application checks if the email already exists.
- New user information is stored in MongoDB.

---

## 2. User Login

Users can log in using either

- Email
- Username

The backend verifies the account and returns the user details.

---

## 3. Generate LINK!T

After logging in, users can

- choose a username
- upload profile image URL
- write bio
- add multiple links

The application checks whether the username already exists before saving.

---

## 4. Public Profile

Each user receives a public profile similar to

```
/username
```

which contains

- Profile Picture
- Bio
- Social Links

---

# 🎨 UI Highlights

- Animated Hero Section
- Infinite Moving Cards
- Infinite Moving GIF Showcase
- Responsive Navbar
- Mobile Menu Animation
- Scroll Based Navbar
- Dynamic Word Switching
- Card Showcase
- FAQ Section
- Beautiful Footer

---

# 📱 Responsive Design

Designed for

- Desktop
- Laptop
- Tablet
- Mobile

---

# 💾 Database

MongoDB Collection

```
user
```

Stores

```
email
username
description
picture
links[]
```

---

# 🔄 API Routes

### Signup

```
POST /api/signup
```

Registers a new user after checking for duplicate email.

---

### Login

```
POST /api/login
```

Allows login using

- Email
- Username

---

### Generate

```
POST /api/generate
```

Creates a user's LINK!T after checking username availability.

---

# 📦 Dependencies

- Next.js
- React
- MongoDB
- GSAP
- React Toastify
- React Icons
- Bootstrap
- Tailwind CSS

---

# 🔮 Future Improvements

- Password Encryption
- Authentication with NextAuth
- JWT Authentication
- Google Login
- Drag & Drop Link Ordering
- Link Analytics
- Themes
- Dark Mode
- Custom Backgrounds
- Social Media Icons
- QR Code Generation
- Edit Profile
- Delete Links
- Dashboard
- Admin Panel

# 🤝 Contributing

Contributions are welcome.

Fork the repository and submit a Pull Request.

---

# 👨‍💻 Author

**Ankit Sharma**

GitHub:
https://github.com/AnkitSharma-5483

---

# ⭐ Show your support

If you like this project,

⭐ Star this repository

and consider following for more projects.

---

## 📄 License

This project is created for educational and learning purposes.
