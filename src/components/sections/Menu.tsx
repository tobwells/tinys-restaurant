import { useState } from 'react'
import { FilePdf } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { DietaryBadge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { menuGroups } from '../../data/menu'
import { restaurant } from '../../data/restaurant'

export function Menu() {
  const [activeGroup, setActiveGroup] = useState(menuGroups[0].id)
  const group = menuGroups.find((g) => g.id === activeGroup) ?? menuGroups[0]

  const [activeCategory, setActiveCategory] = useState(group.categories[0].id)
  const category = group.categories.find((c) => c.id === activeCategory) ?? group.categories[0]

  function handleGroupChange(groupId: string) {
    setActiveGroup(groupId)
    const nextGroup = menuGroups.find((g) => g.id === groupId)
    if (nextGroup) setActiveCategory(nextGroup.categories[0].id)
  }

  return (
    <section id="menu" className="bg-cream py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="The Full Menu"
            title="Something for Everyone at the Table"
            description="Organized by category, clearly priced, and labeled for common dietary needs."
            className="sm:mx-0"
          />
          <Button
            href={restaurant.menuPdfUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            size="md"
            icon={<FilePdf size={18} weight="bold" aria-hidden />}
            className="shrink-0"
          >
            Download PDF Menu
          </Button>
        </div>

        <div
          role="tablist"
          aria-label="Lunch & Dinner or Breakfast"
          className="mx-auto flex w-fit gap-1 rounded-full border border-ink/15 bg-white p-1"
        >
          {menuGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={activeGroup === g.id}
              onClick={() => handleGroupChange(g.id)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeGroup === g.id ? 'bg-ink text-cream-text' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {group.categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeCategory === c.id
                  ? 'border-rust bg-rust text-cream-text'
                  : 'border-ink/15 bg-white text-ink-soft hover:border-rust/40 hover:text-rust'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="flex flex-col gap-6">
          {category.note && (
            <p className="mx-auto max-w-2xl text-center text-sm italic text-ink-soft">{category.note}</p>
          )}
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {category.items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-ink/10 pb-6">
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
                    <span className="shrink-0 whitespace-nowrap font-display text-base font-semibold text-rust">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
                  )}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {item.dietary.map((d) => (
                        <DietaryBadge key={d} type={d} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
