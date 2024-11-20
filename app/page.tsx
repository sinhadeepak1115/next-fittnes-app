import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 to-blue-500 text-white">
        <div className="text-center p-6">
          <h1 className="text-4xl text-lime-400 font-bold mb-4">
            Welcome to FitPulse!
          </h1>
          <p className="text-lg mb-6 font-medium">
            Your journey to a healthier and fitter life starts here. Track your
            workouts, monitor your progress, and achieve your fitness goals with
            ease!
          </p>
          <Link
            href="/workout"
            className="bg-lime-300 text-blue-500 px-6 py-3 rounded-lg shadow hover:bg-blue-100 font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </main>
    </>
  );
}
