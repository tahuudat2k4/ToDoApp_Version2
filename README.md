# ToDoApp Version 2

A full-stack ToDo application built with React and Node.js, featuring user authentication and task management capabilities.
# UI
<img width="2850" height="1441" alt="image" src="https://github.com/user-attachments/assets/64fc4587-9faa-4c0f-b511-5581f627f49c" />
<img width="2879" height="1446" alt="image" src="https://github.com/user-attachments/assets/7cd9076d-76f1-4d91-988d-6215b93fa36e" />
<img width="2879" height="1446" alt="image" src="https://github.com/user-attachments/assets/2722a4d9-6841-4305-8c58-49f8884b0fba" />
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
