import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body || {};

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    // Placeholder: integrate with real user storage here (DB / auth provider)
    // For now we return success without persisting.
    return NextResponse.json(
      { ok: true, message: "User registered (placeholder)." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register error", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
