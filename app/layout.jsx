import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PreloaderProvider from '@/components/PreloaderContext'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'

config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <PreloaderProvider>
          <Preloader />
          <Header />
          <Popup />
          {children}
          <Footer />
        </PreloaderProvider>
      </body>
    </html>
  )
}
