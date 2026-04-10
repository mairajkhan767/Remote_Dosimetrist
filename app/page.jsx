import HomeClient from '@/components/HomeClient'
import { fetchPageBySlug } from "@/lib/api";

export async function generateMetadata() {
  const data = await fetchPageBySlug("home");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}

export default async function HomePage() {
  const data = await fetchPageBySlug("home");
  return <HomeClient bannerData={data} />
}
