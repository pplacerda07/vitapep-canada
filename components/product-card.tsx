'use client'

import { motion } from 'motion/react'
import { Plus } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useLang } from '@/lib/lang-provider'

const ease = [0.22, 1, 0.36, 1] as const

export function ProductCard({
  product,
  onSelect,
}: {
  product: Product
  onSelect: (p: Product) => void
}) {
  const { tr } = useLang()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
      transition={{ duration: 0.5, ease }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-luxe transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe-lg"
    >
      <button
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`View details of ${product.name}`}
        className="relative aspect-[4/5] w-full overflow-hidden"
      >
        {/* soft radial glow behind the vial */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-gold-soft/25 blur-3xl transition-all duration-500 group-hover:h-64 group-hover:w-64 group-hover:bg-gold-soft/40" />
        </div>
        <img
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} ${product.dosage} vial`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-card/85 px-3 py-1 text-[0.65rem] font-semibold text-muted-foreground backdrop-blur-sm">
          {product.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="order-2 sm:order-1">
            <h3 className="font-serif text-lg font-semibold leading-tight sm:text-xl">
              {product.name}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{product.tagline}</p>
          </div>
          <span className="order-1 w-fit shrink-0 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground sm:order-2">
            {product.dosage}
          </span>
        </div>

        <div className="mt-4 sm:mt-5">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Plus className="h-4 w-4" />
            {tr.catalogView}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
