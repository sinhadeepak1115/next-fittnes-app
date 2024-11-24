import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await getCurrentUser();
  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "You need to be logged in to create a workout" },
        { status: 401 },
      );
    }
    const {
      workoutName,
      date,
      time,
      reps,
      sets,
      weightBefore,
      weightAfter,
      height,
      trainerName,
    } = await req.json();

    const newWorkout = await prisma.workout.create({
      data: {
        workoutName: workoutName,
        date: date,
        time: time,
        reps: reps,
        sets: sets,
        weightBefore: weightBefore,
        weightAfter: weightAfter,
        height: height,
        trainerName: trainerName,
        authorEmail: user.email,
      },
    });
    return NextResponse.json(newWorkout);
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error creating the workout" },
      { status: 500 },
    );
  }
}
