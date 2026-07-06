'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

interface GalleryImage {
  src: string
  alt?: string
  width?: number
  height?: number
}

interface MasonryGalleryProps {
  images: GalleryImage[]
  columns?: number
}

export default function MasonryGallery({ images, columns = 3 }: MasonryGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt || '',
    width: img.width || 1600,
    height: img.height || 1200,
  }))

  return (
    <>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt || 'Foto da galeria'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
      />
    </>
  )
}
