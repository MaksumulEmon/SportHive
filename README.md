# SportHive

A modern Sports Event Management Platform built with Next.js, Express.js, and MongoDB.

## Features

- **User Authentication** - Register, login, and JWT-based session management
- **Admin System** - First registered user becomes admin with full access
- **Event Management** - Create, read, update, and delete sports events
- **Event Discovery** - Search, filter by category, and sort events
- **Purchase System** - Register for events with ownership restrictions
- **User Dashboard** - Personalized dashboard with statistics and charts
- **Admin Dashboard** - Manage users, events, and view statistics
- **Responsive Design** - Works on mobile, tablet, and desktop
- **RESTful API** - Full CRUD operations with proper error handling

## Project Structure

```
SportHive/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/              # Next.js App Router pages
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React context (Auth)
│   │   └── lib/              # API services and utilities
│   └── package.json
├── backend/                  # Express.js backend API
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/       # Authentication middleware
│   │   ├── models/           # Mongoose models
│   │   └── routes/           # API routes
│   └── package.json
└── README.md
```

## Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for dashboard
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MaksumulEmon/SportHive.git
cd SportHive
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd backend
npm install
```

4. **Configure Environment Variables**

Create `.env` files in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

5. **Start Development Servers**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

6. **Access the Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user (first user becomes admin)
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Events
- `GET /api/events` - Get all events (with filters)
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (protected)
- `PUT /api/events/:id` - Update event (protected, owner or admin)
- `DELETE /api/events/:id` - Delete event (protected, owner or admin)
- `GET /api/events/user/me` - Get user's events (protected)

### Purchases
- `POST /api/purchases` - Purchase/register for event (protected)
- `GET /api/purchases/my` - Get user's purchases (protected)
- `GET /api/purchases/check/:eventId` - Check if purchased (protected)
- `DELETE /api/purchases/:id` - Cancel purchase (protected)

### Admin (Admin only)
- `GET /api/admin/users` - List all users
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/events` - List all events
- `GET /api/admin/stats` - Dashboard statistics

### Health Check
- `GET /api/health` - Server health check

## Pages

- `/` - Homepage with hero, featured events, categories
- `/login` - User login
- `/register` - User registration
- `/profile` - User profile
- `/dashboard` - User dashboard with stats and charts
- `/events` - Explore all events with search and filters
- `/events/add` - Create new event (protected)
- `/events/manage` - Manage user's events (protected)
- `/events/[id]` - Event details with purchase option
- `/purchases` - My purchases/registrations (protected)
- `/admin` - Admin dashboard (admin only)
- `/admin/users` - User management (admin only)
- `/admin/events` - Event management (admin only)
- `/about` - About SportHive
- `/contact` - Contact form
- `/help` - Help & Support
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions

## License

This project is licensed under the MIT License.