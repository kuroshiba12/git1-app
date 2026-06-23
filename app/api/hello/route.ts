export async function GET() {
  return Response.json({
    message: "Hello from server!",
    createdAt: new Date().toISOString(),
  });
}