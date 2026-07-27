'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'projects', label: 'Comics' },
  { id: 'almanac', label: 'Almanac' },
  { id: 'record', label: 'Record' },
  { id: 'classifieds', label: 'Classifieds' },
]

export function SiteNav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
    >
      <ul className="mx-auto flex h-[var(--nav-h)] max-w-[1400px] items-center gap-1 overflow-x-auto px-3 sm:justify-center sm:gap-2 sm:px-6">
        {SECTIONS.map(({ id, label }) => (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`kicker block px-2.5 py-1.5 text-[11px] transition-colors sm:px-3 ${
                active === id
                  ? 'bg-ink text-paper'
                  : 'text-ink-soft hover:bg-press-yellow hover:text-ink'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
