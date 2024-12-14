import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://beat_cancer_owner:6jsrDKSUOc3z@ep-divine-resonance-a570fy4w.us-east-2.aws.neon.tech/beat_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });
