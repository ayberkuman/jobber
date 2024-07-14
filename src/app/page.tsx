import { auth } from "@/auth";
import JobCard from "@/components/JobCard";
import { database } from "@/db/database";

export default async function Home() {
  const session = await auth();
  const allJobs = await database.query.jobs.findMany();

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-3xl font-semibold">All jobs</h1>
      <div className="grid grid-cols-4 gap-5">
        {allJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
