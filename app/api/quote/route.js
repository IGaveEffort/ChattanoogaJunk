export async function POST(request) {
  const body = await request.json();
  return Response.json({
    ok: true,
    message: 'Quote request captured.',
    received: body,
  });
}
