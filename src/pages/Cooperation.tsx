import { Card } from '../components/ui/Card'
import { PageIntro } from '../components/ui/PageIntro'

const modes = [
  {
    title: '项目制顾问',
    body:
      '围绕具体项目或交易，从筹划、测算、方案论证到资料准备与对内协同，按项目目标与阶段划分工作范围与交付。',
  },
  {
    title: '阶段性返聘',
    body:
      '在企业关键阶段（如清算前、并购谈判期、融资或稽查应对期）提供阶段性深度支持，与内部团队并行推进。',
  },
  {
    title: '专项问题介入',
    body:
      '针对明确的财税问题或历史遗留事项，快速厘清事实与可选路径，输出可执行步骤与风险提示。',
  },
  {
    title: '灵活支持方式',
    body:
      '在双方协商一致前提下，可讨论驻场、定向沟通频率、与第三方机构协同等方式，以匹配企业节奏与保密要求。',
  },
]

export function Cooperation() {
  return (
    <>
      <PageIntro
        title="合作方式"
        lead="根据企业项目特点与实际需求，大陆财税工作室可提供灵活的合作方式。重点不在「标准化套餐」，而在于围绕企业当前最关键的问题，提供更匹配的支持路径。"
      />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {modes.map((m) => (
              <Card key={m.title}>
                <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-sm text-slate-500">
            具体合作范围、时间与费用方式，建议在初步沟通与需求确认后，以书面约定为准。
          </p>
        </div>
      </section>
    </>
  )
}
