"use server";

import { jobs } from "@/db/schema";
import { database } from "@/db/database";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createJobAction(formData: FormData) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = session.user;
  if (!user || !user.id) {
    throw new Error("User not found");
  }

  await database.insert(jobs).values({
    name: formData.get("name") as string,
    userId: user.id,
  });
  revalidatePath("/jobs/create");
}
