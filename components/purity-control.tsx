'use client'

import { Droplets, ScanLine, Snowflake, ClipboardCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/lib/lang-provider'

export function PurityControl() {
  const { tr } = useLang()

  const PILLARS = [
    { icon: Droplets, title: tr.purityPillar1Title, text: tr.purityPillar1Desc },
    { icon: ScanLine, title: tr.purityPillar2Title, text: tr.purityPillar2Desc },
    { icon: Snowflake, title: tr.purityPillar3Title, text: tr.purityPillar3Desc },
    { icon: ClipboardCheck, title: tr.purityPillar1Title, text: tr.purityPillar1Desc },
  ]

  return (
    <section id="purity" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gold-soft/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          {/* media grid */}
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 overflow-hidden rounded-3xl border border-border/70 shadow-luxe">
                <img
                  src="/factory/aseptic-isolator.jpg"
                  alt="Aseptic filling line with glass isolator"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-luxe">
                <video
                  className="aspect-square w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/factory/operator-control.jpg"
                  aria-label="Cleanroom production process video"
                >
                  <source src="/factory/production-workshop.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {tr.purityTag}
                </span>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-luxe">
                <video
                  className="aspect-square w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/factory/freeze-dryer.jpg"
                  aria-label="Freeze-drying and filling process video"
                >
                  <source src="/factory/production-workshop-2.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* copy + pillars */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground">
                {tr.purityTag.toUpperCase()}
              </span>
              <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {tr.purityTitle1}{' '}
                <span className="text-gradient-gold">{tr.purityTitle2}</span>.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {tr.purityPillar1Desc}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PILLARS.slice(0, 3).map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="group h-full rounded-3xl border border-border/70 bg-card p-5 shadow-luxe transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe-lg">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-gradient text-cream shadow-luxe transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-serif text-base font-semibold">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {pillar.text}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
