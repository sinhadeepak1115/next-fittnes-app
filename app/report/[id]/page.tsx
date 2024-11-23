import FormNote from "@/components/form-note";
import Notes from "@/components/notes";
import { posts } from "@/data/post";

export default function ReportsPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Post Not Found
          </h2>
          <p className="text-gray-600">
            The workout report you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">{post.workoutName}</h1>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Date</p>
              <p className="text-lg font-semibold">{post.date}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Trainer</p>
              <p className="text-lg font-semibold">{post.trainerName}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Time</p>
              <p className="text-xl font-bold text-blue-600">
                {post.time} mins
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Reps</p>
              <p className="text-xl font-bold text-green-600">{post.reps}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Sets</p>
              <p className="text-xl font-bold text-purple-600">{post.sets}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Weight Before</p>
              <p className="text-lg font-semibold text-red-600">
                {post.weightBefore}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Weight After</p>
              <p className="text-lg font-semibold text-green-600">
                {post.weightAfter}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Notes />
      <FormNote />
    </div>
  );
}
