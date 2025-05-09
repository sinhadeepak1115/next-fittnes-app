import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function ProgressPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Your Progress</h1>
          <p className="mt-2 text-gray-300">
            Track your fitness journey and achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            {
              name: "Total Workouts",
              value: "24",
              change: "+12%",
              changeType: "increase",
            },
            {
              name: "Calories Burned",
              value: "12,450",
              change: "+8%",
              changeType: "increase",
            },
            {
              name: "Workout Streak",
              value: "7 days",
              change: "+2 days",
              changeType: "increase",
            },
            {
              name: "Avg. Duration",
              value: "45 min",
              change: "+5 min",
              changeType: "increase",
            },
          ].map((stat) => (
            <div
              key={stat.name}
              className="bg-gray-800 overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-300 truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">
                  {stat.value}
                </dd>
                <div className="mt-1">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "increase"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-300 ml-2">
                    from last month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                {
                  type: "Workout",
                  name: "Full Body Strength",
                  date: "2 hours ago",
                  duration: "45 min",
                  calories: "320",
                },
                {
                  type: "Cardio",
                  name: "HIIT Session",
                  date: "Yesterday",
                  duration: "30 min",
                  calories: "280",
                },
                {
                  type: "Yoga",
                  name: "Morning Flow",
                  date: "2 days ago",
                  duration: "40 min",
                  calories: "150",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {activity.type[0]}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-white">
                        {activity.name}
                      </p>
                      <p className="text-sm text-gray-300">{activity.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">{activity.duration}</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">{activity.calories}</span>{" "}
                      cal
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals Progress */}
        <div className="bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-4">Your Goals</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Weekly Workouts",
                  progress: 75,
                  current: 3,
                  target: 4,
                },
                {
                  name: "Monthly Calories",
                  progress: 60,
                  current: "12,450",
                  target: "20,000",
                },
                {
                  name: "Workout Streak",
                  progress: 100,
                  current: "7",
                  target: "7",
                },
              ].map((goal) => (
                <div key={goal.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-white">
                      {goal.name}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {goal.current}/{goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-lime-500 h-2.5 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
