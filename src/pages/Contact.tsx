import { useState } from 'react'
import type { FormEvent } from 'react'
import { Card } from '../components/ui/Card'
import { PageIntro } from '../components/ui/PageIntro'

const initial = {
  name: '',
  company: '',
  phone: '',
  topic: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageIntro
        title="联系咨询"
        lead="如果您正在寻找熟悉房地产与建筑行业特点、能够理解项目逻辑并提供财税筹划与决策支持的专业顾问，欢迎与大陆财税工作室交流。"
      />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9a8a5c]">
                联系方式
              </h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-500">名称</dt>
                  <dd className="mt-1 text-slate-900">大陆财税工作室</dd>
                </div>
                <div>
                  <dt className="text-slate-500">常驻城市</dt>
                  <dd className="mt-1 text-slate-900">广州</dd>
                </div>
                <div>
                  <dt className="text-slate-500">联系电话</dt>
                  <dd className="mt-1">
                    <a href="tel:13501501272" className="text-[#1a3a5c] hover:underline">
                      13501501272
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">微信</dt>
                  <dd className="mt-1 text-slate-400">预留占位</dd>
                </div>
                <div>
                  <dt className="text-slate-500">邮箱</dt>
                  <dd className="mt-1 text-slate-400">预留占位</dd>
                </div>
              </dl>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">在线留言</h2>
              <p className="mt-2 text-sm text-slate-500">
                当前为静态演示版；提交后仅在页面提示，后续可接入邮件或 CRM。
              </p>

              {submitted ? (
                <p className="mt-8 rounded border border-slate-200 bg-white px-4 py-6 text-sm text-slate-700">
                  感谢您的留言。我们已记录您的提交（演示环境不发送邮件）。请直接致电或通过微信与我们进一步沟通。
                </p>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      姓名
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="mt-1.5 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-[#1a3a5c] transition focus:border-[#1a3a5c] focus:ring-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                      公司
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      className="mt-1.5 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                      联系方式
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="mt-1.5 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c]"
                      placeholder="手机或微信号"
                    />
                  </div>
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-slate-700">
                      咨询事项
                    </label>
                    <input
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                      className="mt-1.5 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c]"
                      placeholder="如：土增清算 / 收并购测算 / 其他"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      留言内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="mt-1.5 w-full resize-y rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c]"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="rounded bg-[#1a3a5c] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#0f2744]"
                    >
                      提交留言
                    </button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
