"use server";

import { auth } from "@/auth";
import { database } from "@/db/database";
import { jobs } from "@/db/schema";
import { redirect } from "next/navigation";

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
    pay: Number(formData.get("pay")),
    userId: user.id,
  });
  redirect("/");
}
