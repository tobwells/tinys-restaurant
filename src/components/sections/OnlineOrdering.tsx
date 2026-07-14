import { Phone, Bag } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { restaurant } from '../../data/restaurant'

export function OnlineOrdering() {
  return (
    <section id="order-online" className="bg-espresso py-20 text-cream-text sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-light/15 text-gold-light">
          <Bag size={30} weight="fill" aria-hidden />
        </span>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Takeout"
          title="Craving Tiny's? Call Ahead for Takeout"
          description={restaurant.takeout.note}
        />
        <Button
          href={`tel:${restaurant.phone.tel}`}
          variant="primary"
          size="lg"
          icon={<Phone size={18} weight="fill" aria-hidden />}
        >
          Call {restaurant.phone.display}
        </Button>
      </Container>
    </section>
  )
}
