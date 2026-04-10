const API = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPageBySlug(slug) {
  const rand = Math.floor(Math.random() * 10000);
  const res = await fetch(
    `${API}wp/v2/pages?slug=${slug}&acf_format=standard&w=${rand}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data[0];
}