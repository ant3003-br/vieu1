import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/site.config'
import { slugify } from '@/lib/utils'
import MasonryGallery from '@/components/MasonryGallery'
import { HiArrowLeft } from 'react-icons/hi'

interface Props {
  params: { categoria: string }
}

const galleryData: Record<string, string[]> = {
  'direito-civil': Array.from({ length: 12 }, (_, i) => `/portfolio/civil/galeria-${i + 1}.jpg`),
  'direito-do-consumidor': Array.from({ length: 10 }, (_, i) => `/portfolio/consumidor/galeria-${i + 1}.jpg`),
  'direito-trabalhista': Array.from({ length: 10 }, (_, i) => `/portfolio/trabalhista/galeria-${i + 1}.jpg`),
  'direito-empresarial': Array.from({ length: 8 }, (_, i) => `/portfolio/empresarial/galeria-${i + 1}.jpg`),
  'direito-previdenciario': Array.from({ length: 8 }, (_, i) => `/portfolio/previdenciario/galeria-${i + 1}.jpg`),
}

export function generateStaticParams() {
  return siteConfig.specialties.map((s) => ({ categoria: slugify(s) }))
}

export function generateMetadata({ params }: Props): Metadata {
  const nome = siteConfig.specialties.find((s) => slugify(s) === params.categoria)
  if (!nome) return {}
  return {
    title: `Portfólio - ${nome}`,
    description: `Galeria de fotos - ${nome}. ${siteConfig.name} em ${siteConfig.location}.`,
  }
}

export default function CategoriaPage({ params }: Props) {
  const nome = siteConfig.specialties.find((s) => slugify(s) === params.categoria)
  if (!nome) notFound()

  const images = (galleryData[params.categoria] || []).map((src, i) => ({
    src,
    alt: `${nome} - ${i + 1}`,
  }))

  return (
    <section className="relative pt-32 pb-20">
      <div className="container-custom">
        <Link
          href="/portfolio"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
        >
          <HiArrowLeft /> Voltar para Portfólio
        </Link>

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portfólio
          </span>
          <h1 className="section-title mt-2">{nome}</h1>
          <p className="section-subtitle mx-auto">
            Galeria de fotos e casos relacionados a {nome.toLowerCase()}.
          </p>
        </div>

        <div className="mt-12">
          {images.length > 0 ? (
            <MasonryGallery images={images} />
          ) : (
            <div className="rounded-2xl bg-gray-50 py-20 text-center">
              <p className="text-gray-500">
                Galeria em atualização. Em breve mais fotos disponíveis.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
