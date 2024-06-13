import { pgTable, serial } from "drizzle-orm/pg-core";

export const jobs = pgTable("j_jobs", {
  id: serial("id").primaryKey(),
});
