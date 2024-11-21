import posts from "db/posts";

export default function ReportsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold">{posts.workout}</h1>
        <div>{JSON.stringify(params)}</div>
      </div>
    </>
  );
}
