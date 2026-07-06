import Link from 'next/link'
import Image from 'next/image'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok, FaLinkedinIn } from 'react-icons/fa'
import { siteConfig } from '@/site.config'

const socialIcons = [
  { icon: FaInstagram, href: siteConfig.urls.instagram, label: 'Instagram' },
  { icon: FaYoutube, href: siteConfig.urls.youtube, label: 'YouTube' },
  { icon: FaFacebook, href: siteConfig.urls.facebook, label: 'Facebook' },
  { icon: FaTiktok, href: siteConfig.urls.tiktok, label: 'TikTok' },
  { icon: FaLinkedinIn, href: siteConfig.urls.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-display text-xl font-bold">{siteConfig.shortName}</span>
            </div>
            <p className="mb-6 text-gray-400">{siteConfig.slogan}</p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-accent hover:text-secondary"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-semibold">Navegação</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/servicos', label: 'Serviços' },
                { href: '/portfolio', label: 'Portfólio' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-semibold">Especialidades</h3>
            <ul className="space-y-3">
              {siteConfig.specialties.map((s) => (
                <li key={s}>
                  <Link
                    href={`/servicos/${s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                    className="text-gray-400 transition-colors hover:text-accent"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-semibold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiPhone className="mt-1 text-accent" size={18} />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-gray-400 transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="mt-1 text-accent" size={18} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="mt-1 text-accent" size={18} />
                <span className="text-gray-400">{siteConfig.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <HiClock className="mt-1 text-accent" size={18} />
                <span className="text-gray-400">
                  {siteConfig.hours.week}<br />{siteConfig.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>&copy; {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>
            Feito com dedicação para sua melhor experiência.
          </p>
        </div>
      </div>
    </footer>
  )
}
