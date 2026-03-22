import { Card } from '../components/ui/Card'
import { PageIntro } from '../components/ui/PageIntro'

const lectures = [
  {
    title: '企业财务管理',
    audience: '企业高管、财务负责人、项目财务及相关部门负责人',
    content: [
      '财务职能定位与项目型企业的管理要点',
      '预算、资金计划与经营节奏的配合',
      '财务分析如何服务业务决策',
    ],
    scenes: ['企业内训', '研讨分享', '专项交流'],
  },
  {
    title: '企业税务管理',
    audience: '财务、税务岗位人员及业务条线需要理解税务逻辑的管理者',
    content: [
      '日常税务管理流程与关键资料留存',
      '常见税种在企业经营中的衔接点',
      '政策更新与内部宣贯机制',
    ],
    scenes: ['企业内训', '研讨分享', '专项交流'],
  },
  {
    title: '建筑及房地产行业税务稽查重点及如何应对',
    audience: '房地产与建筑企业财务、税务及管理层',
    content: [
      '行业稽查关注方向与典型问题',
      '证据链、账务处理与申报口径一致性',
      '应对组织与复盘改进',
    ],
    scenes: ['企业内训', '研讨分享', '专项交流'],
  },
  {
    title: '构建企业利益共同体',
    audience: '企业股东、核心管理团队',
    content: [
      '激励与约束相容的制度逻辑',
      '项目制企业下的利益绑定方式',
      '与财务、税务可持续性的关系',
    ],
    scenes: ['企业内训', '研讨分享', '专项交流'],
  },
  {
    title: 'AI与数字化工具在财税管理中的辅助应用',
    audience: '财务负责人、税务管理人员、财务团队、管理层、希望提升财税工作效率的企业团队',
    content: [
      'AI 在资料整理中的辅助应用',
      '数字化工具在项目测算中的辅助价值',
      '财税风险点识别的结构化方法',
      '管理汇报材料的表达优化',
      '财税数字化工具的应用边界与注意事项',
    ],
    scenes: ['企业内训', '财务团队能力升级分享', '数字化转型交流', '财税专题研讨'],
  },
]

export function Lectures() {
  return (
    <>
      <PageIntro
        title="授课分享"
        lead="大陆财税工作室除项目顾问服务外，也可结合企业管理需求，提供专题授课、内部分享与专项交流。授课内容以行业实战案例为基础，强调政策、项目场景与执行问题的结合。"
      />

      <section className="border-t border-line bg-canvas py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-5 sm:px-8 lg:px-10">
          {lectures.map((L) => (
            <Card key={L.title}>
              <h3 className="text-lg font-semibold text-primary">{L.title}</h3>
              <div className="mt-6 grid gap-8 lg:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">适合对象</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{L.audience}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">核心内容</h4>
                  <ul className="mt-2 space-y-2">
                    {L.content.map((line) => (
                      <li key={line} className="text-sm text-muted">
                        · {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">使用场景</h4>
                  <p className="mt-2 text-sm text-muted">{L.scenes.join(' / ')}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
