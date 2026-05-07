import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PreloaderProvider from '@/components/PreloaderContext'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'
import Script from "next/script";

config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TD9VV5JEXC"
          strategy='beforeInteractive'
        />

        <Script id="ga4-init" strategy='beforeInteractive' >
          {`
     window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TD9VV5JEXC');
  `}
        </Script>
        <meta name="google-site-verification" content="7_n7SeloGYX-tn3PCX6tDGelNFJxobTu6ChgyLQJC88" />
        <Script id="gtm" strategy='beforeInteractive' >
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
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5C8BSRH"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <PreloaderProvider>
          {/* <Preloader />  */}
          <Header />
          <Popup />
          {children}
          <Footer />
        </PreloaderProvider>
      </body>
    </html>
  )
}
