import prisma from "@/lib/db";
import { format } from "date-fns";
import { FC } from "react";

interface NoteProps {
  workoutId: string;
}

const Notes: FC<NoteProps> = async ({ workoutId }) => {
  const notes = await prisma.note.findMany({
    where: {
      workout: workoutId,
    },
  });
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
        Comments
      </h1>
      <ul className="space-y-6">
        {notes.map((note) => (
          <li
            key={note.id}
            className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {note.authorEmail}
              </h2>
              <p className="text-sm text-gray-500 italic">
                {format(note.createdAt, "MMMM d, yyyy")}
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
