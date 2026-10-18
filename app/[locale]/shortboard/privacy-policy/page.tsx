import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shortboard Privacy Policy',
  description: 'Privacy Policy for the Shortboard iOS application.',
}

export default function ShortboardPrivacyPolicyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Shortboard Privacy Policy
          </h1>
          <p>Effective date: October 18, 2026</p>
        </div>

        <p>
          Shortboard builds shortcut boards for your Home Screen and Lock Screen
          widgets. We respect your privacy: Shortboard does not require an
          account, does not run its own servers for your content, and keeps your
          boards, icons, and settings on your device.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Information Stored on Your Device
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              The boards you create, the icons and colours you choose, your app
              library, and your preview wallpaper are stored on your device, in
              a shared app group container so your widgets can draw them.
            </li>
            <li>
              Photos: when you pick a photo for a custom icon or a preview
              wallpaper, it is processed and stored on your device. Photos are
              chosen through the system photo picker, so Shortboard only
              receives the photos you pick and has no access to the rest of your
              library.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            App Store Lookups
          </h2>
          <p>
            To show app names and icons on your tiles, Shortboard sends the
            search terms you type, and the app bundle identifiers or App Store
            IDs it looks up, to Apple&apos;s public App Store Search and Lookup
            API. These requests carry no account or personal identifier, and are
            used only to fetch public app names and artwork.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Importing Your Apps (Optional)
          </h2>
          <p>
            You can build your app library by sharing your device&apos;s own app
            analytics file into Shortboard, or by letting it check a fixed list
            of app URL schemes. This is processed entirely on your device and
            never leaves it. Shortboard uses it only to list your apps so you
            can give their shortcuts the right icon.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Purchases
          </h2>
          <p>
            Shortboard Pro is a one-time &quot;lifetime&quot; in-app purchase
            that unlocks its premium features. Payments are handled by Apple. To
            manage and restore your purchase, we use Adapty, a third-party
            purchase management service, which processes a device-generated
            identifier, your purchase and transaction information, and which
            screen in the app a purchase was started from. We do not use this to
            identify you personally. Adapty&apos;s handling of this data is
            governed by Adapty&apos;s own privacy policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Notifications (Optional)
          </h2>
          <p>
            If you allow notifications, Shortboard posts them from your device,
            for example when a new version is out or before a limited-time offer
            ends. To learn about a new version, it asks Apple&apos;s public App
            Store Lookup API for Shortboard&apos;s own version number. There is
            no push server, and no notification token leaves your device.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Contacting Support
          </h2>
          <p>
            If you write to us from inside the app, the email draft includes
            your app version, device model, iOS version, language, Pro status,
            and the anonymous purchase identifiers above, so we can help with
            your purchase. You can see and remove these lines before you send
            the email.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            What We Do Not Do
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>We do not require an account or ask you to sign in.</li>
            <li>We do not show ads.</li>
            <li>
              We do not sell your personal data, and we do not use third-party
              advertising or analytics tracking SDKs.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Retention
          </h2>
          <p>
            Your boards, icons, and other content remain on your device until
            you delete them or remove the app. Uninstalling Shortboard removes
            its locally stored data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            Shortboard is not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Contact
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/shortboard/terms-of-use">
            Read Shortboard Terms of Use
          </Link>
        </p>
      </article>
    </main>
  )
}
