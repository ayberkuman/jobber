import { Job } from "@/db/schema";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border p-4 rounded-md" key={job.id}>
      <Image
        src={getImageUrl(job.fileKey)}
        width={200}
        height={200}
        unoptimized
        alt={job.name}
      />
      <div>
        {" "}
        {job.name}-{job.pay}
      </div>
    </div>
  );
}
