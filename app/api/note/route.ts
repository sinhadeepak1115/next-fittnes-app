import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json("/login");
  }
  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "You need to be logged in to create a note" },
        { status: 401 },
      );
    }
    const note = await req.json();
    if (!note || note.note.trim().length === 0) {
      return NextResponse.json(
        { message: "Note content cannot be empty" },
        { status: 400 },
      );
    }
    if (note.length > 1000) {
      return NextResponse.json(
        { message: "Note content cannot be more than 1000 characters" },
        { status: 400 },
      );
    }
    const newNote = await prisma.note.create({
      data: { content: note.note, authorEmail: user.email },
    });
    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
