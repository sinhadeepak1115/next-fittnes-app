import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user.name || "Fitness Enthusiast"}!
          </h1>
          <p className="mt-2 text-gray-300">
            Track your fitness journey and stay motivated
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            {
              title: "Start Workout",
              description: "Begin a new workout session",
              icon: "💪",
              href: "/workout",
              color: "from-blue-500 to-blue-600",
            },
            {
              title: "View Progress",
              description: "Check your fitness progress",
              icon: "📈",
              href: "/progress",
              color: "from-green-500 to-green-600",
            },
            {
              title: "View Reports",
              description: "Detailed workout analysis",
              icon: "📊",
              href: "/report",
              color: "from-purple-500 to-purple-600",
            },
            {
              title: "Set Goals",
              description: "Update your fitness goals",
              icon: "🎯",
              href: "/goals",
              color: "from-red-500 to-red-600",
            },
          ].map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <div
                className={`bg-gradient-to-r ${action.color} rounded-lg shadow-lg p-6`}
              >
                <div className="text-3xl mb-4">{action.icon}</div>
                <h3 className="text-lg font-semibold text-white">
                  {action.title}
                </h3>
                <p className="text-gray-100 mt-1">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            {
              name: "This Week",
              value: "4",
              label: "Workouts",
              change: "+1",
              trend: "up",
            },
            {
              name: "Calories",
              value: "2,450",
              label: "Burned",
              change: "+320",
              trend: "up",
            },
            {
              name: "Streak",
              value: "5",
              label: "Days",
              change: "+2",
              trend: "up",
            },
            {
              name: "Goals",
              value: "75%",
              label: "Completed",
              change: "+15%",
              trend: "up",
            },
          ].map((stat) => (
            <div
              key={stat.name}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <p className="text-sm text-gray-400">{stat.name}</p>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="ml-2 text-sm text-gray-400">{stat.label}</p>
              </div>
              <div className="mt-2 flex items-center">
                <span
                  className={`text-sm font-medium ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-gray-400 ml-2">
                  from last week
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity and Upcoming Workouts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[
                  {
                    type: "Workout",
                    name: "Full Body Strength",
                    time: "2 hours ago",
                    duration: "45 min",
                  },
                  {
                    type: "Cardio",
                    name: "HIIT Session",
                    time: "Yesterday",
                    duration: "30 min",
                  },
                  {
                    type: "Yoga",
                    name: "Morning Flow",
                    time: "2 days ago",
                    duration: "40 min",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {activity.type[0]}
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-white">
                          {activity.name}
                        </p>
                        <p className="text-sm text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {activity.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Workouts */}
          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-white mb-4">
                Upcoming Workouts
              </h2>
              <div className="space-y-4">
                {[
                  {
                    type: "Strength",
                    name: "Upper Body Focus",
                    time: "Tomorrow, 9:00 AM",
                    trainer: "John Smith",
                  },
                  {
                    type: "Cardio",
                    name: "HIIT Session",
                    time: "Thursday, 6:00 PM",
                    trainer: "Sarah Johnson",
                  },
                  {
                    type: "Yoga",
                    name: "Power Flow",
                    time: "Saturday, 10:00 AM",
                    trainer: "Mike Wilson",
                  },
                ].map((workout, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {workout.type[0]}
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-white">
                          {workout.name}
                        </p>
                        <p className="text-sm text-gray-400">{workout.time}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {workout.trainer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
