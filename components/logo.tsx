import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/vitapep-logo-h.png"
      alt="VitaPep Pharma"
      className={cn('h-10 w-auto select-none', className)}
    />
  )
}
