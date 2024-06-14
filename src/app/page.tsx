import { auth } from "@/auth";
import { SignInButton } from "@/components/SignInButton";
import { SignOutButton } from "@/components/SignOutButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { jobs } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const session = await auth();
  const allJobs = await database.query.jobs.findMany();

  return (
    <main>
      {session ? <SignOutButton /> : <SignInButton />}
      <form
        action={async (formData: FormData) => {
          "use server";
          await database.insert(jobs).values({
            name: formData.get("name") as string,
            userId: session?.user?.id!,
          });
          revalidatePath("/");
        }}
      >
        <Input name="name" type="text" placeholder="Post a job" />
        <Button type="submit">Post Job</Button>
      </form>
      {allJobs.map((job) => (
        <div key={job.id}>{job.name}</div>
      ))}
    </main>
  );
}
