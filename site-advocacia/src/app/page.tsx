import HeroSlider from '@/components/HeroSlider'
import CategoryGrid from '@/components/CategoryGrid'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import { HiArrowRight, HiShieldCheck, HiScale, HiBriefcase, HiUserGroup, HiDocumentText } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const icons = [HiScale, HiDocumentText, HiBriefcase, HiUserGroup, HiShieldCheck]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Nossas Especialidades</h2>
            <p className="section-subtitle mx-auto">
              Soluções jurídicas completas nas mais diversas áreas do direito.
            </p>
          </div>
          <div className="mt-12">
            <CategoryGrid />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sobre Nós</span>
              <h2 className="section-title mt-2">{siteConfig.name}</h2>
              <p className="section-subtitle">
                Atuamos com excelência em Sarzedo e Região Metropolitana de Belo Horizonte,
                oferecendo serviços jurídicos personalizados e de alta qualidade.
              </p>
              <ul className="mt-8 space-y-4">
                {siteConfig.specialties.map((s, i) => {
                  const Icon = icons[i % icons.length]
                  return (
                    <li key={s} className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={20} />
                      </span>
                      <span className="text-gray-700">{s}</span>
                    </li>
                  )
                })}
              </ul>
              <Link href="/sobre" className="btn-primary mt-8">
                Conheça Nossa História <HiArrowRight />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/about.jpg"
                alt="Escritório Vitor Eustáquio Advocacia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white">
            Precisa de Assistência Jurídica?
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            Entre em contato conosco e agende uma consulta.
          </p>
          <a
            href={siteConfig.urls.whatsapp}
            target="_blank"
            rel="nofollow noopener"
            className="btn-accent mt-8 inline-flex items-center gap-3 text-lg"
          >
            <FaWhatsapp size={22} />
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
