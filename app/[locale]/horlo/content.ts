// Per-locale content for the horlo page. Both the rendered copy and the
// JSON-LD structured data are built from these bundles so they never drift.

type Faq = { q: string; a: string }

export type HorloContent = {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  intro: string[]
  downloadCta: string
  comingSoon: string
  featuresHeading: string
  features: string[]
  pricingHeading: string
  pricing: string[]
  privacyHeading: string
  privacy: string
  faqHeading: string
  faqs: Faq[]
  supportHeading: string
  supportPrefix: string
  legalHeading: string
  privacyLabel: string
  termsLabel: string
  jsonLdFeatures: string[]
  breadcrumbHome: string
}

export const HORLO_CONTENT: Record<'en' | 'tr', HorloContent> = {
  en: {
    metaTitle: 'horlo: Analog Clock Widget — Live Clock Faces for iPhone',
    metaDescription:
      'horlo puts a real analog clock on your iPhone Home Screen, with live hands and a sweeping second hand. 24 designs, a full clock editor, a Liquid Glass widget and StandBy. No account, no tracking, no ads.',
    keywords: [
      'horlo',
      'analog clock widget',
      'clock widget iphone',
      'home screen clock',
      'live clock widget',
      'transparent clock widget',
      'standby clock',
      'custom clock face',
      'liquid glass widget',
    ],
    ogTitle: 'horlo: Analog Clock Widget',
    ogDescription:
      'A real analog clock on your Home Screen, with a second hand that sweeps. 24 designs, a full editor, Liquid Glass and StandBy.',
    intro: [
      'horlo puts a real analog clock on your iPhone Home Screen, with hands that move on their own and a second hand that sweeps. Its widgets sit right on your wallpaper: start from one of 24 designs, or make your own down to the last tick.',
      'Clear faces float on your wallpaper; colored ones bring their own background, and the Liquid Glass widget puts any clock on frosted glass. In StandBy your clock keeps its look by day and turns a calm red at night.',
    ],
    downloadCta: 'Download on the App Store',
    comingSoon: 'Coming soon to the App Store.',
    featuresHeading: 'Key Features',
    features: [
      'Live analog clock widgets with a sweeping second hand',
      '24 designs in four series: Tool, Classic, Pop and Clear',
      'Each design has its own build: dive and 24-hour bezels, sector dials, small seconds, a regulator, rotating discs and a single hand',
      'Clear faces on your wallpaper, or a colored background in a circle, a rounded square or the widget’s own shape',
      'A Liquid Glass widget that puts any clock on frosted glass',
      'A full editor: hands, dial, ticks, numerals, the date or your own words, and palettes',
      'As many clocks as you like, with a different one for every widget',
      'StandBy support: your design by day, a calm red at night',
      'Available in more than 40 languages',
    ],
    pricingHeading: 'Free and Pro',
    pricing: [
      'horlo is free to download and includes the Dot clock, live on your Home Screen.',
      'horlo Pro is a one-time lifetime purchase, not a subscription. It unlocks every design, the full editor and as many clocks as you like.',
    ],
    privacyHeading: 'Private by Design',
    privacy:
      'horlo has no account, no tracking and no ads. Your clocks and settings stay on your iPhone. Purchases are handled by Apple; the Privacy Policy has the details.',
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is horlo?',
        a: 'horlo: Analog Clock Widget is an iPhone app that makes analog clock widgets for your Home Screen, with live hands and a sweeping second hand. Pick one of 24 designs or make your own in the editor.',
      },
      {
        q: 'Do the hands really move?',
        a: 'Yes. The hour, minute and second hands move on their own all day, without the widget refreshing.',
      },
      {
        q: 'Can the clock be transparent?',
        a: 'Yes. Clear designs sit right on your wallpaper. You can also give a clock its own colored background, or use the Liquid Glass widget for a frosted glass look.',
      },
      {
        q: 'Does horlo work in StandBy?',
        a: 'Yes. Add the widget to StandBy and charge your iPhone on its side. Your clock keeps its look by day and turns a calm red at night.',
      },
      {
        q: 'Is horlo free?',
        a: 'Yes. The free version includes the Dot clock on your Home Screen. horlo Pro is a one-time purchase that unlocks every design, the full editor and as many clocks as you like.',
      },
      {
        q: 'Does horlo need an account or collect my data?',
        a: 'No. There is no account, no tracking and no ads, and your clocks stay on your iPhone.',
      },
    ],
    supportHeading: 'Support',
    supportPrefix: 'For support, feature requests, or bug reports, contact:',
    legalHeading: 'Legal',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms of Use',
    jsonLdFeatures: [
      'Live analog clock widgets with a sweeping second hand',
      '24 clock designs with different builds: bezels, sub-dials, rotating discs',
      'Transparent, colored or Liquid Glass widgets',
      'A full clock editor: hands, dial, ticks, numerals and palettes',
      'StandBy support with a red night mode',
      'No account, no tracking, no ads',
    ],
    breadcrumbHome: 'Home',
  },
  tr: {
    metaTitle: 'horlo: Analog Saat Widget — iPhone İçin Canlı Saat Kadranları',
    metaDescription:
      'horlo, iPhone Ana Ekranı’na gerçek bir analog saat koyar: canlı ibreler ve akıcı bir saniye ibresi. 24 tasarım, tam bir saat editörü, Liquid Glass widget’ı ve Bekleme Modu. Hesap yok, takip yok, reklam yok.',
    keywords: [
      'horlo',
      'analog saat widget',
      'iphone saat widget',
      'ana ekran saati',
      'canlı saat widget',
      'şeffaf saat widget',
      'bekleme modu saat',
      'özel saat kadranı',
      'liquid glass widget',
    ],
    ogTitle: 'horlo: Analog Saat Widget',
    ogDescription:
      'Ana Ekran’ında gerçek bir analog saat, akıcı bir saniye ibresiyle. 24 tasarım, tam editör, Liquid Glass ve Bekleme Modu.',
    intro: [
      'horlo, iPhone Ana Ekranı’na gerçek bir analog saat koyar: ibreler kendi kendine döner, saniye ibresi akıcı ilerler. Widget’lar doğrudan duvar kâğıdının üstünde durur: 24 tasarımdan birinden başla ya da son tikine kadar kendi saatini yap.',
      'Şeffaf kadranlar duvar kâğıdının üstünde süzülür; renkli olanlar kendi zeminini getirir, Liquid Glass widget’ı da her saati buzlu camın üstüne koyar. Bekleme Modu’nda saatin gündüz kendi görünümünü korur, gece sakin bir kırmızıya döner.',
    ],
    downloadCta: 'App Store’dan İndir',
    comingSoon: 'Yakında App Store’da.',
    featuresHeading: 'Öne Çıkan Özellikler',
    features: [
      'Akıcı saniye ibreli, canlı analog saat widget’ları',
      'Dört seride 24 tasarım: Alet, Klasik, Pop ve Şeffaf',
      'Her tasarımın kendi yapısı var: dalgıç ve 24 saat bezelleri, sektör kadran, küçük saniye, regülatör, dönen diskler ve tek ibre',
      'Duvar kâğıdının üstünde şeffaf kadranlar ya da daire, yuvarlak kare veya widget’ın kendi şeklinde renkli zemin',
      'Her saati buzlu camın üstüne koyan bir Liquid Glass widget’ı',
      'Tam bir editör: ibreler, kadran, tikler, rakamlar, tarih ya da kendi yazın ve paletler',
      'İstediğin kadar saat; her widget’a ayrı bir saat',
      'Bekleme Modu desteği: gündüz kendi tasarımın, gece sakin bir kırmızı',
      '40’tan fazla dilde kullanılabilir',
    ],
    pricingHeading: 'Ücretsiz ve Pro',
    pricing: [
      'horlo ücretsiz indirilir ve Ana Ekran’ında canlı çalışan Nokta saatini içerir.',
      'horlo Pro abonelik değil, tek seferlik ömür boyu bir satın alımdır. Tüm tasarımların, tam editörün ve sınırsız saatin kilidini açar.',
    ],
    privacyHeading: 'Tasarım Gereği Gizli',
    privacy:
      'horlo’da hesap yok, takip yok, reklam yok. Saatlerin ve ayarların iPhone’unda kalır. Satın alımları Apple yönetir; ayrıntılar Gizlilik Politikası’nda.',
    faqHeading: 'Sık Sorulan Sorular',
    faqs: [
      {
        q: 'horlo nedir?',
        a: 'horlo: Analog Saat Widget, Ana Ekran için canlı ibreli ve akıcı saniye ibreli analog saat widget’ları yapan bir iPhone uygulamasıdır. 24 tasarımdan birini seç ya da editörde kendi saatini yap.',
      },
      {
        q: 'İbreler gerçekten dönüyor mu?',
        a: 'Evet. Akrep, yelkovan ve saniye ibresi widget yenilenmeden gün boyu kendi kendine döner.',
      },
      {
        q: 'Saat şeffaf olabilir mi?',
        a: 'Evet. Şeffaf tasarımlar doğrudan duvar kâğıdının üstünde durur. Bir saate kendi renkli zeminini de verebilir ya da buzlu cam görünümü için Liquid Glass widget’ını kullanabilirsin.',
      },
      {
        q: 'horlo Bekleme Modu’nda çalışır mı?',
        a: 'Evet. Widget’ı Bekleme Modu’na ekle ve iPhone’unu yan yatırarak şarj et. Saatin gündüz kendi görünümünü korur, gece sakin bir kırmızıya döner.',
      },
      {
        q: 'horlo ücretsiz mi?',
        a: 'Evet. Ücretsiz sürüm Ana Ekran için Nokta saatini içerir. horlo Pro; tüm tasarımların, tam editörün ve sınırsız saatin kilidini açan tek seferlik bir satın alımdır.',
      },
      {
        q: 'horlo hesap ister mi, verilerimi toplar mı?',
        a: 'Hayır. Hesap yok, takip yok, reklam yok; saatlerin iPhone’unda kalır.',
      },
    ],
    supportHeading: 'Destek',
    supportPrefix:
      'Destek, özellik istekleri veya hata bildirimleri için iletişim:',
    legalHeading: 'Yasal',
    privacyLabel: 'Gizlilik Politikası',
    termsLabel: 'Kullanım Koşulları',
    jsonLdFeatures: [
      'Akıcı saniye ibreli, canlı analog saat widget’ları',
      'Farklı yapılarda 24 saat tasarımı: bezel, alt kadran, dönen diskler',
      'Şeffaf, renkli veya Liquid Glass widget’lar',
      'Tam bir saat editörü: ibreler, kadran, tikler, rakamlar ve paletler',
      'Kırmızı gece modlu Bekleme Modu desteği',
      'Hesap yok, takip yok, reklam yok',
    ],
    breadcrumbHome: 'Ana Sayfa',
  },
}
