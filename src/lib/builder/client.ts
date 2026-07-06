export const BUILDER_PUBLIC_KEY = process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY || ''

export async function getBuilderContent(model: string, options?: Record<string, string>) {
  if (!BUILDER_PUBLIC_KEY) return null

  try {
    const params = new URLSearchParams({
      apiKey: BUILDER_PUBLIC_KEY,
      ...options,
    })
    const res = await fetch(
      `https://cdn.builder.io/api/v3/content/${model}?${params}`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.results?.[0] || null
  } catch {
    return null
  }
}
