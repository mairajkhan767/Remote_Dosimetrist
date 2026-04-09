import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PreloaderProvider from '@/components/PreloaderContext'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

config.autoAddCss = false

export const metadata = {
  metadataBase: new URL('https://remotedosimetrist.com'),
  title: {
    default: 'Remote Dosimetrist | Expert Radiation Treatment Planning',
    template: '%s | Remote Dosimetrist',
  },
  description:
    'Remote Dosimetrist provides expert medical dosimetry planning services across the USA. HIPAA-compliant, certified dosimetrists with 15+ years of experience. Available for 3D, IMRT, VMAT, SBRT, and brachytherapy plans.',
  keywords: [
    'remote dosimetrist',
    'radiation therapy planning',
    'medical dosimetry',
    'VMAT planning',
    'IMRT planning',
    'SBRT planning',
    'brachytherapy',
    'cancer treatment planning',
    'radiation oncology',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remotedosimetrist.com',
    siteName: 'Remote Dosimetrist',
    title: 'Remote Dosimetrist | Expert Radiation Treatment Planning',
    description:
      'HIPAA-compliant remote dosimetry services. Fast turnaround, 15+ years experience, nationwide coverage.',
    images: [
      {
        url: '/assets/logo-main.png',
        width: 1200,
        height: 630,
        alt: 'Remote Dosimetrist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Dosimetrist | Expert Radiation Treatment Planning',
    description:
      'HIPAA-compliant remote dosimetry services. Fast turnaround, 15+ years experience, nationwide coverage.',
    images: ['/assets/logo-main.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreloaderProvider>
          <Preloader />
          <Header />
          {children}
          <Footer />
        </PreloaderProvider>
      </body>
    </html>
  )
}
