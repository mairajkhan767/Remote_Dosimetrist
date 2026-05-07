import './globals.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PreloaderProvider from '@/components/PreloaderContext'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
import Script from "next/script";

// config.autoAddCss = false


const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Remote Dosimetrist",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "inLanguage": "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="7_n7SeloGYX-tn3PCX6tDGelNFJxobTu6ChgyLQJC88" />
        <Script id="gtm" strategy='afterInteractive' >
          {`
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M5C8BSRH');
  `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TD9VV5JEXC"
          strategy='afterInteractive'
        />

        <Script id="ga4-init" strategy='afterInteractive' >
          {`
     window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TD9VV5JEXC');
  `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5C8BSRH"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <PreloaderProvider> */}
        {/* <Preloader />  */}
        <Header />
        <Popup />
        {children}
        <Footer />
        {/* </PreloaderProvider> */}
      </body>
    </html>
  )
}
