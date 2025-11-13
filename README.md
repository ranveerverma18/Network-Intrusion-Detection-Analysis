# 🛡️ Network Intrusion Detection Analysis Platform

A comprehensive full-stack web application for managing, analyzing, and visualizing machine learning model performance metrics for network intrusion detection using the CICIDS-2017 dataset. Built with modern technologies and featuring role-based access control, interactive data visualization, and seamless OAuth integration.

## 🌟 Overview

This platform provides researchers and cybersecurity professionals with a centralized dashboard to track, compare, and analyze machine learning models trained on the CICIDS-2017 network intrusion detection dataset. The system supports multiple ML frameworks (Scikit-learn, Spark ML, TensorFlow, PyTorch) and provides real-time interactive visualizations of model performance metrics.

### Key Capabilities

- **Model Management**: Create, read, update, and delete ML model evaluation records
- **Interactive Visualization**: Dynamic grouped bar charts for comparing model metrics
- **Authentication**: Secure login with local credentials or Google OAuth 2.0
- **Role-Based Access**: Admin users can modify data; viewers have read-only access
- **Real-time Updates**: Charts and model cards update automatically on data changes

## ✨ Features

### 🔐 Authentication & Authorization

- **Local Authentication**: Email/password login with bcrypt encryption
- **Google OAuth 2.0**: One-click sign-in with Google accounts
- **Session Management**: Secure session-based authentication
- **Role-Based Access Control (RBAC)**:
  - **Admin**: Full CRUD operations on models
  - **Viewer**: Read-only access to models and visualizations

### 📊 Data Visualization

- **Interactive Grouped Bar Charts**: Compare Accuracy, Precision, Recall, and F1-Score across models
- **Dynamic Updates**: Charts refresh automatically when models are added/deleted
- **Custom Tooltips**: Hover over bars to see exact metric values
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Dark Theme**: Modern, eye-friendly interface inspired by BetterStack

### 🎯 Model Management

- **CRUD Operations**: Full create, read, update, delete functionality for admin users
- **Model Metrics Tracking**:
  - Accuracy
  - Precision
  - Recall
  - F1-Score
  - Framework (Scikit-learn, Spark ML, TensorFlow, PyTorch)
  - Creation and update timestamps
- **Validation**: Built-in data validation ensuring metric values are between 0 and 1
- **Search & Filter**: Easy navigation through model catalog

### 🎨 User Experience

- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Loading States**: Skeleton screens and spinners for better perceived performance
- **Error Handling**: User-friendly error messages and validation feedback
- **Empty States**: Helpful guidance when no data is available

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0**: Modern UI library with hooks and functional components
- **React Router DOM 7.1.1**: Client-side routing and navigation
- **Recharts 3.4.1**: Interactive charting library for data visualization
- **Axios 1.7.9**: HTTP client for API communication
- **Vite 7.2.2**: Lightning-fast build tool and dev server
- **CSS3**: Custom styling with modern layout techniques (Flexbox, Grid)

### Backend

- **Node.js**: JavaScript runtime environment
- **Express 5.1.0**: Fast, minimalist web framework
- **PostgreSQL 8.16.3**: Robust relational database
- **Passport.js**: Authentication middleware
  - passport-local: Username/password authentication
  - passport-google-oauth2: Google OAuth integration
- **bcrypt 6.0.0**: Password hashing and encryption
- **express-session 1.18.2**: Session management
- **CORS 2.8.5**: Cross-Origin Resource Sharing configuration
- **dotenv 17.2.3**: Environment variable management

### Machine Learning

- **Python 3.x**: Core programming language for ML implementation
- **PySpark**: Distributed data processing and preprocessing
- **Scikit-learn**: Traditional ML algorithms
- **NumPy & Pandas**: Data manipulation and numerical computing
- **Matplotlib**: Visualization of feature importance and results
- **CICIDS-2017 Dataset**: Canadian Institute for Cybersecurity intrusion detection dataset

