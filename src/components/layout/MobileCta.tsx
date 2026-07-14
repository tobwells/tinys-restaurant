import { Phone, CalendarBlank } from '@phosphor-icons/react'
import { restaurant } from '../../data/restaurant'

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-cream/97 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-8px_rgba(42,29,21,0.2)] backdrop-blur-sm lg:hidden">
      <a
        href={`tel:${restaurant.phone.tel}`}
        className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-ink text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream-text"
      >
        <Phone size={18} weight="fill" aria-hidden />
        Call Now
      </a>
      <a
        href="#reservation"
        className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-rust text-sm font-semibold text-cream-text transition-colors hover:bg-rust-dark"
      >
        <CalendarBlank size={18} weight="fill" aria-hidden />
        Reserve a Table
      </a>
    </div>
  )
}
