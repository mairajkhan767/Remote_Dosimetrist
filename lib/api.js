const API = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPageBySlug(slug) {
  try {
    const res = await fetch(
      `${API}wp/v2/pages?slug=${slug}&acf_format=standard&_embed&status=publish`,
      {
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    console.log(data[0]);
    return data[0] ?? null;
  } catch {
    return null;
  }
}