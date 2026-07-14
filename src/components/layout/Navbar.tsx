import { useEffect, useState } from 'react'
import { List, X, Phone, Bag } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { navLinks, restaurant } from '../../data/restaurant'
import logo from '../../assets/images/logo.webp'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrolled || menuOpen

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        solid ? 'bg-cream/95 shadow-[0_2px_20px_-6px_rgba(42,29,21,0.15)] backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="flex items-center rounded-md">
          <img
            src={logo}
            alt="Tiny's Restaurant"
            className="h-11 w-auto rounded-md shadow-sm sm:h-14"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-300 hover:text-rust ${
                solid ? 'text-ink-soft' : 'text-cream-text'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="#order-online"
            variant={solid ? 'secondary' : 'ghost'}
            size="md"
            icon={<Bag size={16} weight="fill" aria-hidden />}
          >
            Takeout
          </Button>
          <Button href="#reservation" variant="primary" size="md">
            Reserve a Table
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${restaurant.phone.tel}`}
            aria-label={`Call ${restaurant.name} at ${restaurant.phone.display}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-rust text-cream-text transition hover:bg-rust-dark"
          >
            <Phone size={20} weight="fill" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
              solid ? 'border-ink/15 text-ink hover:bg-ink/5' : 'border-cream-text/30 text-cream-text hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X size={22} aria-hidden /> : <List size={22} aria-hidden />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 border-t border-ink/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink transition hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Button
                href="#order-online"
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Takeout
              </Button>
              <Button href="#reservation" variant="primary" size="md" className="w-full" onClick={() => setMenuOpen(false)}>
                Reserve a Table
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
