import { Leaf, Plant, GrainsSlash, Fire } from '@phosphor-icons/react'
import type { Dietary } from '../../data/menu'
import { dietaryLabels } from '../../data/menu'

const config: Record<Dietary, { icon: typeof Leaf; classes: string }> = {
  vegetarian: { icon: Leaf, classes: 'bg-green-50 text-green-800 border-green-200' },
  vegan: { icon: Plant, classes: 'bg-green-50 text-green-800 border-green-200' },
  'gluten-free': { icon: GrainsSlash, classes: 'bg-amber-50 text-amber-800 border-amber-200' },
  spicy: { icon: Fire, classes: 'bg-red-50 text-red-700 border-red-200' },
}

export function DietaryBadge({ type }: { type: Dietary }) {
  const { icon: Icon, classes } = config[type]
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${classes}`}
    >
      <Icon size={12} weight="bold" aria-hidden />
      {dietaryLabels[type]}
    </span>
  )
}
