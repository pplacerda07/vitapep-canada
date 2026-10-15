'use client'

import { ScanLine, ShieldCheck, FlaskConical, Sparkles, Users, Package } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/lib/lang-provider'

export function WhyVitaPep() {
  const { tr } = useLang()

  const PILLARS = [
    { icon: FlaskConical, title: tr.whyCard1Title, text: tr.whyCard1Desc },
    { icon: ScanLine, title: tr.whyCard2Title, text: tr.whyCard2Desc },
    { icon: ShieldCheck, title: tr.whyCard3Title, text: tr.whyCard3Desc },
    { icon: Sparkles, title: tr.whyCard4Title, text: tr.whyCard4Desc },
    { icon: Users, title: tr.whyCard5Title, text: tr.whyCard5Desc },
    { icon: Package, title: tr.whyCard6Title, text: tr.whyCard6Desc },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground">
              {tr.whyTag.toUpperCase()}
            </span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {tr.whyTitle}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {tr.whyDesc}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => {
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
          </Reveal>

          {/* Real facility image collage */}
          <Reveal delay={0.1} className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="col-span-2 overflow-hidden rounded-3xl border border-border/70 shadow-luxe">
              <img
                src="/factory/tanks.jpg"
                alt="Stainless steel processing columns"
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-luxe">
              <img
                src="/factory/operator-mixing.jpg"
                alt="Operator in cleanroom gear during a preparation step"
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-luxe">
              <img
                src="/factory/water-system.jpg"
                alt="Water purification system with control panel"
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
