import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于我们' },
  { to: '/services', label: '服务领域' },
  { to: '/research', label: '专题研究' },
  { to: '/lectures', label: '授课分享' },
  { to: '/cooperation', label: '合作方式' },
  { to: '/contact', label: '联系咨询' },
] as const

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'whitespace-nowrap px-1 py-2 text-[13px] font-normal tracking-wide transition-colors duration-200',
      isActive ? 'text-primary' : 'text-muted hover:text-primary',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="group flex shrink-0 flex-col gap-0.5" onClick={() => setOpen(false)}>
          <span className="text-[15px] font-semibold tracking-[0.06em] text-primary transition-colors group-hover:text-secondary">
            大陆财税工作室
          </span>
          <span className="hidden text-[11px] leading-tight text-muted sm:block">
            房地产 · 建筑 · 财税与项目决策
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-sm border border-line bg-canvas p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? '关闭菜单' : '打开菜单'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-surface px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-0.5" aria-label="移动端导航">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-sm px-3 py-3 text-sm',
                    isActive
                      ? 'bg-canvas text-primary'
                      : 'text-muted hover:bg-canvas hover:text-primary',
                  ].join(' ')
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
