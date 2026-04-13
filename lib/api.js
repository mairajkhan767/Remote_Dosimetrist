import { cache } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchPageBySlug = cache(async function fetchPageBySlug(slug) {
  try {
    const res = await fetch(
      `${API}wp/v2/pages?slug=${slug}&acf_format=standard`,
      { cache: 'force-cache' }
    );
    const data = await res.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
})
