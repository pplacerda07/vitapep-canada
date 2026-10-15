'use client'

import { MapPin, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PARTNERS } from '@/lib/site'
import { useLang } from '@/lib/lang-provider'

export function Facilities() {
  const { tr } = useLang()

  const FACILITIES = [
    {
      flag: '🇨🇳',
      country: PARTNERS.china.country,
      tag: `${tr.facilitiesSince} ${PARTNERS.china.since}`,
      name: PARTNERS.china.name,
      role: tr.facilitiesStep1Title,
      text: tr.facilitiesStep1Desc,
      image: '/factory/water-tanks.jpg',
      imageAlt: 'Stainless steel tanks at the raw material supplier in China',
    },
    {
      flag: '🇨🇦',
      country: PARTNERS.canada.country,
      tag: tr.facilitiesTag,
      name: PARTNERS.canada.name,
      role: tr.facilitiesStep4Title,
      text: tr.facilitiesStep4Desc,
      image: '/factory/operator-mixing.jpg',
      imageAlt: 'Preparation area at the VitaPep laboratory in Canada',
    },
  ]

  return (
    <section id="facilities" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground">
            {tr.facilitiesTag.toUpperCase()}
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {tr.facilitiesTitle.split(',')[0]},{' '}
            <span className="text-gradient-gold">{tr.facilitiesTitle.split(',')[1]?.trim()}</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {tr.facilitiesDesc}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.country} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-4xl border border-border/70 bg-card shadow-luxe transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    <span className="text-base leading-none">{f.flag}</span>
                    {f.country}
                  </span>
                  <span className="absolute right-5 top-5 inline-flex items-center rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold text-cream shadow-sm">
                    {f.tag}
                  </span>
                  <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-sm font-medium text-cream">
                    <MapPin className="h-4 w-4 text-gold" />
                    {f.role}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-balance font-serif text-xl font-semibold leading-snug">
                    {f.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-3xl border border-border/70 bg-secondary/40 px-6 py-4 text-sm">
            <span className="text-lg leading-none">🇨🇦</span>
            <p className="text-muted-foreground">
              {tr.facilitiesStrip}{' '}
              <span className="font-semibold text-foreground">{tr.trustBatch.toLowerCase()}</span>.
            </p>
            <ArrowUpRight className="ml-auto h-4 w-4 text-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
