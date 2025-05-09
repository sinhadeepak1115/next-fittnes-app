import { getCurrentUser } from "@/lib/session";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Basic",
    price: "799",
    features: [
      "Basic workout tracking",
      "Progress monitoring",
      "Basic analytics",
      "Email support",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Pro",
    price: "1,499",
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "Custom workout plans",
      "Priority support",
      "Nutrition tracking",
      "Community access",
    ],
    color: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    name: "Elite",
    price: "2,499",
    features: [
      "Everything in Pro",
      "Personal trainer AI",
      "Video workout library",
      "Meal planning",
      "24/7 support",
      "Exclusive content",
    ],
    color: "from-pink-500 to-pink-600",
  },
];

export default async function PricingPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Fitness Journey
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Select the perfect plan to achieve your fitness goals
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-700 ${
                plan.popular
                  ? "border-2 border-purple-500"
                  : "border border-gray-700"
              }`}
            >
              <div className="p-6">
                {plan.popular && (
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-purple-100 text-purple-600">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-semibold text-white mt-4">
                  {plan.name}
                </h2>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-white">
                    ₹{plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-300">
                    /month
                  </span>
                </p>
                <Link
                  href={`/checkout?plan=${plan.name.toLowerCase()}`}
                  className={`mt-8 block w-full bg-gradient-to-r ${plan.color} text-white rounded-md py-2 text-sm font-semibold text-center hover:opacity-90 transition-opacity`}
                >
                  Get Started
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-300 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
