'use client'

import { motion } from 'motion/react'
import { ShieldCheck, FlaskConical, ArrowDownRight } from 'lucide-react'
import { useLang } from '@/lib/lang-provider'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { tr } = useLang()

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold-soft/25 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground shadow-sm backdrop-blur"
          >
            VITAPEP PHARMA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {tr.heroTitle1}{' '}
            <span className="text-gradient-gold">{tr.heroTitle2}</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {tr.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8"
          >
            <a
              href="#catalogue"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-cream shadow-luxe transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxe-lg"
            >
              {tr.heroBtn}
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-12 grid w-full max-w-lg grid-cols-3 gap-4"
          >
            {[
              { value: tr.heroStatLabVal, label: tr.heroStatLab },
              { value: tr.heroStatOriginVal, label: tr.heroStatOrigin },
              { value: tr.heroStatOpVal, label: tr.heroStatOp },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="font-serif text-2xl font-semibold text-gradient-gold sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Featured vial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-border/70 shadow-luxe-lg">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-gold-soft/35 blur-3xl" />
            </div>
            <motion.img
              src="/products/reta.webp"
              alt="VitaPep Pharma Retatrutide 15mg research peptide vial"
              className="absolute left-0 w-full object-cover will-change-transform"
              style={{ height: 'calc(100% + 28px)', marginTop: -14 }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="absolute left-5 top-5 flex items-center gap-2.5 rounded-2xl border border-border/70 bg-card/85 px-4 py-2.5 shadow-luxe backdrop-blur"
            >
              <ShieldCheck className="h-5 w-5 text-gold" />
              <div className="leading-tight">
                <p className="text-sm font-semibold">{tr.trustBatch}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.72, ease }}
              className="absolute bottom-5 right-5 flex items-center gap-2.5 rounded-2xl border border-border/70 bg-card/85 px-4 py-2.5 shadow-luxe backdrop-blur"
            >
              <FlaskConical className="h-5 w-5 text-gold" />
              <div className="leading-tight">
                <p className="text-sm font-semibold">Research use only</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
