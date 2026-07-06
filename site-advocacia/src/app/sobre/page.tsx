import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import { FaWhatsapp } from 'react-icons/fa'
import { HiScale, HiDocumentText, HiBriefcase, HiUserGroup, HiShieldCheck } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Sobre',
  description: `Conheça a história do ${siteConfig.name}. Advocacia profissional com excelência em ${siteConfig.location}.`,
}

const values = [
  {
    icon: HiScale,
    title: 'Ética',
    desc: 'Compromisso inabalável com a ética profissional e a justiça.',
  },
  {
    icon: HiDocumentText,
    title: 'Transparência',
    desc: 'Comunicação clara e transparente com nossos clientes.',
  },
  {
    icon: HiBriefcase,
    title: 'Excelência',
    desc: 'Padrão de qualidade em cada serviço prestado.',
  },
  {
    icon: HiUserGroup,
    title: 'Dedicação',
    desc: 'Atendimento personalizado focado nas necessidades de cada cliente.',
  },
  {
    icon: HiShieldCheck,
    title: 'Confiança',
    desc: 'Relação construída com base na confiança e resultados.',
  },
]

export default function SobrePage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Quem Somos
              </span>
              <h1 className="section-title mt-2">{siteConfig.name}</h1>
              <p className="section-subtitle">
                Escreva sua história aqui. Compartilhe sua trajetória, formação acadêmica,
                experiência profissional e a filosofia que guia seu escritório.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Com atuação em Sarzedo e Região Metropolitana de Belo Horizonte,
                o escritório {siteConfig.name} oferece serviços jurídicos de excelência
                nas áreas de Direito Civil, Consumidor, Trabalhista, Empresarial e Previdenciário.
              </p>
              <a
                href={siteConfig.urls.whatsapp}
                target="_blank"
                rel="nofollow noopener"
                className="btn-accent mt-8 inline-flex items-center gap-3"
              >
                <FaWhatsapp size={20} />
                Agende uma Consulta
              </a>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/about-large.jpg"
                alt={`Dr. ${siteConfig.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Nossos Valores</h2>
            <p className="section-subtitle mx-auto">
              Princípios que guiam nossa atuação profissional.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon size={28} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
