"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createJobAction, createUploadUrlAction } from "./actions";

export default function CreateJobPage() {
  return (
    <main className="container py-12">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);

          const file = formData.get("file") as File;
          const uploadUrl = await createUploadUrlAction(file.name, file.type);
          await fetch(uploadUrl, {
            method: "PUT",
            body: file,
          });

          await createJobAction({
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            pay: Number(formData.get("pay")),
            fileName: file.name,
          });
        }}
      >
        <Input required name="name" type="text" placeholder="Post a job" />
        <Input
          required
          name="description"
          type="text"
          placeholder="Describe the gig"
        />
        <Input
          required
          name="pay"
          type="number"
          placeholder="Payment for the job"
        />
        <Input type="file" name="file" />
        <Button type="submit">Post Job</Button>
      </form>
    </main>
  );
}