## 🏗️ Architecture

```
Network-Intrusion-Detection-Analysis/
│
├── backend/                    # Node.js/Express API Server
│   ├── index.js               # Main server file with routes
│   ├── package.json           # Backend dependencies
│   └── .env.example           # Environment variables template
│
├── frontend/                   # React Application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── App.jsx        # Root component with routing
│   │   │   ├── Dashboard.jsx  # Main dashboard container
│   │   │   ├── MetricsChart.jsx # Interactive bar chart
│   │   │   ├── ModelsList.jsx # Model grid view
│   │   │   ├── ModelCard.jsx  # Individual model display
│   │   │   ├── ModelForm.jsx  # Add/Edit modal form
│   │   │   ├── Navbar.jsx     # Navigation bar
│   │   │   ├── Login.jsx      # Login page
│   │   │   ├── Register.jsx   # Registration page
│   │   │   ├── Home.jsx       # Landing page
│   │   │   └── PrivateRoute.jsx # Auth wrapper
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Global auth state
│   │   └── main.jsx           # App entry point
│   ├── package.json           # Frontend dependencies
│   └── index.html             # HTML template
│
├── ML/                         # Machine Learning Notebooks
│   ├── algo_using_scikit-learn.ipynb
│   └── processing_algo_sparkml.ipynb
│
└── database_schema.sql        # PostgreSQL schema
```

### Data Flow

```
User Action → React Component → Axios HTTP Request → Express Route → 
PostgreSQL Database → Response → State Update → UI Re-render
```

## 🤖 Machine Learning Analysis

This project includes machine learning notebooks for training and evaluating intrusion detection models on the CICIDS-2017 dataset.

### 📊 CICIDS-2017 Dataset

- **Source**: Canadian Institute for Cybersecurity
- **Size**: ~2.8 million network flow records
- **Features**: 78+ network flow characteristics
- **Attack Types**: Brute Force, DoS/DDoS, Web attacks, Infiltration, Botnet, PortScan, and Benign traffic

### 🔬 Implementation

**Notebooks:**
- `ML/algo_using_scikit-learn.ipynb` - Scikit-learn implementations
- `ML/processing_algo_sparkml.ipynb` - Spark ML distributed processing

**Preprocessing Pipeline:**
- Data loading and cleaning using PySpark
- Feature engineering and standardization
- Label encoding for multi-class classification
- Stratified sampling (~700k records)

**Models Implemented:**
- XGBoost (98.5% accuracy)
- Random Forest
- Logistic Regression
- Decision Tree
- K-Means Clustering
- Spark MLlib algorithms

**Evaluation Metrics:**
- Accuracy, Precision, Recall, F1-Score
- Feature importance analysis
- Classification reports

### 📈 Using Results in Dashboard

1. Train models in Jupyter notebooks
2. Extract evaluation metrics from outputs
3. Login as admin to web platform
4. Add model results via "Add New Model" form
5. View interactive comparison charts

