import { database } from "@/db/database";
import { jobs } from "@/db/schema";

export default function Home() {
  return (
    <main>
      <form
        action={async (formData: FormData) => {
          "use server";
          const apply = formData.get("apply");
          await database.insert(jobs);
        }}
      >
        <input name="apply" type="text" placeholder="" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
