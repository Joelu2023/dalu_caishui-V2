type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  /** 深色局部区块（Secondary 底） */
  onDark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  onDark = false,
}: Props) {
  const isCenter = align === 'center'
  const wrap = isCenter ? 'text-center mx-auto' : ''

  return (
    <div className={`max-w-3xl ${wrap}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-medium uppercase tracking-[0.22em] ${onDark ? 'text-accent/90' : 'text-accent'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl font-semibold tracking-tight sm:text-3xl ${onDark ? 'text-surface' : 'text-foreground'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-[1.75] sm:text-[17px] ${onDark ? 'text-surface/75' : 'text-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
