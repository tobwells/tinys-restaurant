import type { MenuItem } from '../../data/menu'
import { DietaryBadge } from './Badge'

export function DishCard({ item, categoryLabel }: { item: MenuItem; categoryLabel?: string }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-2px_rgba(42,29,21,0.12)] ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(42,29,21,0.25)]">
      {item.image && (
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {categoryLabel && (
            <span className="absolute left-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-text backdrop-blur-sm">
              {categoryLabel}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">{item.name}</h3>
          <span className="shrink-0 whitespace-nowrap font-display text-lg font-semibold text-rust">{item.price}</span>
        </div>
        {item.description && <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>}
        {item.dietary && item.dietary.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {item.dietary.map((d) => (
              <DietaryBadge key={d} type={d} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
