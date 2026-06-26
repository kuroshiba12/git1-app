import { neon } from '@neondatabase/serverless';

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const rows = await sql`SELECT message, created_at FROM test_table LIMIT 1`;
  const row = rows[0];

  return Response.json({
    message: row.message,
    createdAt: row.created_at,
  });
}