import { MetadataRoute } from 'next'
import { siteConfig } from '@/site.config'
import { slugify } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.seusite.com.br'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicos`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const servicePages = siteConfig.specialties.map((s) => ({
    url: `${baseUrl}/servicos/${slugify(s)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const portfolioPages = siteConfig.specialties.map((s) => ({
    url: `${baseUrl}/portfolio/${slugify(s)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...portfolioPages]
}
