'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/site.config'

export default function WhatsAppButton() {
  return (
    <AnimatePresence>
      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        href={siteConfig.urls.whatsapp}
        target="_blank"
        rel="nofollow noopener"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </AnimatePresence>
  )
}