**Dataset Download**: Available at [CIC IDS-2017](https://www.unb.ca/cic/datasets/ids-2017.html)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **PostgreSQL** (v12 or higher)
- **npm** or **yarn**
- **Google OAuth Credentials** (optional, for OAuth login)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/RiteshKrChauhan/Network-Intrusion-Detection-Analysis.git
cd Network-Intrusion-Detection-Analysis
```

2. **Set up the database**

```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE nids;

# Connect to database
\c nids;

# Run schema (or use the SQL file)
\i database_schema.sql
```

3. **Configure backend environment variables**

```bash
cd backend
cp .env.example .env
```

Edit `.env` file:

```env
# Database Configuration
PG_USER=your_postgres_username
PG_HOST=localhost
PG_DATABASE=nids
PG_PASSWORD=your_postgres_password
PG_PORT=5432

# Session Secret
SESSION_SECRET=your_random_session_secret_here

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

4. **Install backend dependencies**

```bash
npm install
```

5. **Install frontend dependencies**

```bash
cd ../frontend
npm install
```

### Running the Application

1. **Start the backend server** (Terminal 1)

```bash
cd backend
npm start
# Server runs on http://localhost:3000
```

2. **Start the frontend development server** (Terminal 2)

```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

3. **Access the application**

Open your browser and navigate to `http://localhost:5173`

### Creating the First Admin User

You can either:

**Option 1**: Register through the UI and manually update the role in the database:

```sql
UPDATE users SET role = 'admin' WHERE email = 'your_email@example.com';
```

**Option 2**: Insert an admin user directly:

```sql
-- Password: 'admin123' (hashed with bcrypt)
INSERT INTO users (email, password, role) 
VALUES ('admin@example.com', '$2b$10$hash_here', 'admin');
```

## 🗄️ Database Schema

### Users Table

| Column   | Type         | Constraints                    |
|----------|--------------|--------------------------------|
| id       | SERIAL       | PRIMARY KEY                    |
| email    | VARCHAR(255) | UNIQUE, NOT NULL               |
| password | VARCHAR(255) | NOT NULL                       |
| role     | VARCHAR(50)  | DEFAULT 'viewer', CHECK constraint |

### Models Table

| Column        | Type         | Constraints                    |
|---------------|--------------|--------------------------------|
| id            | SERIAL       | PRIMARY KEY                    |
| model_name    | VARCHAR(100) | NOT NULL                       |
| framework     | VARCHAR(50)  | NOT NULL                       |
| accuracy      | NUMERIC(6,4) | NOT NULL, CHECK (0 to 1)       |
| precision     | NUMERIC(6,4) | NOT NULL, CHECK (0 to 1)       |
| recall        | NUMERIC(6,4) | NOT NULL, CHECK (0 to 1)       |
| f1_score      | NUMERIC(6,4) | NOT NULL, CHECK (0 to 1)       |
| date_created  | DATE         | DEFAULT CURRENT_DATE           |
| date_updated  | DATE         | -                              |

## 📡 API Documentation

### Authentication Endpoints

#### POST `/auth/register`
Register a new user account

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:** `200 OK` or error message

---

#### POST `/auth/login`
Authenticate with email and password

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "id": 1,
  "email": "user@example.com",
  "role": "admin"
}
```

---

#### GET `/auth/google`
Initiate Google OAuth flow (redirects to Google)

---

#### GET `/auth/google/callback`
Google OAuth callback URL (redirects to frontend)

---

#### GET `/auth/status`
Check current authentication status

**Response:**
```json
{
  "isAuthenticated": true,
  "user": {
    "id": 1,
    "email": "user@example.com",
    "role": "admin"
  }
}
```

---

#### POST `/auth/logout`
End the current session

**Response:** `200 OK`

---

### Model Endpoints

#### GET `/models`
Retrieve all models (requires authentication)

**Response:**
```json
[
  {
    "id": 1,
    "model_name": "Random Forest",
    "framework": "Scikit-learn",
    "accuracy": "0.9850",
    "precision": "0.9820",
    "recall": "0.9890",
    "f1_score": "0.9855",
    "date_created": "2025-11-13",
    "date_updated": null
  }
]
```

---

#### GET `/models/:id`
Retrieve a specific model by ID

**Response:** Single model object

---

#### POST `/models`
Create a new model (admin only)

**Request Body:**
```json
{
  "model_name": "Decision Tree",
  "framework": "Scikit-learn",
  "accuracy": 0.9234,
  "precision": 0.9156,
  "recall": 0.9312,
  "f1_score": 0.9234
}
```

**Response:** Created model object with ID

---

#### PUT `/models/:id`
Update an existing model (admin only)

**Request Body:** Same as POST (all fields required)

**Response:** Updated model object

---

#### DELETE `/models/:id`
Delete a model (admin only)

**Response:** `200 OK`