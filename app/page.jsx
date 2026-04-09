import HomeClient from '@/components/HomeClient'

export const metadata = {
  title: 'Remote Dosimetrist | Expert Radiation Treatment Planning',
  description:
    'Remote Dosimetrist provides expert, HIPAA-compliant radiation treatment planning across the USA. 3D, IMRT, VMAT, SBRT, and brachytherapy plans with overnight turnaround.',
  alternates: {
    canonical: 'https://remotedosimetrist.com',
  },
  openGraph: {
    title: 'Remote Dosimetrist | Expert Radiation Treatment Planning',
    description:
      'Expert, HIPAA-compliant remote dosimetry services. Overnight turnaround, 15+ years experience, nationwide coverage.',
    url: 'https://remotedosimetrist.com',
  },
}

export default function HomePage() {
  return <HomeClient />
}
