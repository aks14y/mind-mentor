import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "appointments.json");

async function readDb(): Promise<Record<string, any[]>> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeDb(data: Record<string, any[]>) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id && !session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userKey = session.user.id || session.user.email!;
  const db = await readDb();
  const appointments = db[userKey] || [];
  return NextResponse.json({ appointments });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id && !session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userKey = session.user.id || session.user.email!;
  const body = await req.json();
  const { date, time, type, notes } = body || {};
  if (!date || !time || !type) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const db = await readDb();
  const list = db[userKey] || [];
  const appointment = {
    id: `${Date.now()}`,
    date,
    time,
    type,
    notes: notes || "",
    createdAt: new Date().toISOString(),
  };
  list.unshift(appointment);
  db[userKey] = list;
  await writeDb(db);
  return NextResponse.json({ ok: true, appointment }, { status: 201 });
}


