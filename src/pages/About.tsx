import { Card } from '../components/ui/Card'
import { PageIntro } from '../components/ui/PageIntro'

const directions = [
  '房地产开发项目税务筹划与清算',
  '建筑企业税务规划与风险应对',
  '项目公司股权 / 资产收购结构设计',
  '并购前财务测算、收益模型与风险判断',
  '房地产与建筑项目财务尽职调查',
  '复杂历史项目税务与财务问题处理',
]

const principles = [
  '以项目结果为导向',
  '以行业理解支撑财税判断',
  '以稳健、可落地、可执行为服务原则',
  '重视财务、税务、资金与经营协同的整体平衡',
]

const clients = [
  '房地产开发企业',
  '建筑施工企业',
  '房地产与建筑协同经营企业',
  '参与项目收购、股权交易、资产交易的投资主体',
  '需要梳理复杂历史财税问题的企业',
]

export function About() {
  return (
    <>
      <PageIntro
        title="关于大陆财税工作室"
        lead="大陆财税工作室聚焦房地产与建筑行业财税与项目决策领域，由长期深耕行业财务管理、税务筹划、项目测算与顾问服务的资深专业人士发起。工作室坚持以实战经验为基础，以项目结果为导向，面向复杂财税场景提供更有针对性的分析、筹划与支持服务。"
      />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">工作室简介</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              工作室面向房地产与建筑产业链企业，提供税务筹划与清算、并购与项目测算、交易结构设计、财务尽职调查及复杂历史问题梳理等顾问服务。服务方式强调与项目团队协同，关注可执行方案与风险边界。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">顾问背景</h2>
            <Card className="mt-4">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                核心顾问拥有会计学本科背景及会计师职称，建筑行业财务经历始于 1990
                年，先后在建筑工程公司和涵盖房地产开发、建筑施工、物业及文化板块的集团公司长期任职，持续深耕房地产与建筑行业财务管理工作。
              </p>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">专业方向</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {directions.map((item) => (
                <li key={item}>
                  <Card className="py-4">
                    <span className="text-sm text-slate-700">{item}</span>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">工作原则</h2>
            <ul className="mt-4 space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-slate-700 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a3a5c]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">适合服务的客户</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {clients.map((c) => (
                <Card key={c}>
                  <p className="text-sm text-slate-700">{c}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
