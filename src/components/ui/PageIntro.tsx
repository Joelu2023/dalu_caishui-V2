type Props = {
  title: string
  lead: string
}

/** 内页顶栏：标题 + 引导文 */
export function PageIntro({ title, lead }: Props) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-[2rem]">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-[17px]">{lead}</p>
      </div>
    </div>
  )
}
