"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const newNoteSchema = z.object({
  note: z.string().nonempty({ message: "Please enter a note" }),
});

type NewNoteType = z.infer<typeof newNoteSchema>;

const FormNote = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewNoteType>({
    resolver: zodResolver(newNoteSchema),
  });

  const onSubmit = async (data: NewNoteType) => {
    console.log(data.note);
    try {
      const response = await axios.post("/api/note", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Add a New Note</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Note
          </label>
          <input
            type="text"
            {...register("note")}
            className={`w-full px-4 py-2 border ${
              errors.note ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your note"
          />
          {errors.note && (
            <p className="mt-2 text-sm text-red-500">{errors.note.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default FormNote;
