interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  const eyebrowColor = tone === 'dark' ? 'text-gold-light' : 'text-rust'
  const titleColor = tone === 'dark' ? 'text-cream-text' : 'text-ink'
  const descColor = tone === 'dark' ? 'text-cream-text-soft' : 'text-ink-soft'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-balance text-3xl font-bold sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-balance text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  )
}
