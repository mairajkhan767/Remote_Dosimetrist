import HomeClient from '@/components/HomeClient'
import { fetchPageBySlug } from "@/lib/api";
import { canonicalFor } from '@/lib/metadata'

export const revalidate = 300;
export const dynamic = 'force-static';

const getHomeData = async () => {
  return await fetchPageBySlug("home");
};

export async function generateMetadata() {
  const data = await getHomeData();

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
    alternates: {
      canonical: canonicalFor('/'),
    },
  };
}

export default async function HomePage() {
  const data = await getHomeData();
  return <HomeClient bannerData={data} />;
}
