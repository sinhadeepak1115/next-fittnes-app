"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newFormWorkoutSchema = z.object({
  workoutName: z.string().nonempty({ message: "Please enter a workout name" }),
  date: z.string().date().nonempty({ message: "Please enter the date" }),
  time: z.number().positive({ message: "Please enter the time" }),
  reps: z.number().positive({ message: "Please enter the number of reps" }),
  sets: z.number().positive({ message: "Please enter the number of sets" }),
  weightBefore: z
    .number()
    .positive({ message: "Please enter the weight before" }),
  weightAfter: z
    .number()
    .positive({ message: "Please enter the weight after" }),
  height: z.number().positive({ message: "Please enter the height" }),
  trainerName: z
    .string()
    .nonempty({ message: "Please enter the trainer name" }),
});

type NewFormWorkoutType = z.infer<typeof newFormWorkoutSchema>;

export function FormNewWorkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFormWorkoutType>({
    resolver: zodResolver(newFormWorkoutSchema),
  });

  const onSubmit = (data: NewFormWorkoutType) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-sky-500 p-6">
          <h2 className="text-3xl font-bold text-white text-center">
            New Workout Log
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          {[
            { label: "Workout Name", name: "workoutName", type: "text" },
            { label: "Date", name: "date", type: "date" },
            { label: "Time (minutes)", name: "time", type: "number" },
            { label: "Reps", name: "reps", type: "number" },
            { label: "Sets", name: "sets", type: "number" },
            {
              label: "Weight Before (kg)",
              name: "weightBefore",
              type: "number",
            },
            { label: "Weight After (kg)", name: "weightAfter", type: "number" },
            { label: "Height (cm)", name: "height", type: "number" },
            { label: "Trainer's Name", name: "trainerName", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                {...register(name as keyof NewFormWorkoutType, {
                  valueAsNumber: type === "number",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
              {errors[name as keyof NewFormWorkoutType] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[name as keyof NewFormWorkoutType]?.message}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white py-3 rounded-md hover:opacity-90 transition duration-300 font-semibold uppercase tracking-wide shadow-lg"
          >
            Log Workout
          </button>
        </form>
      </div>
    </div>
  );
}
