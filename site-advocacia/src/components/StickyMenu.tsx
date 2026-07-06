'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { siteConfig } from '@/site.config'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
]

export default function StickyMenu() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <span
            className={cn(
              'font-display text-xl font-bold transition-colors duration-300',
              scrolled ? 'text-secondary' : 'text-white'
            )}
          >
            {siteConfig.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-accent',
                scrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.urls.whatsapp}
            target="_blank"
            rel="nofollow noopener"
            className="btn-accent text-sm"
          >
            {siteConfig.cta}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={cn(
            'z-50 md:hidden',
            scrolled ? 'text-secondary' : 'text-white'
          )}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-secondary/98"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-white transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.urls.whatsapp}
              target="_blank"
              rel="nofollow noopener"
              className="btn-accent mt-4"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
