import { auth } from "@/auth";
import Image from "next/image";
import { SignOutButton } from "./SignOutButton";
import { SignInButton } from "./SignInButton";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default async function Header() {
  const session = await auth();

  return (
    <div className="bg-gray-100 py-4">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 hover:underline">
          <Image src="/vercel.svg" alt="logo" width={100} height={50} />
          Jobber
        </Link>
        <Link
          href="/jobs/create"
          className={buttonVariants({
            variant: "link",
          })}
        >
          Post a Job
        </Link>
        <div className="flex items-center gap-2">
          <div>{session?.user?.name}</div>
          <div>{session ? <SignOutButton /> : <SignInButton />}</div>
        </div>
      </div>
    </div>
  );
}
