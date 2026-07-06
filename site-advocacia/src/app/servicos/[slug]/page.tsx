import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/site.config'
import { slugify } from '@/lib/utils'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiScale, HiDocumentText, HiBriefcase, HiUserGroup, HiShieldCheck } from 'react-icons/hi'

const icons = [HiScale, HiDocumentText, HiBriefcase, HiUserGroup, HiShieldCheck]

const servicosData: Record<string, { desc: string; longDesc: string; benefits: string[] }> = {
  'direito-civil': {
    desc: 'Assessoria completa em direito civil.',
    longDesc: 'Oferecemos assessoria completa em todas as áreas do direito civil, incluindo contratos, responsabilidade civil, direito de família, sucessões, propriedade e obrigações. Nosso objetivo é proteger seus interesses com soluções jurídicas eficientes e personalizadas.',
    benefits: ['Análise de contratos', 'Ações de indenização', 'Direito de família', 'Inventários', 'Usucapião', 'Direito imobiliário'],
  },
  'direito-do-consumidor': {
    desc: 'Defesa dos direitos do consumidor.',
    longDesc: 'Atuamos na proteção e defesa dos direitos do consumidor, incluindo reclamações, ações indenizatórias, revisão de contratos e cobranças abusivas. Buscamos garantir que seus direitos sejam respeitados nas relações de consumo.',
    benefits: ['Revisão de contratos bancários', 'Ações indenizatórias', 'Cobrança indevida', 'Produtos com defeito', 'Negativação indevida', 'Plano de saúde'],
  },
  'direito-trabalhista': {
    desc: 'Consultoria e representação trabalhista.',
    longDesc: 'Prestamos consultoria e representação em questões trabalhistas, desde direitos e deveres de empregados e empregadores até reclamações trabalhistas e acordos. Atuamos tanto na defesa de empregados quanto de empresas.',
    benefits: ['Reclamações trabalhistas', 'Acordos extrajudiciais', 'Rescisão contratual', 'Assédio moral', 'Direitos sindicais', 'Acidente de trabalho'],
  },
  'direito-empresarial': {
    desc: 'Suporte jurídico para empresas.',
    longDesc: 'Oferecemos suporte jurídico completo para empresas, incluindo constituição, contratos societários, fusões, aquisições, compliance e contencioso empresarial. Auxiliamos seu negócio a crescer com segurança jurídica.',
    benefits: ['Abertura de empresas', 'Contratos empresariais', 'Recuperação judicial', 'Compliance', 'Due diligence', 'Contratos societários'],
  },
  'direito-previdenciario': {
    desc: 'Orientação e planejamento previdenciário.',
    longDesc: 'Oferecemos orientação e planejamento previdenciário completo, incluindo aposentadorias, pensões, auxílios e benefícios do INSS, além de revisão de benefícios para garantir o melhor resultado possível.',
    benefits: ['Aposentadoria', 'Pensão por morte', 'Auxílio-doença', 'Revisão de benefícios', 'Planejamento previdenciário', 'Benefício de prestação continuada'],
  },
}

export function generateStaticParams() {
  return siteConfig.specialties.map((s) => ({ slug: slugify(s) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const servico = Object.entries(servicosData).find(([key]) => key === params.slug)
  if (!servico) return {}
  const nome = siteConfig.specialties.find((s) => slugify(s) === params.slug) || params.slug
  return {
    title: nome,
    description: `${servico[1].desc} - ${siteConfig.name} em ${siteConfig.location}.`,
  }
}

export default function ServicoSlugPage({ params }: { params: { slug: string } }) {
  const servico = Object.entries(servicosData).find(([key]) => key === params.slug)
  if (!servico) notFound()

  const nome = siteConfig.specialties.find((s) => slugify(s) === params.slug) || params.slug
  const i = siteConfig.specialties.findIndex((s) => slugify(s) === params.slug)
  const Icon = icons[Math.max(0, i % icons.length)]
  const [, data] = servico

  return (
    <section className="relative pt-32 pb-20">
      <div className="container-custom">
        <Link
          href="/servicos"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
        >
          <HiArrowLeft /> Voltar para Serviços
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={32} />
              </span>
              <div>
                <h1 className="font-display text-3xl font-bold sm:text-4xl">{nome}</h1>
              </div>
            </div>
            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              {data.longDesc}
            </p>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold">Como Podemos Ajudar</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-secondary p-8 text-white">
              <h3 className="font-display text-xl font-semibold">Agende uma Consulta</h3>
              <p className="mt-3 text-gray-400">
                Entre em contato e descubra como podemos ajudar no seu caso.
              </p>
              <a
                href={`${siteConfig.urls.whatsapp}?text=Olá! Gostaria de agendar uma consulta sobre ${nome}.`}
                target="_blank"
                rel="nofollow noopener"
                className="btn-accent mt-6 inline-flex w-full items-center justify-center gap-3"
              >
                <FaWhatsapp size={20} />
                Fale Conosco
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-display text-lg font-semibold">Outros Serviços</h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.specialties
                  .filter((s) => slugify(s) !== params.slug)
                  .slice(0, 4)
                  .map((s) => (
                    <li key={s}>
                      <Link
                        href={`/servicos/${slugify(s)}`}
                        className="flex items-center justify-between text-gray-600 transition-colors hover:text-primary"
                      >
                        {s} <HiArrowRight />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
