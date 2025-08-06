# 🔐 SecureAuth - MERN Stack Authentication System

<div align="center">
  
![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

*A robust, full-stack authentication system built with modern web technologies*

[🚀 Live Demo](https://your-demo-link.com) • [📖 Documentation](https://your-docs-link.com) • [🐛 Report Bug](https://github.com/yourusername/project/issues)

</div>

---

## ✨ Features

**🔒 Security First**
- JWT-based authentication with refresh tokens
- Password hashing using bcrypt
- Protected routes and middleware
- CORS configuration for secure cross-origin requests

**👤 User Management**
- User registration with email verification
- Secure login/logout functionality
- Password reset via email
- Profile management and updates

**🎨 Modern UI/UX**
- Responsive design for all devices
- Clean and intuitive interface
- Real-time form validation
- Loading states and error handling

**⚡ Performance & Reliability**
- MongoDB database with Mongoose ODM
- RESTful API architecture
- Input sanitization and validation
- Environment-based configuration

---

## 🛠️ Tech Stack

### Frontend
- **React 18+** - Modern UI library with hooks
- **React Router Dom** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form handling and validation
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing library
- **Nodemailer** - Email sending functionality

### DevOps & Tools
- **Vite** - Fast build tool for frontend
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **Postman** - API testing

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:

```bash
Node.js (v16 or higher)
MongoDB (v4.4 or higher)
Git
npm or yarn package manager
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mern-auth-system.git
cd mern-auth-system
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Environment Setup**

Create a `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mern_auth
DATABASE_NAME=mern_auth

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_REFRESH_SECRET=your_refresh_secret_key_here
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Frontend URL
CLIENT_URL=http://localhost:3000
```

5. **Start the application**

**Backend (Terminal 1):**
```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm run dev
```

Your application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## 📁 Project Structure

```
mern-auth-system/
├── 📁 backend/
│   ├── 📁 config/
│   │   └── database.js          # MongoDB connection configuration
│   ├── 📁 controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── userController.js    # User management logic
│   ├── 📁 middleware/
│   │   ├── authMiddleware.js    # JWT verification middleware
│   │   └── errorMiddleware.js   # Global error handling
│   ├── 📁 models/
│   │   └── User.js              # User schema definition
│   ├── 📁 routes/
│   │   ├── authRoutes.js        # Authentication endpoints
│   │   └── userRoutes.js        # User management endpoints
│   ├── 📁 utils/
│   │   ├── sendEmail.js         # Email utility functions
│   │   └── generateToken.js     # JWT token generation
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Express server entry point
│
├── 📁 frontend/
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 auth/
│   │   │   │   ├── Login.jsx        # Login form component
│   │   │   │   ├── Register.jsx     # Registration form
│   │   │   │   └── ResetPassword.jsx # Password reset form
│   │   │   ├── 📁 common/
│   │   │   │   ├── Header.jsx       # Navigation header
│   │   │   │   ├── Footer.jsx       # Page footer
│   │   │   │   └── ProtectedRoute.jsx # Route protection wrapper
│   │   │   └── 📁 ui/
│   │   │       ├── Button.jsx       # Reusable button component
│   │   │       ├── Input.jsx        # Form input component
│   │   │       └── Modal.jsx        # Modal dialog component
│   │   ├── 📁 context/
│   │   │   └── AuthContext.jsx      # Authentication state management
│   │   ├── 📁 hooks/
│   │   │   └── useAuth.jsx          # Custom authentication hook
│   │   ├── 📁 pages/
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Dashboard.jsx        # User dashboard
│   │   │   └── Profile.jsx          # User profile management
│   │   ├── 📁 services/
│   │   │   └── api.js               # API configuration and calls
│   │   ├── 📁 utils/
│   │   │   └── helpers.js           # Utility functions
│   │   ├── App.jsx                  # Main App component
│   │   ├── main.jsx                 # Application entry point
│   │   └── index.css                # Global styles
│   ├── package.json
│   └── vite.config.js               # Vite configuration
│
├── .gitignore
├── README.md
└── package.json                     # Root package.json for scripts
```

---

## 🔗 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | User login | ❌ |
| POST | `/api/auth/logout` | User logout | ✅ |
| POST | `/api/auth/refresh` | Refresh access token | ❌ |
| POST | `/api/auth/forgot-password` | Send password reset email | ❌ |
| POST | `/api/auth/reset-password/:token` | Reset password with token | ❌ |
| POST | `/api/auth/verify-email/:token` | Verify email address | ❌ |

### User Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users/profile` | Get user profile | ✅ |
| PUT | `/api/users/profile` | Update user profile | ✅ |
| PUT | `/api/users/change-password` | Change password | ✅ |
| DELETE | `/api/users/profile` | Delete user account | ✅ |

---

## 🎯 Usage Examples

### User Registration
```javascript
const registerUser = async (userData) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Registration successful
      console.log('User registered:', data.user);
      return data;
    } else {
      // Handle registration error
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Registration failed:', error.message);
  }
};
```

### Protected Route Access
```javascript
// Using the custom hook in a React component
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    // Redirect to login
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {/* Dashboard content */}
    </div>
  );
};
```

---

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test

# Run all tests
npm run test:all
```

---

## 🚀 Deployment

### Using Heroku

1. **Prepare for deployment**
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login
```

2. **Create Heroku apps**
```bash
# Create backend app
heroku create your-app-backend

# Create frontend app (optional - you can use Netlify/Vercel)
heroku create your-app-frontend
```

3. **Configure environment variables**
```bash
heroku config:set MONGODB_URI=your_production_mongodb_uri
heroku config:set JWT_SECRET=your_production_jwt_secret
# ... set all other environment variables
```

4. **Deploy**
```bash
git push heroku main
```

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build individually
docker build -t mern-auth-backend ./backend
docker build -t mern-auth-frontend ./frontend
```

---

## 🤝 Contributing

We love contributions! Here's how you can help make this project even better:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/) for excellent guides
- [Express.js](https://expressjs.com/) for the robust backend framework
- [MongoDB](https://www.mongodb.com/) for the flexible database solution
- [JWT.io](https://jwt.io/) for authentication insights
- Open source community for inspiration and support

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/mern-auth-system?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/mern-auth-system?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/mern-auth-system)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/mern-auth-system)

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

</div>
