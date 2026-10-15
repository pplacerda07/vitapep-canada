'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { ArrowDownRight } from 'lucide-react'
import { useLang } from '@/lib/lang-provider'

export function CtaBanner() {
  const { tr } = useLang()

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-border/70 bg-ink px-6 py-14 text-center shadow-luxe-lg sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-x-0 top-0 h-px gold-hairline" />
              <div className="absolute inset-x-0 bottom-0 h-px gold-hairline" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-cream/80">
                {tr.catalogTag.toUpperCase()}
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
                {tr.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-cream/70">
                {tr.ctaDesc}
              </p>
              <a
                href="#catalogue"
                className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-cream shadow-luxe transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe-lg"
              >
                {tr.heroBtn}
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
