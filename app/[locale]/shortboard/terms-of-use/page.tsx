import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Shortboard Terms of Use',
  description: 'Terms of Use for the Shortboard iOS application.',
}

export default function ShortboardTermsOfUsePage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Shortboard Terms of Use
          </h1>
          <p>Effective date: October 18, 2026</p>
        </div>

        <p>
          These Terms of Use govern your use of the Shortboard mobile
          application. By using Shortboard, you agree to these terms.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            1. Use of the App
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Shortboard is provided for personal, lawful use to build shortcut
              boards and widgets for your Home Screen and Lock Screen.
            </li>
            <li>
              You are responsible for ensuring your use of the app complies with
              applicable laws and third-party rights.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            2. Permissions and Device Access
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Photos for custom icons and the preview wallpaper are chosen
              through the system photo picker, so Shortboard only receives the
              photos you pick and does not ask for access to your photo library.
            </li>
            <li>
              Shortboard asks to send notifications only after you agree to hear
              about updates and offers. If you say no, the rest of the app works
              the same.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            3. Purchases
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Shortboard offers a one-time &quot;lifetime&quot; in-app purchase
              that unlocks its premium features. It is not a subscription and
              does not renew.
            </li>
            <li>
              Payments are processed by Apple under your App Store account. You
              can restore a previous purchase on a new device. Prices are shown
              in the app before you buy.
            </li>
            <li>
              Purchase management and restoration are provided through Adapty.
              Refunds, where applicable, are handled by Apple in accordance with
              App Store policies.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            4. User Content
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              You retain ownership of the boards, icons, and other content you
              create using Shortboard.
            </li>
            <li>
              You are solely responsible for the content you create and store in
              the app.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            5. Prohibited Conduct
          </h2>
          <p>You agree not to use Shortboard to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Violate laws, privacy rights, or intellectual property rights.
            </li>
            <li>Attempt to reverse engineer or misuse the app.</li>
            <li>Create or distribute unlawful or harmful content.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            6. Disclaimers
          </h2>
          <p>
            Shortboard is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, to the fullest
            extent permitted by law. We do not guarantee uninterrupted operation
            or compatibility with every device model or iOS version.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Shortboard and its developer
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages resulting from your use of the app.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            8. Changes to Terms
          </h2>
          <p>
            We may revise these terms at any time. Updated terms will be posted
            on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            9. Contact
          </h2>
          <p>
            Questions about these Terms can be sent to:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/shortboard/privacy-policy">
            Read Shortboard Privacy Policy
          </Link>
        </p>
      </article>
    </main>
  )
}
