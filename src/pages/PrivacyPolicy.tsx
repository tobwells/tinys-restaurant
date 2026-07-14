import { LegalLayout } from './LegalLayout'
import { restaurant } from '../data/restaurant'

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>Last updated: January 2026</p>
      <p>
        {restaurant.name} ("we," "us," or "our") respects your privacy. This policy explains what
        information we collect through this website and how we use it.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Information We Collect</h2>
      <p>
        When you submit our reservation form, we collect the information you provide directly: your
        name, phone number, email address, requested date and time, party size, and any special
        requests. We do not collect payment information through this website.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">How We Use Your Information</h2>
      <p>
        We use reservation details solely to confirm and manage your visit to {restaurant.name}. We do
        not sell or rent your personal information to third parties.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Social Media & Review Platforms</h2>
      <p>
        Links to our social media pages (Facebook, Instagram) and review platforms are provided for
        your convenience. Those third-party sites have their own privacy policies, and we encourage
        you to review them.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Cookies & Analytics</h2>
      <p>
        This site may use basic, privacy-respecting analytics to understand overall traffic patterns.
        No personally identifiable information is sold or shared as a result.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Contact Us</h2>
      <p>
        Questions about this policy can be directed to us by phone at{' '}
        <a href={`tel:${restaurant.phone.tel}`} className="font-semibold text-rust hover:underline">
          {restaurant.phone.display}
        </a>{' '}
        or through our{' '}
        <a href="/#contact" className="font-semibold text-rust hover:underline">
          contact form
        </a>
        .
      </p>
    </LegalLayout>
  )
}
