'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/lang-provider'

export function Faq() {
  const { tr } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground">
            {tr.faqTag.toUpperCase()}
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {tr.faqTitle.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient-gold">{tr.faqTitle.split(' ').at(-1)}</span>
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {tr.faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={cn(
                    'overflow-hidden rounded-3xl border bg-card transition-colors duration-300',
                    isOpen ? 'border-gold/50 shadow-luxe' : 'border-border/70',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-serif text-base font-semibold sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-gold transition-transform duration-300',
                        isOpen && 'rotate-45 bg-gold-gradient text-cream',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
