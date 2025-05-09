import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const plans = {
  basic: {
    name: "Basic",
    price: 799,
    features: [
      "Basic workout tracking",
      "Progress monitoring",
      "Basic analytics",
      "Email support",
    ],
  },
  pro: {
    name: "Pro",
    price: 1499,
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "Custom workout plans",
      "Priority support",
      "Nutrition tracking",
      "Community access",
    ],
  },
  elite: {
    name: "Elite",
    price: 2499,
    features: [
      "Everything in Pro",
      "Personal trainer AI",
      "Video workout library",
      "Meal planning",
      "24/7 support",
      "Exclusive content",
    ],
  },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const user = await getCurrentUser();
  const plan = searchParams.plan?.toLowerCase();

  if (!plan || !plans[plan as keyof typeof plans]) {
    redirect("/pricing");
  }

  const selectedPlan = plans[plan as keyof typeof plans];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Complete Your Subscription
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-2">
                Selected Plan
              </h3>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">
                    {selectedPlan.name}
                  </span>
                  <span className="text-lime-400 font-bold">
                    ₹{selectedPlan.price.toLocaleString()}/month
                  </span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={user?.email || ""}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-lime-500 focus:ring-lime-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="card"
                  className="block text-sm font-medium text-gray-300"
                >
                  Card Details
                </label>
                <div className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-lime-500 focus:ring-lime-500 p-3">
                  {/* Stripe Elements will be mounted here */}
                  <div id="card-element" className="h-8"></div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                Subscribe Now
              </button>
            </form>

            <div className="mt-6">
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy. You can cancel your subscription at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
