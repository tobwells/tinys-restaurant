import { LegalLayout } from './LegalLayout'
import { restaurant } from '../data/restaurant'

export function AccessibilityStatement() {
  return (
    <LegalLayout title="Accessibility Statement">
      <p>
        {restaurant.name} is committed to making our website usable by everyone, including guests who
        use assistive technology.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Our Approach</h2>
      <p>This website is built with accessibility in mind, including:</p>
      <ul className="list-disc pl-5">
        <li>Semantic HTML and logical heading structure throughout the page</li>
        <li>Visible focus states and full keyboard navigation for all interactive elements</li>
        <li>Descriptive alt text on meaningful images and labeled icon-only buttons</li>
        <li>Color contrast that meets WCAG AA guidelines for text and interface elements</li>
        <li>Support for reduced-motion preferences and screen magnification</li>
        <li>Form fields with visible labels, inline error messages, and keyboard-friendly controls</li>
      </ul>

      <h2 className="font-display text-xl font-semibold text-ink">Ongoing Improvements</h2>
      <p>
        We continue to test and refine this site for accessibility. If you encounter any barrier while
        using this website, please let us know so we can address it.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Alternative Access</h2>
      <p>
        If any part of this website is difficult to use, our team is always happy to help by phone at{' '}
        <a href={`tel:${restaurant.phone.tel}`} className="font-semibold text-rust hover:underline">
          {restaurant.phone.display}
        </a>{' '}
        for reservations, menu questions, or ordering.
      </p>

      <h2 className="font-display text-xl font-semibold text-ink">Contact Us</h2>
      <p>
        To report an accessibility issue, please call us at{' '}
        <a href={`tel:${restaurant.phone.tel}`} className="font-semibold text-rust hover:underline">
          {restaurant.phone.display}
        </a>
        .
      </p>
    </LegalLayout>
  )
}
