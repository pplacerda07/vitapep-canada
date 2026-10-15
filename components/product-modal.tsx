'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X, Check, FlaskConical, AlertTriangle } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useLang } from '@/lib/lang-provider'

const ease = [0.22, 1, 0.36, 1] as const

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  const { tr } = useLang()

  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
            className="relative grid max-h-[92vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-t-4xl border border-border/70 bg-card shadow-luxe-lg sm:rounded-4xl md:grid-cols-2"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* image side */}
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cream p-6">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/40 blur-3xl" />
              <motion.img
                src={product.image}
                alt={`VitaPep Pharma ${product.name} ${product.dosage} vial`}
                className="relative h-72 w-auto object-contain drop-shadow-2xl md:h-full md:max-h-[70vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
              />
            </div>

            {/* content side */}
            <div className="flex flex-col overflow-y-auto p-6 sm:p-8">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {product.category}
              </span>
              <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">{product.tagline}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Spec label={tr.modalDosage} value={product.dosage} />
                <Spec label={tr.modalVol} value={product.volume} />
                <Spec label={tr.modalPurity} value={product.purity} />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-gradient text-cream">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <FlaskConical className="h-4 w-4 text-gold" /> {tr.modalPrep}
                </span>
              </div>

              <div className="mt-auto pt-6">
                <p className="flex items-start gap-1.5 text-[0.7rem] leading-snug text-muted-foreground">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                  {tr.modalDisclaimer}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-background px-4 py-2.5">
      <span className="text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="font-serif text-lg font-semibold">{value}</span>
    </div>
  )
}
