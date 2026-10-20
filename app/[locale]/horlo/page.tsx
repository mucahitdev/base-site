import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'
import { HORLO_CONTENT } from './content'

const APP_NAME = 'horlo: Analog Clock Widget'
// Fill in once the App Store Connect record exists; until then the page says
// "coming soon" instead of linking to the store.
const APP_STORE_ID = ''
const APP_STORE_URL = APP_STORE_ID ? `https://apps.apple.com/app/id${APP_STORE_ID}` : undefined
const EN_URL = 'https://mucahitk.com/horlo'
const TR_URL = 'https://mucahitk.com/tr/horlo'
const SUPPORT_EMAIL = 'infokoksoft@gmail.com'

function pickLocale(locale: string): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en'
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = HORLO_CONTENT[pickLocale(locale)]
  const canonical = locale === 'tr' ? '/tr/horlo' : '/horlo'

  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical,
      languages: {
        en: '/horlo',
        tr: '/tr/horlo',
        'x-default': '/horlo',
      },
    },
    ...(APP_STORE_ID ? { itunes: { appId: APP_STORE_ID } } : {}),
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      title: c.ogTitle,
      description: c.ogDescription,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.ogTitle,
      description: c.ogDescription,
    },
  }
}

export default async function HorloPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const key = pickLocale(locale)
  const c = HORLO_CONTENT[key]
  const pageUrl = key === 'tr' ? TR_URL : EN_URL

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      inLanguage: key,
      name: APP_NAME,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'iOS',
      url: pageUrl,
      ...(APP_STORE_URL
        ? { downloadUrl: APP_STORE_URL, installUrl: APP_STORE_URL }
        : {}),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: c.jsonLdFeatures,
      author: {
        '@type': 'Person',
        name: 'Mücahit Kökdemir',
        url: 'https://mucahitk.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: key,
      mainEntity: c.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: c.breadcrumbHome,
          item: 'https://mucahitk.com',
        },
        { '@type': 'ListItem', position: 2, name: 'horlo', item: pageUrl },
      ],
    },
  ]

  return (
    <main className="pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {APP_NAME}
          </h1>
          {c.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          {APP_STORE_URL ? (
            <div className="pt-1">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {c.downloadCta}
              </a>
            </div>
          ) : (
            <p className="pt-1 font-medium text-zinc-900 dark:text-zinc-100">
              {c.comingSoon}
            </p>
          )}
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.featuresHeading}
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            {c.features.map((f) => (
              <li key={f.slice(0, 24)}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.pricingHeading}
          </h2>
          {c.pricing.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.privacyHeading}
          </h2>
          <p>{c.privacy}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.faqHeading}
          </h2>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="space-y-1">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {faq.q}
                </h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.supportHeading}
          </h2>
          <p>
            {c.supportPrefix}{' '}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.legalHeading}
          </h2>
          <div className="flex flex-col gap-1">
            <Link className="underline" href="/horlo/privacy-policy">
              {c.privacyLabel}
            </Link>
            <Link className="underline" href="/horlo/terms-of-use">
              {c.termsLabel}
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
