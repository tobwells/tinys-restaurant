import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-rust text-cream-text shadow-[0_4px_14px_-4px_rgba(156,61,24,0.5)] hover:bg-rust-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(156,61,24,0.55)] active:translate-y-0',
  secondary:
    'bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-cream-text hover:-translate-y-0.5 active:translate-y-0',
  dark: 'bg-espresso text-cream-text border-2 border-gold-light/40 hover:bg-espresso-2 hover:border-gold-light/70 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-white/10 text-cream-text border border-cream-text/30 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm min-h-11',
  lg: 'px-8 py-4 text-base min-h-12',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = 'primary', size = 'md', icon, className = '', children, ...rest } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  )
}
