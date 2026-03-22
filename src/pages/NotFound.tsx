import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-slate-50 px-4 py-24">
      <p className="text-sm text-slate-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900">页面未找到</h1>
      <Link to="/" className="mt-8 text-sm text-[#1a3a5c] underline-offset-4 hover:underline">
        返回首页
      </Link>
    </div>
  )
}
