'use client'

import { Mail, AlertTriangle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { NAV_LINKS, CONTACT } from '@/lib/site'
import { useLang } from '@/lib/lang-provider'

export function SiteFooter() {
  const { tr } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/70 bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-20" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {tr.footerTagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-serif text-sm font-semibold">{tr.footerLinks}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-serif text-sm font-semibold">{tr.footerContact}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gold" />
                  {CONTACT.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-border/70 bg-background p-5">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>
              <strong className="font-semibold text-foreground">
                {tr.footerNotice}
              </strong>{' '}
              {tr.footerDisclaimer}
            </span>
          </p>
        </div>

        <div className="mt-8 border-t border-border/70 pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} VitaPep Pharma. {tr.footerRights}
          </p>
        </div>
      </div>
    </footer>
  )
}
