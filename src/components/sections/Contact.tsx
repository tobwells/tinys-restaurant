import { MapPin, Phone, Clock, NavigationArrow, CalendarBlank } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { restaurant } from '../../data/restaurant'

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Your Way to Tiny's"
          description="Right in the heart of Ayer, Massachusetts — stop by, call ahead, or send us a message below."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <InfoRow icon={MapPin} label="Address">
              <a href={restaurant.map.directionsUrl} target="_blank" rel="noreferrer" className="hover:text-rust hover:underline">
                {restaurant.address.line1}
                <br />
                {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}
              </a>
            </InfoRow>
            <InfoRow icon={Phone} label="Phone">
              <a href={`tel:${restaurant.phone.tel}`} className="hover:text-rust hover:underline">
                {restaurant.phone.display}
              </a>
            </InfoRow>
            <InfoRow icon={Clock} label="Hours">
              <ul className="flex flex-col gap-0.5">
                {restaurant.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span className="text-ink-soft">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <div className="mt-2 flex flex-wrap gap-3">
              <Button href={restaurant.map.directionsUrl} target="_blank" rel="noreferrer" variant="primary" icon={<NavigationArrow size={18} weight="fill" aria-hidden />}>
                Get Directions
              </Button>
              <Button href="#reservation" variant="secondary" icon={<CalendarBlank size={18} weight="fill" aria-hidden />}>
                Reserve a Table
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-[0_20px_50px_-24px_rgba(42,29,21,0.3)]">
            <iframe
              title={`Map showing the location of ${restaurant.name}`}
              src={restaurant.map.embedSrc}
              width="100%"
              height="100%"
              className="min-h-80 w-full lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
        <Icon size={20} weight="fill" aria-hidden />
      </span>
      <div className="flex flex-col gap-0.5 text-sm">
        <span className="font-semibold text-ink">{label}</span>
        <div className="text-ink-soft">{children}</div>
      </div>
    </div>
  )
}
