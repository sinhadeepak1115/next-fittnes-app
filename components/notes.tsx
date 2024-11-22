import { notes } from "@/data/notes";

const Notes = () => {
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
                {note.author}
              </h2>
              <p className="text-sm text-gray-500 italic">{note.date}</p>
            </div>
            <p className="text-gray-700 leading-relaxed">{note.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
