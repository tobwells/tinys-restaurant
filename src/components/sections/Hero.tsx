import { ForkKnife, Phone, MapPin, Clock, NavigationArrow } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { restaurant } from '../../data/restaurant'
import heroImage from '../../assets/images/hero-fried-haddock.webp'
import heroImageMobile from '../../assets/images/hero-fried-haddock-mobile.webp'

const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })

export function Hero() {
  const today = restaurant.hours.find((h) => h.day === todayName) ?? restaurant.hours[0]

  return (
    <section id="home" className="relative flex min-h-dvh items-end overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          srcSet={`${heroImageMobile} 900w, ${heroImage} 1800w`}
          sizes="100vw"
          alt="A fried haddock plate with french fries, coleslaw and tartar sauce at Tiny's Restaurant"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/70 to-espresso/30" />
        <div className="absolute inset-0 bg-linear-to-r from-espresso/60 via-transparent to-espresso/40" />
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-espresso/70 to-transparent" />
      </div>

      <Container className="flex flex-col gap-8 pb-14 sm:pb-20">
        <div className="flex max-w-2xl flex-col gap-5 animate-fade-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">
            <ForkKnife size={14} weight="fill" aria-hidden />
            Family-Owned &middot; Ayer, MA
          </span>
          <h1 className="text-balance text-4xl font-bold text-cream-text sm:text-5xl lg:text-6xl">
            {restaurant.tagline}
          </h1>
          <p className="max-w-lg text-balance text-base leading-relaxed text-cream-text-soft sm:text-lg">
            {restaurant.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#menu" variant="primary" size="lg">
              View Menu
            </Button>
            <Button href={`tel:${restaurant.phone.tel}`} variant="ghost" size="lg" icon={<Phone size={18} weight="fill" aria-hidden />}>
              Call Now
            </Button>
            <Button
              href={restaurant.map.directionsUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="lg"
              icon={<NavigationArrow size={18} weight="fill" aria-hidden />}
            >
              Get Directions
            </Button>
          </div>
        </div>

        <div className="flex w-full max-w-2xl flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:gap-8 sm:p-6">
          <div className="flex items-center gap-3">
            <Clock size={20} className="shrink-0 text-gold-light" aria-hidden />
            <div className="text-sm text-cream-text">
              <p className="font-semibold">Today &middot; {today.day}</p>
              <p className="text-cream-text-soft">{today.time}</p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-3">
            <MapPin size={20} className="shrink-0 text-gold-light" aria-hidden />
            <div className="text-sm text-cream-text">
              <p className="font-semibold">{restaurant.address.line1}</p>
              <p className="text-cream-text-soft">
                {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}
              </p>
            </div>
          </div>
          <a
            href={restaurant.map.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto hidden shrink-0 text-sm font-semibold text-gold-light underline-offset-4 hover:underline sm:block"
          >
            Get Directions
          </a>
        </div>
      </Container>
    </section>
  )
}
