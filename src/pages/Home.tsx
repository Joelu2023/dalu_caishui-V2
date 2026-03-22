import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

const heroTags = [
  '房地产财税筹划',
  '土地增值税 / 企业所得税清算',
  '项目收购测算',
  '交易结构设计',
  '财务尽职调查',
  '建筑与地产协同财务管理',
]

const problemCards = [
  '房地产项目税负较高，缺少系统筹划路径',
  '土地增值税与企业所得税处理复杂，清算压力大',
  '收购项目缺少可靠测算，投资判断依据不足',
  '股权或资产交易结构不合理，增加成本与税负',
  '历史遗留财税问题复杂，缺少有经验的人梳理',
  '房地产与建筑协同中，利润测算、付款控制、资金流向和税务规划难以统筹',
]

const coreServices = [
  '税务筹划与清算',
  '项目收购测算与投资判断',
  '股权与资产交易结构设计',
  '财务尽职调查',
  '项目全周期财务管理支持',
  '复杂历史问题处理',
]

const whyUs = [
  {
    title: '长期深耕行业',
    body:
      '工作室核心顾问长期深耕建筑与房地产行业，对建筑会计核算、房地产项目财务管理、税务筹划和重大项目财务决策有长期积累。',
  },
  {
    title: '重项目，不只讲理论',
    body:
      '曾参与多个房地产项目税务筹划与清算，也参与股权及资产收购结构设计、并购测算、尽调与重大财务决策支持，更关注结果和落地。',
  },
  {
    title: '懂财税，也懂协同经营',
    body:
      '除税务与财务本身外，也关注开发、工程、销售、人事、材料、分包、资金流向与利润测算之间的配合关系。',
  },
]

const lectureCards = [
  '企业财务管理',
  '企业税务管理',
  '建筑及房地产行业税务稽查重点及如何应对',
  '构建企业利益共同体',
  'AI与数字化工具在财税管理中的辅助应用',
]

const digitalCards = [
  {
    title: '财税资料结构化整理',
    body:
      '围绕项目资料、税务资料、财务底稿和清算资料，建立更清晰的分类、归档与提炼方式，减少重复整理成本。',
  },
  {
    title: '项目测算辅助分析',
    body:
      '通过数字化工具与结构化模板，提升项目收购测算、税负测算、收益判断和关键数据比对效率。',
  },
  {
    title: '风险点清单化识别',
    body:
      '将复杂财税事项转化为可梳理、可检查、可复核的风险点清单，帮助企业更早发现问题、明确重点。',
  },
  {
    title: '报告与汇报材料优化',
    body:
      '提升财税分析、项目测算结论和管理层汇报材料的表达效率，让复杂问题更容易被理解和决策。',
  },
]

