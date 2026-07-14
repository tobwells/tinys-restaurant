import { useId, useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'

export interface AccordionItemData {
  id: string
  question: string
  answer: string
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="flex flex-col divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white shadow-sm">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  )
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = useId()

  return (
    <div>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-cream-alt/60 sm:px-6 sm:py-5"
        >
          <span className="font-display text-base font-semibold text-ink sm:text-lg">{item.question}</span>
          <CaretDown
            size={20}
            weight="bold"
            aria-hidden
            className={`shrink-0 text-rust transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6 sm:text-base">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}
