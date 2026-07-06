import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi'
import { siteConfig } from '@/site.config'
import { slugify } from '@/lib/utils'

const categoryImages: Record<string, string> = {
  'Direito Civil': '/portfolio/civil.jpg',
  'Direito do Consumidor': '/portfolio/consumidor.jpg',
  'Direito Trabalhista': '/portfolio/trabalhista.jpg',
  'Direito Empresarial': '/portfolio/empresarial.jpg',
  'Direito Previdenciário': '/portfolio/previdenciario.jpg',
}

export default function CategoryGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {siteConfig.specialties.map((category) => (
        <Link
          key={category}
          href={`/servicos/${slugify(category)}`}
          className="group relative overflow-hidden rounded-2xl bg-gray-100"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={categoryImages[category] || '/placeholder.jpg'}
              alt={category}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display text-xl font-semibold text-white">
              {category}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>Saiba mais</span>
              <HiArrowRight />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
