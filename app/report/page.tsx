import Link from "next/link";
import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import LoginButton from "@/components/loginButton";

export default async function ReportsPage() {
  const user = await getCurrentUser();
  const posts = await prisma.workout.findMany({
    where: {
      authorEmail: user?.email,
    },
  });
  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-400 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Workout Reports
              </h1>
              <p className="text-gray-600 mb-6">
                Please log in to view your workout details and progress
              </p>
              <LoginButton />
            </div>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-lg">
          Workout Reports
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/report/${post.id}`}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4">
                  <h2 className="text-2xl font-bold text-white truncate">
                    {post.workoutName}
                  </h2>
                  <p className="text-sky-100 text-sm">{post.date}</p>
                </div>
                <div className="p-4 grid grid-cols-2 gap-2 text-gray-700">
                  <div>
                    <p className="font-medium">Time</p>
                    <p>{post.time}</p>
                  </div>
                  <div>
                    <p className="font-medium">Reps</p>
                    <p>{post.reps}</p>
                  </div>
                  <div>
                    <p className="font-medium">Sets</p>
                    <p>{post.sets}</p>
                  </div>
                  <div>
                    <p className="font-medium">Weight Before</p>
                    <p>{post.weightBefore}</p>
                  </div>
                  <div>
                    <p className="font-medium">Weight After</p>
                    <p>{post.weightAfter}</p>
                  </div>
                  <div>
                    <p className="font-medium">Height</p>
                    <p>{post.height}</p>
                  </div>
                </div>
                <div className="bg-sky-50 p-3 text-right">
                  <p className="text-sm text-gray-500">
                    Trainer: {post.trainerName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
