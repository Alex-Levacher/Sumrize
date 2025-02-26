import { sql } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const Video = pgTable("Video", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  url: text().notNull(),
  youtubeId: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  author: varchar({ length: 255 }).notNull(),
  transcript: text().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});
