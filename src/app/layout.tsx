import type { Metadata } from 'next'
import StickyMenu from '@/components/StickyMenu'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'
import { siteConfig } from '@/site.config'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} - ${siteConfig.slogan}. Especializado em ${siteConfig.specialties.slice(0, 3).join(', ')}. Localizado em ${siteConfig.location}.`,
  keywords: [
    siteConfig.name,
    'advocacia',
    'advogado',
    ...siteConfig.specialties,
    siteConfig.location,
    'consultoria jurídica',
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.slogan,
    locale: 'pt_BR',
    type: 'website',
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="lenis">
      <body>
        <StickyMenu />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
