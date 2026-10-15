'use client'

import { motion } from 'motion/react'
import { Dna, Atom, LineChart, FlaskConical } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/lib/lang-provider'

export function PeptideScience() {
  const { tr } = useLang()

  const POINTS = [
    { icon: Dna, title: tr.scienceCard1Title, text: tr.scienceCard1Desc },
    { icon: Atom, title: tr.scienceCard2Title, text: tr.scienceCard2Desc },
    { icon: LineChart, title: tr.scienceCard3Title, text: tr.scienceCard3Desc },
  ]

  return (
    <section id="science" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-border/70 shadow-luxe-lg">
            <img
              src="/factory/cleanroom.jpg"
              alt="Pharmaceutical production cleanroom"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60" />
            <motion.div
              className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-80 w-80 rounded-full bg-gold/25 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-cream/80">
                  {tr.scienceTag.toUpperCase()}
                </span>
                <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
                  {tr.scienceTitle.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="text-gradient-gold">
                    {tr.scienceTitle.split(' ').slice(-2).join(' ')}
                  </span>
                </h2>
                <p className="mt-5 max-w-lg text-pretty leading-relaxed text-cream/70">
                  {tr.scienceDesc}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {POINTS.map((point, i) => {
                  const Icon = point.icon
                  return (
                    <Reveal key={i} delay={0.1 + i * 0.08}>
                      <div className="flex items-start gap-4 rounded-2xl border border-cream/15 bg-cream/5 p-5 backdrop-blur transition-colors duration-300 hover:bg-cream/10">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-cream shadow-luxe">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-serif text-base font-semibold text-cream">
                            {point.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-cream/65">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
                <p className="mt-2 flex items-center gap-2 text-xs text-cream/50">
                  <FlaskConical className="h-3.5 w-3.5 text-gold" />
                  {tr.modalDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
