/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'imagens.seusite.com.br',
      'cdn.sanity.io',
      'cdn.builder.io',
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig
