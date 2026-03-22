import { Card } from '../components/ui/Card'
import { PageIntro } from '../components/ui/PageIntro'

type Block = {
  title: string
  /** 简短定位（部分服务项） */
  positioning?: string
  scenarios: string[]
  problems: string[]
  deliverables: string[]
  /** 补充说明（部分服务项） */
  note?: string
  /** 锚点 id，便于站内链接 */
  anchorId?: string
}

const blocks: Block[] = [
  {
    title: '税务筹划与清算',
    scenarios: [
      '房地产开发项目税务优化',
      '土地增值税清算前准备',
      '企业所得税处理复杂项目',
      '融资利息、拆迁费用、预提费用等重点事项梳理',
    ],
    problems: [
      '税负结构不清晰，缺少分阶段、分税种的筹划路径',
      '清算口径与成本归集、收入确认之间存在偏差风险',
      '重点事项（利息、拆迁、预提等）证据链与会计税务处理不一致',
    ],
    deliverables: [
      '项目税负与风险点梳理报告（阶段版 / 清算前版）',
      '税筹路径与合规边界说明，配套账务与备查建议',
      '清算前准备清单：资料、测算模型与对内协同要点',
    ],
  },
  {
    title: '项目收购测算与投资判断',
    scenarios: [
      '拟收购房地产项目',
      '项目公司股权 / 资产收购方案比较',
      '重大投资前收益与风险判断',
    ],
    problems: [
      '缺少与交易结构匹配的现金流与利润测算',
      '对或有负债、土地与工程成本、税务承继等风险识别不足',
      '多方案比较缺少统一假设与敏感性分析',
    ],
    deliverables: [
      '收购测算模型与关键假设说明',
      '股权 / 资产路径下的税负与综合成本比较',
      '投资收益、资金峰值与主要风险清单，供决策参考',
    ],
  },
  {
    title: '股权与资产交易结构设计',
    scenarios: ['股权转让、资产转让、重组分立等交易前方案论证', '合作开发、分阶段退出等复杂安排'],
    problems: [
      '交易路径导致重复征税或税负不均衡',
      '对价支付、承债安排与后续运营衔接不清晰',
      '尽调与协议条款未能有效覆盖财税风险',
    ],
    deliverables: [
      '可选交易结构对比及税负、合规性说明',
      '协议关键财税条款建议（与律师协同）',
      '交割前后账务、税务与资金衔接要点',
    ],
  },
  {
    title: '财务尽职调查',
    scenarios: ['收并购、重大合作、引入投资方前的财务尽调', '项目接盘、债权债务复杂情形下的专项核实'],
    problems: [
      '报表与项目台账、合同履约、税务申报之间勾稽不清',
      '成本完整性、收入确认与税务风险未形成闭环',
    ],
    deliverables: [
      '财务尽调发现分类：财务、税务、资金与运营配合问题',
      '风险等级与可量化影响（在资料允许范围内）',
      '交易谈判与协议层面的应对建议方向',
    ],
  },
  {
    title: '项目全周期财务管理支持',
    scenarios: [
      '立项',
      '成本核算对象确定',
      '预算',
      '资金管理',
      '付款控制',
      '销售数据审核',
      '财务分析',
      '项目清算',
    ],
    problems: [
      '各阶段财务数据与工程、销售、成本口径不统一',
      '资金计划与付款节奏、税务节点不同步',
      '缺乏面向项目总体的利润预测与动态分析',
    ],
    deliverables: [
      '成本对象与核算指引、预算与滚动预测模板',
      '资金与付款审批要点、销售回款与涉税数据核对机制',
      '阶段性财务分析报告与清算阶段收口方案',
    ],
  },
  {
    title: '复杂问题专项介入',
    scenarios: ['历史遗留账务与税务处理', '稽查应对与争议事项', '多主体、跨项目分摊与调整'],
    problems: [
      '资料缺失、责任主体不清，难以形成可接受的解决方案',
      '问题交织（税务、法律、工程），缺少统筹视角',
    ],
    deliverables: [
      '问题清单与事实梳理、可行路径与优先级',
      '分步骤整改与沟通策略（含对内对外口径）',
      '需要时配合企业对接税务、审计与法务资源',
    ],
  },
  {
    anchorId: 'ai-digital',
    title: 'AI与数字化财税支持',
    positioning:
      '以专业判断为前提，以数字化工具为辅助，提升财税资料整理、项目测算、风险识别与管理汇报效率。',
    scenarios: [
      '财税资料量大，整理和提炼效率低',
      '项目测算资料复杂，人工比对成本高',
      '风险点分散，缺少结构化梳理方法',
      '管理层汇报准备耗时，表达效率不足',
      '财务团队希望提升数字化工具使用能力',
      '企业希望探索 AI 在财税场景中的可落地应用',
    ],
    problems: [
      '帮助企业将资料整理、分析辅助、风险梳理、报告表达等工作流程更高效地结构化，减少低价值重复劳动，提升财税支持效率与沟通质量。',
    ],
    deliverables: [
      '财税资料结构化整理框架',
      '项目测算辅助分析模板',
      '风险点清单化梳理方案',
      '财税分析表达模板优化',
      '管理汇报材料结构优化建议',
      '智能工具在财税场景中的应用建议',
    ],
    note:
      '我们更关注的是「如何用工具提升效率」，而不是「为了 AI 而 AI」。在房地产与建筑行业中，复杂问题仍然需要经验判断、政策理解和项目逻辑支撑，数字化与智能工具的价值，在于帮助专业能力更快、更清晰、更稳定地输出。',
  },
]

function ListBlock({
  label,
  items,
}: {
  label: string
  items: string[]
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">{label}</h4>
      <ul className="mt-2 space-y-2">
        {items.map((x) => (
          <li key={x} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
            {x}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Services() {
  return (
    <>
      <PageIntro
        title="服务领域"
        lead="大陆财税工作室围绕房地产与建筑行业常见的复杂财税问题，为企业提供从筹划、测算、尽调到清算、决策支持的专项服务。服务重点不在「泛财务咨询」，而在于围绕项目与交易本身，帮助企业降低税负、控制风险、优化结构、提高决策质量。"
      />

      <section className="border-t border-line bg-canvas py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-5 sm:px-8 lg:px-10">
          {blocks.map((b) => (
            <Card key={b.title} id={b.anchorId} className="scroll-mt-28">
              <h3 className="border-b border-line pb-4 text-lg font-semibold text-primary">{b.title}</h3>
              {b.positioning && (
                <p className="mt-4 text-sm leading-relaxed text-muted">{b.positioning}</p>
              )}
              <div className="mt-6 grid gap-8 lg:grid-cols-3">
                <ListBlock label="适用场景" items={b.scenarios} />
                <ListBlock label="解决的问题" items={b.problems} />
                <ListBlock label="可交付内容" items={b.deliverables} />
              </div>
              {b.note && (
                <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">{b.note}</p>
              )}
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
