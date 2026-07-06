import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import { slugify } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: `Conheça nosso portfólio de casos e resultados. ${siteConfig.name} em ${siteConfig.location}.`,
}

interface PortfolioItem {
  category: string
  image: string
  count: number
}

const portfolioItems: PortfolioItem[] = siteConfig.specialties.map((cat, i) => ({
  category: cat,
  image: `/portfolio/${slugify(cat)}.jpg`,
  count: Math.floor(Math.random() * 20) + 5,
}))

export default function PortfolioPage() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nosso Trabalho
          </span>
          <h1 className="section-title mt-2">Portfólio de Casos</h1>
          <p className="section-subtitle mx-auto">
            Conheça alguns dos casos que marcaram nossa trajetória.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link
              key={item.category}
              href={`/portfolio/${slugify(item.category)}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sm text-accent">{item.count} casos</span>
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
