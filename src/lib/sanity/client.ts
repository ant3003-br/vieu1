import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'seu-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

export async function getServices() {
  return client.fetch(`*[_type == "servico"] | order(order asc) {
    _id, title, slug, description, icon, category, image, "imageUrl": image.asset->url
  }`)
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(`*[_type == "servico" && slug.current == $slug][0] {
    _id, title, slug, description, icon, category, image, "imageUrl": image.asset->url, content
  }`, { slug })
}

export async function getGalleries() {
  return client.fetch(`*[_type == "galeria"] | order(order asc) {
    _id, title, slug, category, coverImage, "coverUrl": coverImage.asset->url, description
  }`)
}

export async function getGalleryByCategory(category: string) {
  return client.fetch(`*[_type == "galeria" && category == $category][0] {
    _id, title, slug, category, coverImage, "coverUrl": coverImage.asset->url, description,
    images[] { "url": asset->url, caption }
  }`, { category })
}

export async function getClients() {
  return client.fetch(`*[_type == "cliente"] | order(name asc) {
    _id, name, slug, password, files
  }`)
}

export async function getClientBySlug(slug: string) {
  return client.fetch(`*[_type == "cliente" && slug.current == $slug][0] {
    _id, name, slug, password, files
  }`, { slug })
}
