import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { DishCard } from '../ui/DishCard'
import { Button } from '../ui/Button'
import { menuGroups, featuredDishes, dailySpecial } from '../../data/menu'

function categoryFor(itemId: string): string | undefined {
  for (const group of menuGroups) {
    const category = group.categories.find((c) => c.items.some((i) => i.id === itemId))
    if (category) return category.name
  }
  return undefined
}

export function FeaturedDishes() {
  return (
    <section className="bg-cream py-20 sm:py-28" aria-labelledby="featured-heading">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Fan Favorites"
          title="A Taste of What We're Known For"
          description="From our famous lobster roll to a fresh cut of prime rib, these are the dishes our regulars order again and again."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((item) => (
            <DishCard key={item.id} item={item} categoryLabel={categoryFor(item.id)} />
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-gold/30 bg-cream-alt p-6 sm:grid-cols-[1fr_1.4fr] sm:p-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={dailySpecial.image}
              alt={dailySpecial.name}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">Today's Special</span>
            <h3 className="font-display text-xl font-semibold text-ink">{dailySpecial.name}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{dailySpecial.description}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button href="#menu" variant="secondary" size="lg">
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  )
}
