# Authentication Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth (optional - for Google sign-in)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Enable Google OAuth in UI (optional)
NEXT_PUBLIC_GOOGLE_ENABLED=true
```

**Note**: The Google OAuth is optional. If you don't set up Google credentials, the app will work with demo credentials only.

## Demo Credentials

For testing purposes, you can use these demo credentials:
- **Email**: demo@example.com
- **Password**: demo123

## Features Implemented

### ✅ Authentication System
- NextAuth.js integration with JWT strategy
- Credentials provider for demo login
- Google OAuth provider (requires setup)
- Custom sign-in page with beautiful UI

### ✅ Protected Routes
- Dashboard page (`/dashboard`) - requires authentication
- Middleware protection for specified routes
- Automatic redirect to sign-in for unauthenticated users

### ✅ User Interface
- Updated navbar with authentication state
- User menu with profile and sign-out options
- Mobile-responsive authentication buttons
- Loading states and error handling

### ✅ Security Features
- JWT-based sessions
- Route protection middleware
- Secure sign-out with callback URL
- Environment variable configuration

## Getting Started

1. **Install dependencies** (already done):
   ```bash
   npm install next-auth @auth/prisma-adapter
   ```

2. **Set up environment variables**:
   - Copy the `.env.local` template above
   - Generate a secure `NEXTAUTH_SECRET` (you can use: `openssl rand -base64 32`)
   - For Google OAuth, set up a project in Google Cloud Console

3. **Test the authentication**:
   - Start your development server: `npm run dev`
   - Visit `/auth/signin` to test the sign-in page
   - Use demo credentials or set up Google OAuth
   - Try accessing `/dashboard` to test route protection

## Next Steps

- Set up a database (PostgreSQL, MySQL, etc.) for production
- Add user registration functionality
- Implement role-based access control
- Add password reset functionality
- Set up email verification
- Add more OAuth providers (GitHub, Facebook, etc.)

## File Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API route
│   ├── auth/signin/page.tsx             # Custom sign-in page
│   ├── dashboard/page.tsx               # Protected dashboard
│   └── providers.tsx                    # App providers
├── components/
│   ├── AuthProvider.tsx                 # NextAuth session provider
│   └── Navbar.tsx                       # Updated with auth
└── middleware.ts                        # Route protection
```
