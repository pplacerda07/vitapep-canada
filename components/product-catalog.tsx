'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PRODUCTS, CATEGORIES, type Product } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ProductModal } from '@/components/product-modal'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/lang-provider'

type Filter = 'all' | (typeof CATEGORIES)[number]

export function ProductCatalog() {
  const { tr } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Product | null>(null)

  const filters: Filter[] = ['all', ...CATEGORIES]

  const visible = useMemo(
    () => (filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="catalogue" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground">
            {tr.catalogTag.toUpperCase()}
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {tr.catalogTitle.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient-gold">{tr.catalogTitle.split(' ').at(-1)}</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {tr.catalogDesc}
          </p>
        </Reveal>

        {/* filters */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300',
                filter === f
                  ? 'text-cream'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="catalog-filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gold-gradient shadow-luxe"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <span
                className={cn(
                  'absolute inset-0 -z-20 rounded-full border transition-colors',
                  filter === f ? 'border-transparent' : 'border-border bg-card',
                )}
              />
              {f === 'all' ? tr.catalogAll : f}
            </button>
          ))}
        </Reveal>

        {/* grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} onSelect={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
