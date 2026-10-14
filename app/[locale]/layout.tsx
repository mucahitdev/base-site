import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { LayoutShell } from '../layout-shell'
import { routing, isRtl } from '@/i18n/routing'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

const TITLE = 'Mücahit Kökdemir — Frontend & Mobile Developer'
const DESCRIPTION =
  'Mücahit Kökdemir is a frontend & mobile developer building beautiful, functional web and iOS apps — including WidgetLoft, Verso, Spendi, and Lecto.'

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: TITLE,
    template: '%s · Mücahit Kökdemir',
  },
  description: DESCRIPTION,
  applicationName: 'Mücahit Kökdemir',
  authors: [{ name: 'Mücahit Kökdemir', url: WEBSITE_URL }],
  creator: 'Mücahit Kökdemir',
  publisher: 'Mücahit Kökdemir',
  keywords: [
    'Mücahit Kökdemir',
    'frontend developer',
    'iOS developer',
    'mobile developer',
    'SwiftUI',
    'React',
    'Next.js',
    'WidgetLoft',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Mücahit Kökdemir',
    title: TITLE,
    description: DESCRIPTION,
    url: WEBSITE_URL,
    locale: 'en_US',
    images: [
      { url: '/cover.jpg', width: 3200, height: 1674, alt: 'Mücahit Kökdemir' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

// DataFast web analytics. Both paths are proxied through this domain to get past
// content blockers, see the rewrites in next.config.mjs. The cookieless script is
// deliberate: it sets no cookies, so the site needs no consent banner in the EU.
// Its only trade-off is that it cannot recognize a visitor across days, which
// feeds Stripe revenue attribution, and nothing here sells anything.
// The id is public, it ships in the HTML of every page.
const DATAFAST_ID = 'dfid_Ng89GKEbaJuLkJLiRk3eQ'

// Umami, self-hosted on our Coolify server, running next to DataFast so the two
// can be compared on the same traffic. Also cookieless, so it changes nothing
// about consent. Unlike DataFast it loads straight from analytics.mucahitk.com
// instead of through a rewrite: neither that host nor the script name is on the
// EasyPrivacy or AdGuard tracking lists, and behind a Vercel rewrite Umami would
// see Vercel's IP instead of the visitor's, breaking countries and unique
// visitors. data-domains keeps preview deployments and localhost out of the stats.
const UMAMI_ID = '9500877c-a56a-42c4-82e8-0cfc188347bc'
const UMAMI_SRC = 'https://analytics.mucahitk.com/mkt.js'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  // Enable static rendering for this locale.
  setRequestLocale(locale)

  return (
    <html lang={locale} dir={isRtl(locale) ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            enableSystem={true}
            attribute="class"
            storageKey="theme"
            defaultTheme="system"
          >
            <LayoutShell>{children}</LayoutShell>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          src="/js/script.js"
          data-website-id={DATAFAST_ID}
          data-domain="mucahitk.com"
          strategy="afterInteractive"
        />
        <Script
          src={UMAMI_SRC}
          data-website-id={UMAMI_ID}
          data-domains="mucahitk.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
