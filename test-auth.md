# Authentication Testing Guide

## Quick Test Steps

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test Demo Authentication**:
   - Go to `http://localhost:3000/auth/signin`
   - Click "Fill Demo Credentials" button
   - Click "Sign In"
   - You should be redirected to `/dashboard`

3. **Test Protected Routes**:
   - Try accessing `http://localhost:3000/dashboard` without signing in
   - You should be redirected to `/auth/signin`
   - After signing in, you should be able to access the dashboard

4. **Test Profile Page**:
   - From the dashboard or navbar, click on your profile
   - You should see the profile page with your information

5. **Test Sign Out**:
   - Click "Sign Out" from the navbar or dashboard
   - You should be redirected to the home page
   - Try accessing `/dashboard` again - you should be redirected to sign-in

## Expected Behavior

### ✅ Working Features:
- Demo credentials authentication (demo@example.com / demo123)
- Protected route middleware
- Session persistence across page refreshes
- User menu in navbar with profile and sign-out options
- Responsive design on mobile and desktop
- Error handling for invalid credentials
- Loading states during authentication

### 🔧 Optional Features:
- Google OAuth (requires setup in Google Cloud Console)
- Profile editing (UI ready, backend integration needed)

## Troubleshooting

### Common Issues:

1. **"NEXTAUTH_SECRET is not set"**:
   - Add `NEXTAUTH_SECRET=your-secret-here` to `.env.local`

2. **Google OAuth not working**:
   - Set up Google Cloud Console project
   - Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `.env.local`
   - Set `NEXT_PUBLIC_GOOGLE_ENABLED=true` to show Google button

3. **Session not persisting**:
   - Check that `NEXTAUTH_URL` is set correctly in `.env.local`
   - Ensure you're using the same domain for testing

4. **TypeScript errors**:
   - Run `npm run build` to check for any type errors
   - The authentication types are properly extended

## Demo User Data

When signed in with demo credentials, you'll see:
- **Name**: Demo User
- **Email**: demo@example.com
- **Profile**: Editable profile page with mock data
- **Dashboard**: Sample therapy session data and statistics
