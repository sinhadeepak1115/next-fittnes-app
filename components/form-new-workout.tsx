"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newFormWorkoutSchema = z.object({
  workoutName: z.string().nonempty({ message: "Please enter a workout name" }),
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
    console.log("Form submitted:", data); // Log submitted data
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      {[
        { label: "Workout Name", name: "workoutName", type: "text" },
        { label: "Time (minutes)", name: "time", type: "number" },
        { label: "Reps", name: "reps", type: "number" },
        { label: "Sets", name: "sets", type: "number" },
        { label: "Weight Before (kg)", name: "weightBefore", type: "number" },
        { label: "Weight After (kg)", name: "weightAfter", type: "number" },
        { label: "Height (cm)", name: "height", type: "number" },
        { label: "Trainer's Name", name: "trainerName", type: "text" },
      ].map(({ label, name, type }) => (
        <div key={name}>
          <label className="block font-bold">{label}</label>
          <input
            type={type}
            {...register(name as keyof NewFormWorkoutType, {
              valueAsNumber: type === "number",
            })}
            className="w-full border p-2 rounded"
          />
          {errors[name as keyof NewFormWorkoutType] && (
            <p className="text-red-500 text-sm">
              {errors[name as keyof NewFormWorkoutType]?.message}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 font-bold"
      >
        Submit
      </button>
    </form>
  );
}
