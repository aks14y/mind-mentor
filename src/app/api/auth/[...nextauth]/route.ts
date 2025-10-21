import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

// Temporary check to verify required environment variables are loaded
if (!process.env.NEXTAUTH_URL || !process.env.NEXTAUTH_SECRET) {
  console.error("[NextAuth] Missing required env:", {
    NEXTAUTH_URL: !!process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "set" : "missing",
  })
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
