import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KokSoft Feedback Privacy Policy',
  description:
    'Privacy Policy for KokSoft Feedback, the feedback portal for KokSoft apps.',
}

export default function FeedbackPrivacyPolicyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            KokSoft Feedback Privacy Policy
          </h1>
          <p>Effective date: September 28, 2026</p>
        </div>

        <p>
          KokSoft Feedback (
          <a className="underline" href="https://feedback.mucahitk.com">
            feedback.mucahitk.com
          </a>
          ) is where people who use KokSoft apps, such as WidgetLoft, suggest
          features, report bugs, and vote on ideas. This policy explains what
          information the portal collects and how it is used.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Information We Collect
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Account information: if you sign up with email, your name, email
              address, and password. Passwords are stored only in hashed form.
            </li>
            <li>
              Sign in with Google: if you choose it, Google shares your name,
              email address, and profile picture with us. We do not receive
              your Google password and do not access any other data in your
              Google account.
            </li>
            <li>
              Content you submit: posts, comments, votes, and images you
              upload. You can also post without an account; those posts are
              reviewed before they are published.
            </li>
            <li>
              Session information: while you are signed in, we keep a session
              record with your IP address and browser type to keep you signed
              in and to protect your account.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            What Is Public
          </h2>
          <p>
            Posts, comments, and votes are visible to anyone who visits the
            portal, together with your display name and profile picture. Your
            email address is never shown publicly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How Your Data Is Used
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>To run the portal and show your feedback and its status.</li>
            <li>To prevent spam and abuse.</li>
            <li>To decide what to build and fix next in our apps.</li>
            <li>
              We do not sell your personal data and do not use it for
              advertising.
            </li>
          </ul>
          <p>
            Our use of information received from Google APIs adheres to the{' '}
            <a
              className="underline"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Cookies
          </h2>
          <p>
            The portal uses only the cookies it needs to keep you signed in
            and remember your preferences, such as light or dark mode. It does
            not use advertising or analytics cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Where Data Is Stored
          </h2>
          <p>
            The portal runs on a server we operate. Uploaded images and
            database backups are stored in private{' '}
            <a
              className="underline"
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare
            </a>{' '}
            R2 storage that is not publicly accessible.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Retention and Deletion
          </h2>
          <p>
            We keep your account and contributions for as long as the portal
            runs, or until you ask us to delete them. To delete your account
            and the personal data linked to it, email us at the address below.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            KokSoft Feedback is not directed to children under 13, and we do
            not knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will
            be posted on this page with a revised effective date.
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
      </article>
    </main>
  )
}
