# ToDoApp Version 2

A full-stack ToDo application built with React and Node.js, featuring user authentication and task management capabilities.

## 🚀 Features

- **User Authentication**: Secure signup and signin with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **RESTful API**: Express.js backend with MongoDB database
- **Protected Routes**: Authentication middleware for secure API access

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-Origin Resource Sharing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/tahuudat2k4/ToDoApp_Version2.git
cd ToDoApp_Version2
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory based on `.env.example`:

```env
PORT=3000
DEV_MODE=development
MONGO_URL_CLOUD=your_mongodb_connection_string_here
JWT_SECRET=your_secret_key_here
```

**Important**: Replace the following values:
- `MONGO_URL_CLOUD`: Your MongoDB connection string (from MongoDB Atlas or local MongoDB)
- `JWT_SECRET`: A secure random string for JWT token encryption

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

## 🚦 Running the Application

### Development Mode

You need to run both the backend and frontend servers simultaneously.

#### Terminal 1 - Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:3000` (or the PORT specified in your `.env` file).

#### Terminal 2 - Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173` (default Vite port).

### Production Mode

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd frontend
npm run build
npm run preview
```

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api
```

### Authentication Endpoints

#### Sign Up
- **POST** `/users/signup`
- **Body**: 
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

#### Sign In
- **POST** `/users/signin`
- **Body**: 
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: JWT token

### Task Endpoints (Protected)

All task endpoints require authentication. Include the JWT token in the request header:
```
Authorization: Bearer <your_jwt_token>
```

#### Get All Tasks
- **GET** `/tasks/getAll`

#### Create Task
- **POST** `/tasks/create`
- **Body**: 
  ```json
  {
    "title": "string",
    "description": "string",
    "completed": boolean
  }
  ```

#### Update Task
- **PATCH** `/tasks/update/:id`
- **Body**: 
  ```json
  {
    "title": "string",
    "description": "string",
    "completed": boolean
  }
  ```

#### Delete Task
- **DELETE** `/tasks/delete/:id`

## 📁 Project Structure

```
ToDoApp_Version2/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Authentication middleware
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # API routes
│   │   └── server.js        # Entry point
│   ├── .env.example         # Environment variables template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── lib/             # Utility functions
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🔧 Configuration

### MongoDB Connection

For **MongoDB Atlas** (Cloud):
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace `<password>` and `<database>` in the connection string
5. Add the connection string to your `.env` file

For **Local MongoDB**:
```env
MONGO_URL_CLOUD=mongodb://localhost:27017/todoapp
```

### JWT Secret

Generate a secure random string for your JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 🎨 Frontend Features

- Responsive design with Tailwind CSS
- Modern UI components from shadcn/ui
- Toast notifications with Sonner
- Client-side routing with React Router
- Form handling and validation
- Protected routes for authenticated users

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

- GitHub: [@tahuudat2k4](https://github.com/tahuudat2k4)

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/tahuudat2k4/ToDoApp_Version2/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
