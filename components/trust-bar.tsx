'use client'

import { motion } from 'motion/react'
import { Globe, FlaskConical, PackageCheck, BookOpen, Boxes, Truck } from 'lucide-react'
import { useLang } from '@/lib/lang-provider'

export function TrustBar() {
  const { tr } = useLang()

  const ITEMS = [
    { icon: Globe, label: tr.trustFocus },
    { icon: Boxes, label: tr.trustUnit },
    { icon: FlaskConical, label: tr.trustLab },
    { icon: PackageCheck, label: tr.trustFill },
    { icon: BookOpen, label: tr.trustBatch },
    { icon: Truck, label: tr.trustCatalog },
  ]

  const loop = [...ITEMS, ...ITEMS]

  return (
    <section
      aria-label="How VitaPep works"
      className="relative overflow-hidden border-y border-border/70 bg-card/60 py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max items-center gap-10 pr-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex shrink-0 items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-gold">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                {item.label}
              </span>
              <span className="ml-6 h-1 w-1 rounded-full bg-gold/50" aria-hidden />
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
