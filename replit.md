# Portfolio Application - Replit Configuration

## Overview

This is a modern full-stack portfolio website built for Karan Kumar, a B.Tech IT student and Full Stack Developer. The application showcases personal information, skills, projects, education, and includes a functional contact form. It's built using React.js for the frontend, Express.js for the backend, and uses Drizzle ORM with PostgreSQL for data persistence.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React.js with Vite for fast development and building
- **Backend**: Node.js with Express.js providing RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design
- **Development Environment**: Replit with hot reload and automatic deployments

## Key Components

### Frontend Architecture
- **React Router**: Using wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and responsive design
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Custom scroll animations and intersection observers

### Backend Architecture
- **Express.js Server**: RESTful API with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory fallback and PostgreSQL support
- **Validation**: Zod schemas for request/response validation
- **Development Setup**: Vite integration for seamless development experience

### Database Schema
```typescript
// Users table for future authentication
users: {
  id: serial (primary key)
  username: text (unique, not null)
  password: text (not null)
}

// Contact form submissions
contacts: {
  id: serial (primary key)
  firstName: text (not null)
  lastName: text (not null)
  email: text (not null)
  subject: text (not null)
  message: text (not null)
  createdAt: timestamp (default now)
}
```

## Data Flow

1. **Client Request**: User interacts with React components
2. **Form Submission**: Contact form data validated with Zod schemas
3. **API Call**: React Query handles HTTP requests to Express endpoints
4. **Server Processing**: Express routes validate and process requests
5. **Database Operations**: Drizzle ORM executes type-safe database queries
6. **Response**: JSON responses sent back to client with success/error status

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern features
- **Express.js**: Node.js web framework for API routes
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Vite**: Build tool and development server with HMR

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library with consistent design
- **class-variance-authority**: Utility for component variants

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### Database and Storage
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **connect-pg-simple**: PostgreSQL session store (prepared for future auth)

## Deployment Strategy

### Development Environment
- **Replit Integration**: Automatic setup with Node.js 20, web server, and PostgreSQL 16
- **Hot Reload**: Vite development server with instant updates
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Production Build
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Express serves built frontend files in production
- **Deployment Target**: Replit Autoscale with automatic scaling

### Build Commands
```json
{
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "db:push": "drizzle-kit push"
}
```

## Changelog
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.