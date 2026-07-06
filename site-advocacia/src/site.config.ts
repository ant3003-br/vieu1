export const siteConfig = {
  name: 'Vitor Eustáquio Advocacia',
  shortName: 'Vitor Eustáquio',
  location: 'Sarzedo e Região Metropolitana de Belo Horizonte, Minas Gerais',
  whatsapp: '5531998498990',
  email: 'contato@vitoreustaquio.adv.br',
  phone: '+5531998498990',
  slogan: 'advocacia profissional com excelência',
  cta: 'Agendar',
  specialties: [
    'Direito Civil',
    'Direito do Consumidor',
    'Direito Trabalhista',
    'Direito Empresarial',
    'Direito Previdenciário',
  ],
  colors: {
    primary: '#4a6cf7',
    secondary: '#1a1a1a',
    accent: '#f7c948',
  },
  social: {
    instagram: '@vitoreu',
    youtube: '@vitoreu',
    facebook: '@vitoreu',
    tiktok: '@vitoreu',
    linkedin: '@vitoreu',
  },
  urls: {
    images: process.env.NEXT_PUBLIC_IMAGES_URL || 'https://imagens.seusite.com.br',
    instagram: 'https://instagram.com/vitoreu',
    youtube: 'https://youtube.com/@vitoreu',
    facebook: 'https://facebook.com/vitoreu',
    tiktok: 'https://tiktok.com/@vitoreu',
    linkedin: 'https://linkedin.com/in/vitoreu',
    whatsapp: `https://wa.me/5531998498990`,
  },
  hours: {
    week: 'Seg a Sex: 08h - 18h',
    saturday: 'Sáb: 08h - 12h',
  },
}

export type SiteConfig = typeof siteConfig
