import { useEffect, useCallback } from 'react'
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react'
import type { GalleryImage } from '../../data/gallery'

interface LightboxProps {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index]

  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  )
  const goNext = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [goPrev, goNext, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${image.alt}`}
      className="fixed inset-0 z-100 flex items-center justify-center bg-espresso/95 p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-cream-text transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light sm:right-6 sm:top-6"
      >
        <X size={22} aria-hidden />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
        aria-label="Previous photo"
        className="absolute left-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-cream-text transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light sm:left-6"
      >
        <CaretLeft size={22} aria-hidden />
      </button>

      <figure
        className="flex max-h-[85vh] max-w-4xl flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
        />
        <figcaption className="text-center text-sm text-cream-text-soft">{image.alt}</figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
        aria-label="Next photo"
        className="absolute right-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-cream-text transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light sm:right-6"
      >
        <CaretRight size={22} aria-hidden />
      </button>
    </div>
  )
}
