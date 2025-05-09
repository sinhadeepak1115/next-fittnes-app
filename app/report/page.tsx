import Link from "next/link";
import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import LoginButton from "@/components/loginButton";
import { redirect } from "next/navigation";

export default async function ReportPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const posts = await prisma.workout.findMany({
    where: {
      authorEmail: user?.email,
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Fitness Report</h1>
          <p className="mt-2 text-gray-300">
            Detailed analysis of your fitness journey
          </p>
        </div>

        {/* Monthly Overview */}
        <div className="bg-gray-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Monthly Overview
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                { name: "Total Workouts", value: "24", trend: "↑ 12%" },
                { name: "Total Hours", value: "18", trend: "↑ 8%" },
                { name: "Calories Burned", value: "12,450", trend: "↑ 15%" },
              ].map((stat) => (
                <div key={stat.name} className="bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-300">{stat.name}</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-500 mt-1">{stat.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workout Distribution */}
        <div className="bg-gray-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Workout Distribution
            </h2>
            <div className="space-y-4">
              {[
                { type: "Strength Training", percentage: 45, count: 11 },
                { type: "Cardio", percentage: 30, count: 7 },
                { type: "Yoga", percentage: 15, count: 4 },
                { type: "HIIT", percentage: 10, count: 2 },
              ].map((workout) => (
                <div key={workout.type}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-white">
                      {workout.type}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {workout.count} workouts
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-lime-500 h-2.5 rounded-full"
                      style={{ width: `${workout.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Performance Metrics
            </h2>
            <div className="space-y-6">
              {[
                {
                  metric: "Average Workout Duration",
                  value: "45 min",
                  change: "+5 min",
                  trend: "positive",
                },
                {
                  metric: "Calories per Workout",
                  value: "520 cal",
                  change: "+30 cal",
                  trend: "positive",
                },
                {
                  metric: "Rest Days",
                  value: "2 days/week",
                  change: "-1 day",
                  trend: "negative",
                },
              ].map((metric) => (
                <div
                  key={metric.metric}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {metric.metric}
                    </p>
                    <p className="text-2xl font-bold text-white mt-1">
                      {metric.value}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-medium ${
                        metric.trend === "positive"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {metric.change}
                    </p>
                    <p className="text-sm text-gray-300">from last month</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Recommendations
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Increase Cardio",
                  description:
                    "Your cardio workouts are below target. Try adding 2 more sessions per week.",
                  icon: "🏃",
                },
                {
                  title: "Rest Day Balance",
                  description:
                    "Consider adding one more rest day to optimize recovery.",
                  icon: "😴",
                },
                {
                  title: "Strength Progress",
                  description:
                    "Great progress in strength training! Consider increasing weights.",
                  icon: "💪",
                },
              ].map((rec) => (
                <div
                  key={rec.title}
                  className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg"
                >
                  <div className="text-2xl">{rec.icon}</div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {rec.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {rec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-lg mt-8">
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
    </div>
  );
}
