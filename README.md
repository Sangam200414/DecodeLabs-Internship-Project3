# Backend API with MongoDB – Project 3

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen)

## 📌 Project Overview

This project is part of the **DecodeLabs Full Stack Development Internship – Project 3**.

The goal of this project is to extend the backend API by integrating a **MongoDB database**.  
The server now stores and retrieves user data directly from the database instead of temporary memory.

---

## 🚀 Features

- Backend API built with **Node.js and Express**
- **MongoDB database integration**
- **Mongoose ODM** for schema and data handling
- **GET API** to fetch users from the database
- **POST API** to store users in the database
- Basic **input validation**
- JSON request and response handling

---

## 📂 Project Structure

```
DecodeLabs-Internship-Project3
│
├── README.md
├── server.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Running the Project

Install dependencies

```
npm install
```

Start the server

```
node server.js
```

Server will run at

```
http://localhost:3000
```

Example endpoint

```
http://localhost:3000/users
```

---

## 🔗 API Endpoints

### GET Users

```
GET /users
```

Example Response

```json
{
 "message": "Users fetched successfully",
 "data": [
   {
     "_id": "64abcd123456",
     "name": "Sangam",
     "email": "achsangam2004@gmail.com"
   }
 ]
}
```

---

### POST User

```
POST /users
```

Request Body

```json
{
 "name": "Sangam",
 "email": "achsangam2004@gmail.com"
}
```

Response

```json
{
 "message": "User saved in database",
 "data": {
   "_id": "64abcd123456",
   "name": "Sangam",
   "email": "achsangam2004@gmail.com"
 }
}
```

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

---

## 📖 Learning Outcome

Through this project I learned how to:

- Connect **Node.js with MongoDB**
- Use **Mongoose for database schemas**
- Store and retrieve data from a database
- Handle backend data persistence

---

## 👨‍💻 Author

**Sangam Maurya**  
DecodeLabs Internship – 2026
