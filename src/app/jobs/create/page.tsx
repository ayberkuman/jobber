import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createJobAction } from "./actions";

export default async function CreateJobPage() {
  return (
    <main className="container py-12">
      <form action={createJobAction}>
        <Input required name="name" type="text" placeholder="Post a job" />
        <Input
          required
          name="pay"
          type="number"
          placeholder="Payment for the job"
        />
        <Button type="submit">Post Job</Button>
      </form>
    </main>
  );
}
