import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  padded?: boolean
  id?: string
}

export function Card({ children, className = '', padded = true, id }: Props) {
  return (
    <div
      id={id}
      className={[
        'rounded-lg border border-line bg-surface shadow-sm transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(31,42,55,0.06)]',
        padded ? 'p-6 sm:p-7' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
