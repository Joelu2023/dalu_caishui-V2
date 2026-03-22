import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

type Props = {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-surface border border-primary hover:bg-secondary hover:border-secondary',
  outline:
    'bg-surface text-primary border border-line hover:border-primary hover:bg-canvas',
  ghost:
    'bg-transparent text-primary border border-line hover:border-primary hover:bg-canvas',
}

export function ButtonLink({ to, children, variant = 'primary', className = '' }: Props) {
  return (
    <Link
      to={to}
      className={[
        'inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-medium transition-colors duration-200',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </Link>
  )
}
