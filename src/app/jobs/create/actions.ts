"use server";

import { auth } from "@/auth";
import { database } from "@/db/database";
import { jobs } from "@/db/schema";
import { getSignedUrlForS3 } from "@/lib/s3";
import { redirect } from "next/navigation";

export async function createJobAction({
  fileName,
  name,
  description,
  pay,
}: {
  fileName: string;
  name: string;
  description: string;
  pay: number;
}) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = session.user;
  if (!user || !user.id) {
    throw new Error("User not found");
  }

  await database.insert(jobs).values({
    name,
    description,
    pay,
    fileKey: fileName,
    userId: user.id,
  });
  redirect("/");
}

export async function createUploadUrlAction(key: string, type: string) {
  return await getSignedUrlForS3(key, type);
}
