import { FacebookLogo, InstagramLogo, MapPin, Phone } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { navLinks, restaurant } from '../../data/restaurant'
import logo from '../../assets/images/logo.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-cream-text-soft">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4">
          <a href="#home" className="w-fit">
            <img src={logo} alt="Tiny's Restaurant" className="h-14 w-auto rounded-md shadow-sm" />
          </a>
          <p className="max-w-xs text-sm leading-relaxed">{restaurant.description}</p>
          <div className="flex gap-3 pt-1">
            <SocialLink href={restaurant.social.facebook} label="Facebook">
              <FacebookLogo size={18} weight="fill" aria-hidden />
            </SocialLink>
            <SocialLink href={restaurant.social.instagram} label="Instagram">
              <InstagramLogo size={18} weight="fill" aria-hidden />
            </SocialLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-cream-text">Navigate</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm transition-colors hover:text-gold-light">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-cream-text">Contact</h3>
          <a href={restaurant.map.directionsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm transition-colors hover:text-gold-light">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
            {restaurant.address.full}
          </a>
          <a href={`tel:${restaurant.phone.tel}`} className="flex items-center gap-2 text-sm transition-colors hover:text-gold-light">
            <Phone size={16} className="shrink-0" aria-hidden />
            {restaurant.phone.display}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-cream-text">Hours</h3>
          <ul className="flex flex-col gap-1 text-sm">
            {restaurant.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-cream-text-soft/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream-text/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-text-soft/70 sm:flex-row">
          <p>
            &copy; {year} {restaurant.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="transition-colors hover:text-gold-light">
              Privacy Policy
            </a>
            <a href="/accessibility" className="transition-colors hover:text-gold-light">
              Accessibility
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-text/20 text-cream-text transition-colors hover:border-gold-light hover:text-gold-light"
    >
      {children}
    </a>
  )
}
