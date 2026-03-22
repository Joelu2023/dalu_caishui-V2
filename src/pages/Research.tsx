import { Card } from '../components/ui/Card'
import { PageIntro } from '../components/ui/PageIntro'

const columns = [
  {
    title: '企业财务管理制度与资金管理',
    desc:
      '围绕制度框架、授权与审批、资金计划与头寸管理、项目台账与财务分析衔接等方向，沉淀可落地的管理要点，服务房地产与建筑企业的项目型经营。',
  },
  {
    title: '建筑企业税务规划',
    desc:
      '关注增值税进销项匹配、分包与甲供、跨区域涉税事项、所得税与成本核算协同等建筑企业常见场景，强调合规前提下的结构优化与风险前置。',
  },
  {
    title: '房地产公司税务规划',
    desc:
      '聚焦开发节奏、收入确认、成本归集、土增税与企业所得税关键节点，帮助企业在项目全周期内形成连续的财税判断与资料准备。',
  },
  {
    title: '税务稽查重点与应对',
    desc:
      '结合行业检查重点与项目特点，梳理证据链、会计处理与申报口径的一致性，形成应对思路与内部复盘要点，减少被动与重复问题。',
  },
  {
    title: '财税数字化与智能应用观察',
    desc:
      '围绕数字化工具与智能方法在财税资料整理、项目测算、风险识别、报告表达和流程优化等环节中的应用进行观察与探索，关注其在企业真实场景中的可用性、效率价值与使用边界。',
  },
]

export function Research() {
  return (
    <>
      <PageIntro
        title="专题研究"
        lead="工作室在项目顾问服务之外，也持续围绕企业财务管理、税务规划、税务稽查应对、财税数字化与房地产及建筑行业协同经营等方向，进行经验沉淀与专题研究。专题内容以实战问题为出发点，更注重可执行性，而不是空泛理论。"
      />

      <section className="border-t border-line bg-canvas py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <p className="mb-10 max-w-3xl text-sm text-muted">
            以下为专题栏目规划。后续可接入文章列表、PDF 摘要或案例索引。
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {columns.map((c) => (
              <Card key={c.title}>
                <h3 className="text-lg font-semibold text-primary">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.desc}</p>
                <p className="mt-6 text-xs text-muted/70">内容更新敬请期待</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
