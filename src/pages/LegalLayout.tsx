import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { Container } from '../components/ui/Container'
import { restaurant } from '../data/restaurant'

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <header className="border-b border-ink/10 bg-cream/95 py-5 backdrop-blur-sm">
        <Container className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-ink">
            Tiny&rsquo;s <span className="text-rust">Restaurant</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-rust"
          >
            <ArrowLeft size={16} weight="bold" aria-hidden />
            Back to Home
          </Link>
        </Container>
      </header>

      <main className="flex-1 py-14 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
          <div className="prose-legal mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-ink-soft">
            {children}
          </div>
        </Container>
      </main>

      <footer className="border-t border-ink/10 py-8 text-center text-xs text-ink-soft">
        <Container>
          &copy; {new Date().getFullYear()} {restaurant.name}. All rights reserved.
        </Container>
      </footer>
    </div>
  )
}
