import { FormNewWorkout } from "@/components/form-new-workout";
import LoginButton from "@/components/loginButton";
import { getCurrentUser } from "@/lib/session";

export default async function WorkoutPage() {
  const user = await getCurrentUser();
  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-400 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Workout Adder
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
    <main className="items-center min-h-screen bg-white">
      <FormNewWorkout />
    </main>
  );
}
