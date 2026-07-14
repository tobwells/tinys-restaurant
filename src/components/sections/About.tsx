import { House, Wine, CalendarBlank, HandHeart, Ticket, Gift } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import primeRibImage from '../../assets/images/prime-rib.webp'

const highlights = [
  {
    icon: House,
    title: 'Home-Cooked Meals, Reasonable Prices',
    description: 'Family owned and operated, serving generous home-cooked meals the whole family can enjoy.',
  },
  {
    icon: Wine,
    title: 'Full Bar',
    description: 'Pair your meal with a drink from our full bar, right in the dining room.',
  },
  {
    icon: CalendarBlank,
    title: 'Daily Specials',
    description: 'Ask about our daily specials and all-you-can-eat nights.',
  },
  {
    icon: HandHeart,
    title: 'Great Wait Staff',
    description: 'Our staff is here to make you feel at home from the moment you sit down.',
  },
  {
    icon: Ticket,
    title: 'Lottery & Keno',
    description: 'Lottery, keno, daily games and scratch tickets available in house.',
  },
  {
    icon: Gift,
    title: 'Gift Certificates',
    description: 'We offer gift certificates for any occasion — ask a member of our staff.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-cream-alt py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(42,29,21,0.35)]">
            <img
              src={primeRibImage}
              alt="Slow roasted prime rib with mashed potatoes and au jus at Tiny's Restaurant"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-espresso p-5 text-cream-text shadow-xl sm:block">
            <p className="font-display text-lg font-bold text-gold-light">Family Owned &amp; Operated</p>
            <p className="mt-1 text-sm text-cream-text-soft">Right in the heart of Ayer, MA</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">Our Story</span>
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            Home-Cooked Meals in a Place That Feels Like Family
          </h2>
          <p className="text-balance leading-relaxed text-ink-soft">
            Tiny&rsquo;s Restaurant is a family owned restaurant serving home-cooked meals at reasonable
            prices, with a full bar to match. Our wait staff is here to make you feel at home from the
            moment you walk in.
          </p>
          <p className="text-balance leading-relaxed text-ink-soft">
            Stop in for lottery, keno, daily games and scratch tickets, ask about our daily specials and
            all-you-can-eat nights, or pick up a gift certificate for someone you love. Whatever brings you
            in, our goal is the same every time: a great home-cooked meal and good people to share it with.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
                  <h.icon size={22} weight="fill" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">{h.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
