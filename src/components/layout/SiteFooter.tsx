import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary">大陆财税工作室</p>
            <p className="mt-4 max-w-md text-sm leading-[1.85] text-muted">
              立足行业实战，服务复杂项目。
              <br />
              以财税专业能力支持房地产与建筑企业更稳健的经营与决策。
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:items-end sm:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">快速入口</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-primary">
              <Link to="/services" className="transition hover:text-accent">
                服务领域
              </Link>
              <Link to="/research" className="transition hover:text-accent">
                专题研究
              </Link>
              <Link to="/contact" className="transition hover:text-accent">
                联系咨询
              </Link>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-muted sm:text-right">
              本站为静态展示；文章、案例与在线表单等功能可后续接入。
            </p>
          </div>
        </div>
        <div className="mt-14 border-t border-line pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} 大陆财税工作室 · 保留所有权利
        </div>
      </div>
    </footer>
  )
}
