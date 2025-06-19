# Bhakti Jagtap Portfolio - Developer Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Bhakti Jagtap, a Java developer specializing in Spring Boot, Hibernate, and REST APIs. The application is a full-stack web application featuring a React frontend with a Node.js/Express backend, designed to showcase professional experience, projects, and provide a contact form for potential employers or collaborators.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **API Design**: RESTful API architecture
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type validation

### UI/UX Design
- **Component System**: shadcn/ui components built on Radix UI primitives
- **Theme**: Professional light theme with Java/Spring Boot brand colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components from Radix UI

## Key Components

### Frontend Components
1. **Navigation System**: Fixed navbar with smooth scrolling to sections
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Section**: Personal introduction with professional photo
4. **Education Section**: Academic background with cards layout
5. **Skills Section**: Technical skills categorized by type
6. **Projects Section**: Portfolio projects with descriptions and tech stacks
7. **Certifications Section**: Professional certifications display
8. **Contact Section**: Interactive contact form with validation

### Backend Services
1. **Contact API**: Handles contact form submissions
2. **Resume Download**: Serves PDF resume file
3. **Static File Serving**: Handles built frontend assets

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schema
   - POST request sent to `/api/contact` endpoint
   - Backend validates data and stores in PostgreSQL database
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Resume Download**:
   - User clicks download resume button
   - GET request sent to `/api/resume` endpoint
   - Backend serves PDF file from attached_assets directory
   - File downloaded to user's device

3. **Static Content**:
   - Frontend built with Vite into static assets
   - Express serves built files for production
   - Development uses Vite dev server with HMR

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript
- **Component Library**: Radix UI primitives via shadcn/ui
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React and React Icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: TanStack Query with native fetch
- **Date Handling**: date-fns

### Backend Dependencies
- **Server Framework**: Express.js
- **Database Client**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Kit
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for server bundling

### Development Tools
- **TypeScript**: Type checking and compilation
- **ESLint/Prettier**: Code formatting and linting
- **Vite**: Frontend build tool and dev server
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Replit Deployment
- **Environment**: Replit with Node.js 20 and PostgreSQL 16
- **Build Process**: 
  - Frontend: `vite build` creates production assets
  - Backend: `esbuild` bundles server code
- **Runtime**: Production mode serves built frontend from Express
- **Database**: PostgreSQL instance managed by Replit
- **Port Configuration**: Application runs on port 5000, exposed on port 80

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)

### File Structure
```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── attached_assets/ # Static files (resume PDF)
├── migrations/      # Database migrations
└── dist/           # Built production files
```

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 19, 2025. Initial setup