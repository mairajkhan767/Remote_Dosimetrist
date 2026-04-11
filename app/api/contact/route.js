export async function POST(req) {
  const body = await req.json();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}custom/v1/contact-submission-next`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.WP_API_SECRET_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    return Response.json({ success: false }, { status: 500 });
  }
}