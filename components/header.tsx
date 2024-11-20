import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-sky-300 p-4 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-blue-200 transition"
        >
          FitPulse
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/workout"
              className="text-white text-xl font-medium hover:text-blue-50"
            >
              Workout
            </Link>
          </li>
          <li>
            <Link
              href="report"
              className="text-white text-xl font-medium hover:text-blue-50"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              href="/add"
              className="text-white text-xl font-medium hover:text-blue-50"
            >
              Add
            </Link>
          </li>
        </ul>
        <Link
          href="/api/auth/signin"
          className="bg-lime-300 text-blue-500  px-4 py-2 shadow rounded-md font-medium hover:text-blue-400"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
