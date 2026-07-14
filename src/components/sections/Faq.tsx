import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Accordion } from '../ui/Accordion'
import { faqs } from '../../data/faq'

export function Faq() {
  return (
    <section id="faq" className="bg-cream-alt py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently Asked Questions"
          description="Can't find what you're looking for? Give us a call — we're happy to help."
        />
        <div className="mx-auto w-full max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  )
}
