const API = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPageBySlug(slug) {
  try {
    const res = await fetch(
      `${API}wp/v2/pages?slug=${slug}&acf_format=standard&_embed&status=publish`,
      {
        signal: AbortSignal.timeout(30000),
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
}