export function Home() {
  return (
    <>
      {/* Hero — 米白主背景，留白充足 */}
      <section className="relative bg-canvas">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-accent/35 sm:w-1 sm:bg-accent/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <h1 className="max-w-2xl text-3xl font-semibold leading-[1.25] tracking-tight text-primary sm:text-4xl lg:text-[2.45rem]">
            大陆财税工作室
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-secondary sm:text-xl">
            专注房地产与建筑行业财税筹划、清算与项目决策支持
          </p>
          <p className="mt-8 max-w-3xl text-[15px] leading-[1.85] text-muted sm:text-base">
            依托长期房地产与建筑行业财务实战经验，聚焦税务筹划、项目清算、并购测算、交易结构设计、财务尽职调查与复杂财税问题处理，为企业提供稳健、专业、可落地的顾问支持。
          </p>
          <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-muted/90 sm:text-sm">
            以专业判断为基础，探索数字化与智能工具对财税工作的效率赋能。
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {heroTags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-line bg-surface px-3 py-1.5 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink to="/services" variant="primary">
              查看服务领域
            </ButtonLink>
            <ButtonLink to="/about" variant="outline">
              了解工作室
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              联系咨询
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 问题 */}
      <section className="border-t border-line bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Problems"
            title="我们能帮助企业解决什么问题"
            subtitle="在房地产与建筑行业中，很多问题并不只是会计处理问题，而往往同时涉及税务规划、项目利润测算、资金安排、交易结构设计、开发成本归集、跨部门配合以及清算阶段的风险控制。大陆财税工作室关注的，不是单点账务，而是围绕项目全周期，为企业降低税负、控制风险、提升决策质量提供支持。"
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((text) => (
              <li key={text}>
                <Card className="h-full border-l-[3px] border-l-accent/70">
                  <p className="text-sm leading-[1.8] text-foreground">{text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 核心服务 */}
      <section className="border-t border-line bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Services" title="核心服务领域" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((name, i) => (
              <Card key={name}>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line bg-surface text-xs font-medium tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{name}</h3>
                    <Link
                      to="/services"
                      className="mt-3 inline-block text-sm text-muted underline-offset-4 transition hover:text-primary hover:underline"
                    >
                      了解详情
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 数字化与智能财税应用（辅助能力，不喧宾夺主） */}
      <section className="border-t border-line bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Digital enablement"
            title="数字化与智能财税应用"
            subtitle="在复杂财税场景中，专业判断始终是核心。与此同时，数字化工具与智能方法也正在帮助企业提升资料整理效率、测算分析效率、风险识别效率和报告表达效率。大陆财税工作室关注的，不是概念化的「AI包装」，而是如何让智能工具真正服务于财税管理和项目决策。"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {digitalCards.map((item) => (
              <Card key={item.title}>
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.85] text-muted">{item.body}</p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl border-t border-line pt-10 text-center text-sm leading-[1.9] text-muted">
            智能工具不能替代专业经验，但可以放大专业经验的效率价值。对于房地产与建筑行业这类复杂场景，真正重要的仍然是行业理解、项目判断与财税逻辑，工具的价值在于辅助，而不是替代。
          </p>
          <p className="mt-8 text-center">
            <Link
              to="/services#ai-digital"
              className="text-sm text-primary underline-offset-4 transition hover:text-accent hover:underline"
            >
              在服务领域中查看「AI与数字化财税支持」→
            </Link>
          </p>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="border-t border-line bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Why us" title="为什么选择我们" align="center" />
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
            {whyUs.map((item) => (
              <Card key={item.title} className="text-center md:text-left">
                <div className="mx-auto mb-4 h-px w-10 bg-accent/50 md:mx-0" />
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.85] text-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 授课与专题 */}
      <section className="border-t border-line bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Lectures & Research" title="授课与专题" />
            <div className="flex shrink-0 gap-6 text-sm">
              <Link
                to="/lectures"
                className="text-primary underline-offset-4 transition hover:text-accent hover:underline"
              >
                授课分享 →
              </Link>
              <Link
                to="/research"
                className="text-primary underline-offset-4 transition hover:text-accent hover:underline"
              >
                专题研究 →
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {lectureCards.map((title) => (
              <Card key={title}>
                <p className="text-sm font-medium text-primary">{title}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  详细内容可在「授课分享」「专题研究」页面后续接入文章与案例后展示。
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 合作方式 */}
      <section className="border-t border-line bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Cooperation"
            title="合作方式"
            subtitle="根据企业项目特点与实际需求，可提供项目制顾问、阶段性返聘支持、专项财税问题介入，也可根据企业安排提供更深入的驻场或定向支持。"
          />
          <div className="mt-12 flex justify-center">
            <ButtonLink to="/cooperation" variant="ghost" className="inline-flex min-w-[200px]">
              查看合作模式说明
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 联系咨询 — 局部深色块，非全屏深蓝 */}
      <section className="border-t border-line bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="联系咨询"
            subtitle="如您正在寻找熟悉房地产与建筑行业特点、能够理解项目逻辑并提供财税筹划与决策支持的专业顾问，欢迎联系交流。"
            align="center"
            onDark
          />
          <div className="mt-12 flex justify-center">
            <ButtonLink to="/contact" variant="outline" className="!border-surface/40 !bg-transparent !text-surface hover:!border-surface hover:!bg-surface/10">
              前往联系页面
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
