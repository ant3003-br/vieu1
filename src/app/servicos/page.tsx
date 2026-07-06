import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { slugify } from '@/lib/utils'
import { HiScale, HiDocumentText, HiBriefcase, HiUserGroup, HiShieldCheck, HiArrowRight } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Serviços',
  description: `Conheça nossos serviços jurídicos: ${siteConfig.specialties.join(', ')}. ${siteConfig.name} em ${siteConfig.location}.`,
}

const icons = [HiScale, HiDocumentText, HiBriefcase, HiUserGroup, HiShieldCheck]

const descriptions: Record<string, string> = {
  'Direito Civil': 'Assessoria completa em questões de direito civil, incluindo contratos, responsabilidade civil, direito de família, sucessões, propriedade e obrigações.',
  'Direito do Consumidor': 'Proteção e defesa dos direitos do consumidor, incluindo reclamações, ações indenizatórias, revisão de contratos e cobranças abusivas.',
  'Direito Trabalhista': 'Consultoria e representação em questões trabalhistas, desde direitos e deveres de empregados e empregadores até reclamações trabalhistas e acordos.',
  'Direito Empresarial': 'Suporte jurídico para empresas, incluindo constituição, contratos societários, fusões, aquisições, compliance e contencioso empresarial.',
  'Direito Previdenciário': 'Orientação e planejamento previdenciário, aposentadorias, pensões, auxílios e benefícios do INSS, além de revisão de benefícios.',
}

const benefits: Record<string, string[]> = {
  'Direito Civil': ['Análise de contratos', 'Ações de indenização', 'Direito de família', 'Inventários', 'Usucapião'],
  'Direito do Consumidor': ['Revisão de contratos bancários', 'Ações indenizatórias', 'Cobrança indevida', 'Produtos com defeito', 'Negativação indevida'],
  'Direito Trabalhista': ['Reclamações trabalhistas', 'Acordos extrajudiciais', 'Rescisão contratual', 'Assédio moral', 'Direitos sindicais'],
  'Direito Empresarial': ['Abertura de empresas', 'Contratos empresariais', 'Recuperação judicial', 'Compliance', 'Due diligence'],
  'Direito Previdenciário': ['Aposentadoria', 'Pensão por morte', 'Auxílio-doença', 'Revisão de benefícios', 'Planejamento previdenciário'],
}

export default function ServicosPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Áreas de Atuação
            </span>
            <h1 className="section-title mt-2">Serviços Jurídicos</h1>
            <p className="section-subtitle mx-auto">
              Soluções completas nas principais áreas do direito.
            </p>
          </div>

          <div className="mt-16 grid gap-8">
            {siteConfig.specialties.map((servico, i) => {
              const Icon = icons[i % icons.length]
              return (
                <div
                  key={servico}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="grid items-start gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon size={28} />
                        </span>
                        <h2 className="font-display text-2xl font-semibold">
                          {servico}
                        </h2>
                      </div>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {descriptions[servico]}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {benefits[servico]?.map((b) => (
                          <li
                            key={b}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3 lg:items-end lg:justify-center">
                      <Link
                        href={`/servicos/${slugify(servico)}`}
                        className="btn-primary w-full sm:w-auto"
                      >
                        Saiba Mais <HiArrowRight />
                      </Link>
                      <a
                        href={`${siteConfig.urls.whatsapp}?text=Olá! Gostaria de saber mais sobre ${servico}.`}
                        target="_blank"
                        rel="nofollow noopener"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-green-500 px-6 py-3 text-sm font-medium text-green-600 transition-all hover:bg-green-50 sm:w-auto"
                      >
                        Fale sobre {servico}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
