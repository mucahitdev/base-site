// Per-locale content for the Shortboard page. Both the rendered copy and the
// JSON-LD structured data are built from these bundles so they never drift.

type Faq = { q: string; a: string }

export type ShortboardContent = {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  intro: string[]
  downloadCta: string
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

export const SHORTBOARD_CONTENT: Record<'en' | 'tr', ShortboardContent> = {
  en: {
    metaTitle: 'Shortboard: Shortcut Widgets — Run Shortcuts from Widgets',
    metaDescription:
      'Shortboard turns your Home Screen and Lock Screen widgets into boards of shortcut buttons. One tap runs a shortcut or an App Shortcut, or opens an app, right from the widget — the Shortcuts app never comes forward. For iOS 27, with no account, no tracking and no ads.',
    keywords: [
      'Shortboard',
      'shortcut widgets',
      'run shortcuts from widget',
      'shortcuts widget iphone',
      'lock screen shortcuts',
      'home screen shortcut buttons',
      'ios 27 widgets',
      'custom shortcut icons',
      'liquid glass widget',
    ],
    ogTitle: 'Shortboard: Shortcut Widgets',
    ogDescription:
      'Boards of shortcut buttons for your Home Screen and Lock Screen. One tap runs a shortcut, an App Shortcut or an app, right from the widget.',
    intro: [
      'Shortboard turns your Home Screen and Lock Screen widgets into boards of shortcut buttons. Tap a button and the shortcut or App Shortcut runs, or the app opens, right from the widget — the Shortcuts app never comes forward.',
      'Each board is made for one widget size, from a Small widget with up to 20 slots to an Extra Large one with up to 64. Pick a style, give your shortcuts icons, and add the widget. Made for iOS 27 on iPhone and iPad.',
    ],
    downloadCta: 'Download on the App Store',
    featuresHeading: 'Key Features',
    features: [
      'One-tap shortcut buttons on the Home Screen and Lock Screen, without the Shortcuts app coming forward',
      'Shortcuts, apps and App Shortcuts side by side on the same board',
      'A board for every widget size: Small (up to 20 slots), Medium (40), Large (50) and Extra Large (64)',
      'Six styles, light and dark appearance, and transparent or colored backgrounds',
      'A Liquid Glass widget, plus wide and round Lock Screen widgets',
      'Custom icons for your shortcuts: a symbol, an emoji, a photo or an app icon',
      'An app library that gives app tiles their real icons, with dark icons for dark boards',
      'Shortcuts app actions to create, update and find boards and set shortcut icons',
      'Available in 45 languages',
    ],
    pricingHeading: 'Free and Pro',
    pricing: [
      'Shortboard is free to download. The free version includes 2 Home Screen boards with up to 8 slots each, and Lock Screen boards and the app library are free for everyone.',
      'Shortboard Pro is a one-time lifetime purchase, not a subscription. It unlocks unlimited Home Screen boards and every slot each widget size allows.',
    ],
    privacyHeading: 'Private by Design',
    privacy:
      'Shortboard has no account, no tracking and no ads. Your boards, icons and settings stay on your device. To show app names and icons, it sends only app names and App Store IDs to Apple’s public App Store service. Purchases are handled by Apple; the Privacy Policy has the details.',
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is Shortboard?',
        a: 'Shortboard: Shortcut Widgets is an iOS 27 app that turns Home Screen and Lock Screen widgets into boards of shortcut buttons. A tap runs a shortcut or an App Shortcut, or opens an app, right from the widget.',
      },
      {
        q: 'Does the Shortcuts app open when I tap a button?',
        a: 'No. The shortcut runs in place from the widget, and the Shortcuts app never comes forward.',
      },
      {
        q: 'How many shortcuts fit on one widget?',
        a: 'Each board is made for one widget size: Small holds up to 20 slots, Medium 40, Large 50 and Extra Large 64. Lock Screen boards come as wide and round widgets.',
      },
      {
        q: 'Can I give my shortcuts their own icons?',
        a: 'Yes. Give any shortcut a symbol, an emoji, a photo or an app icon. Apps on a board show their real icons from your app library, and their dark icons on a dark board.',
      },
      {
        q: 'Is Shortboard free?',
        a: 'Yes. The free version includes 2 Home Screen boards with up to 8 slots each, and Lock Screen boards and the app library are free. Shortboard Pro is a one-time purchase that unlocks unlimited Home Screen boards and every slot.',
      },
      {
        q: 'Does Shortboard need an account or collect my data?',
        a: 'No. There is no account, no tracking and no ads, and your boards stay on your device. To fetch app icons, Shortboard sends only app names and App Store IDs to Apple.',
      },
    ],
    supportHeading: 'Support',
    supportPrefix: 'For support, feature requests, or bug reports, contact:',
    legalHeading: 'Legal',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms of Use',
    jsonLdFeatures: [
      'One-tap shortcut buttons in Home Screen and Lock Screen widgets',
      'Shortcuts, apps and App Shortcuts on one board',
      'Boards for Small, Medium, Large and Extra Large widgets (up to 64 slots)',
      'Six styles, Liquid Glass widget, transparent or colored backgrounds',
      'Custom icons: symbol, emoji, photo or app icon',
      'No account, no tracking, no ads',
    ],
    breadcrumbHome: 'Home',
  },
  tr: {
    metaTitle: 'Shortboard: Shortcut Widgets — Kısayolları Widget’tan Çalıştır',
    metaDescription:
      'Shortboard, Ana Ekran ve Kilit Ekranı widget’larını kısayol düğmelerinden oluşan panolara çevirir. Tek dokunuş bir kısayolu veya App Shortcut’ı çalıştırır ya da bir uygulamayı açar — Kısayollar uygulaması hiç öne gelmez. iOS 27 için; hesap yok, takip yok, reklam yok.',
    keywords: [
      'Shortboard',
      'kısayol widget',
      'widget’tan kısayol çalıştırma',
      'iphone kısayollar widget',
      'kilit ekranı kısayollar',
      'ana ekran kısayol düğmeleri',
      'ios 27 widget',
      'özel kısayol simgeleri',
      'liquid glass widget',
    ],
    ogTitle: 'Shortboard: Shortcut Widgets',
    ogDescription:
      'Ana Ekran ve Kilit Ekranı için kısayol düğmesi panoları. Tek dokunuşla bir kısayolu, App Shortcut’ı veya uygulamayı doğrudan widget’tan çalıştır.',
    intro: [
      'Shortboard, Ana Ekran ve Kilit Ekranı widget’larını kısayol düğmelerinden oluşan panolara çevirir. Bir düğmeye dokun; kısayol veya App Shortcut çalışsın ya da uygulama açılsın, hepsi doğrudan widget’tan — Kısayollar uygulaması hiç öne gelmez.',
      'Her pano tek bir widget boyutu için yapılır: 20 slota kadar Küçük widget’tan 64 slota kadar Ekstra Büyük widget’a. Bir stil seç, kısayollarına simge ver ve widget’ı ekle. iPhone ve iPad’de iOS 27 için tasarlandı.',
    ],
    downloadCta: 'App Store’dan İndir',
    featuresHeading: 'Öne Çıkan Özellikler',
    features: [
      'Ana Ekran ve Kilit Ekranı’nda tek dokunuşla çalışan kısayol düğmeleri; Kısayollar uygulaması öne gelmez',
      'Kısayollar, uygulamalar ve App Shortcut’lar aynı panoda yan yana',
      'Her widget boyutu için bir pano: Küçük (20 slota kadar), Orta (40), Büyük (50) ve Ekstra Büyük (64)',
      'Altı stil, açık ve koyu görünüm, şeffaf veya renkli arka planlar',
      'Bir Liquid Glass widget’ı ile geniş ve yuvarlak Kilit Ekranı widget’ları',
      'Kısayollar için özel simgeler: sembol, emoji, fotoğraf veya uygulama simgesi',
      'Uygulama karolarına gerçek simgelerini, koyu panolarda koyu simgelerini veren bir uygulama kitaplığı',
      'Pano oluşturmak, güncellemek, bulmak ve kısayol simgesi ayarlamak için Kısayollar eylemleri',
      '45 dilde kullanılabilir',
    ],
    pricingHeading: 'Ücretsiz ve Pro',
    pricing: [
      'Shortboard ücretsiz indirilir. Ücretsiz sürümde her biri 8 slota kadar 2 Ana Ekran panosu vardır; Kilit Ekranı panoları ve uygulama kitaplığı herkes için ücretsizdir.',
      'Shortboard Pro abonelik değil, tek seferlik ömür boyu bir satın alımdır. Sınırsız Ana Ekran panosunun ve her widget boyutunun izin verdiği tüm slotların kilidini açar.',
    ],
    privacyHeading: 'Tasarım Gereği Gizli',
    privacy:
      'Shortboard’da hesap yok, takip yok, reklam yok. Panoların, simgelerin ve ayarların cihazında kalır. Uygulama adlarını ve simgelerini göstermek için Apple’ın herkese açık App Store hizmetine yalnızca uygulama adlarını ve App Store kimliklerini gönderir. Satın alımları Apple yönetir; ayrıntılar Gizlilik Politikası’nda.',
    faqHeading: 'Sık Sorulan Sorular',
    faqs: [
      {
        q: 'Shortboard nedir?',
        a: 'Shortboard: Shortcut Widgets, Ana Ekran ve Kilit Ekranı widget’larını kısayol düğmelerinden oluşan panolara çeviren bir iOS 27 uygulamasıdır. Bir dokunuş, doğrudan widget’tan bir kısayolu veya App Shortcut’ı çalıştırır ya da bir uygulamayı açar.',
      },
      {
        q: 'Bir düğmeye dokununca Kısayollar uygulaması açılır mı?',
        a: 'Hayır. Kısayol doğrudan widget’tan çalışır ve Kısayollar uygulaması hiç öne gelmez.',
      },
      {
        q: 'Bir widget’a kaç kısayol sığar?',
        a: 'Her pano tek bir widget boyutu için yapılır: Küçük 20 slota kadar, Orta 40, Büyük 50 ve Ekstra Büyük 64 slot alır. Kilit Ekranı panoları geniş ve yuvarlak widget olarak gelir.',
      },
      {
        q: 'Kısayollarıma kendi simgelerini verebilir miyim?',
        a: 'Evet. Her kısayola bir sembol, emoji, fotoğraf veya uygulama simgesi verebilirsin. Panodaki uygulamalar, uygulama kitaplığından gerçek simgeleriyle, koyu panoda da koyu simgeleriyle görünür.',
      },
      {
        q: 'Shortboard ücretsiz mi?',
        a: 'Evet. Ücretsiz sürümde her biri 8 slota kadar 2 Ana Ekran panosu vardır; Kilit Ekranı panoları ve uygulama kitaplığı ücretsizdir. Shortboard Pro, sınırsız Ana Ekran panosunun ve tüm slotların kilidini açan tek seferlik bir satın alımdır.',
      },
      {
        q: 'Shortboard hesap ister mi, verilerimi toplar mı?',
        a: 'Hayır. Hesap yok, takip yok, reklam yok; panoların cihazında kalır. Uygulama simgelerini getirmek için Shortboard Apple’a yalnızca uygulama adlarını ve App Store kimliklerini gönderir.',
      },
    ],
    supportHeading: 'Destek',
    supportPrefix:
      'Destek, özellik istekleri veya hata bildirimleri için iletişim:',
    legalHeading: 'Yasal',
    privacyLabel: 'Gizlilik Politikası',
    termsLabel: 'Kullanım Koşulları',
    jsonLdFeatures: [
      'Ana Ekran ve Kilit Ekranı widget’larında tek dokunuşla kısayol düğmeleri',
      'Kısayollar, uygulamalar ve App Shortcut’lar tek panoda',
      'Küçük, Orta, Büyük ve Ekstra Büyük widget’lar için panolar (64 slota kadar)',
      'Altı stil, Liquid Glass widget’ı, şeffaf veya renkli arka planlar',
      'Özel simgeler: sembol, emoji, fotoğraf veya uygulama simgesi',
      'Hesap yok, takip yok, reklam yok',
    ],
    breadcrumbHome: 'Ana Sayfa',
  },
}
