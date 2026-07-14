import { Quotes, ArrowUpRight } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { reviews } from '../../data/reviews'
import { restaurant } from '../../data/restaurant'

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="What Our Guests Say" title="Loved by Locals, Welcomed by Everyone" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.id}
              className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(42,29,21,0.1)] transition-shadow hover:shadow-[0_12px_30px_-10px_rgba(42,29,21,0.2)]"
            >
              <Quotes size={28} weight="fill" className="text-rust/25" aria-hidden />
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col gap-0.5 border-t border-ink/10 pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">{r.name}</span>
                  <span className="text-ink-soft">{r.date}</span>
                </div>
                <span className="text-xs text-rust">review of the {r.dish}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href={restaurant.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRight size={18} weight="bold" aria-hidden />}
          >
            Read More Reviews
          </Button>
        </div>
      </Container>
    </section>
  )
}
