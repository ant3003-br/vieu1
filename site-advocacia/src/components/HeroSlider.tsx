'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/site.config'
import { cn } from '@/lib/utils'

interface Slide {
  url: string
  alt: string
}

const slides: Slide[] = [
  { url: '/hero/pc/slide1.jpg', alt: 'Escritório de advocacia' },
  { url: '/hero/pc/slide2.jpg', alt: 'Equipe jurídica' },
  { url: '/hero/pc/slide3.jpg', alt: 'Justiça e direito' },
]

const mobileSlides: Slide[] = [
  { url: '/hero/mobile/slide1.jpg', alt: 'Escritório de advocacia' },
  { url: '/hero/mobile/slide2.jpg', alt: 'Equipe jurídica' },
  { url: '/hero/mobile/slide3.jpg', alt: 'Justiça e direito' },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const activeSlides = isMobile && mobileSlides.length > 0 ? mobileSlides : slides

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <Image
            src={activeSlides[current].url}
            alt={activeSlides[current].alt}
            fill
            className="animate-ken-burns object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex h-full items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
              {siteConfig.location}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200 sm:text-xl">
              {siteConfig.slogan}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.urls.whatsapp}
                target="_blank"
                rel="nofollow noopener"
                className="btn-accent text-lg"
              >
                {siteConfig.cta}
              </a>
              <a
                href="/sobre"
                className="btn-outline text-lg"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {activeSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-500',
              i === current ? 'w-12 bg-accent' : 'w-3 bg-white/50 hover:bg-white/80'
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
