import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createJobAction } from "./actions";

export default async function CreateJobPage() {
  return (
    <main className="container py-12">
      <form action={createJobAction}>
        <Input name="name" type="text" placeholder="Post a job" />
        <Button type="submit">Post Job</Button>
      </form>
    </main>
  );
}
