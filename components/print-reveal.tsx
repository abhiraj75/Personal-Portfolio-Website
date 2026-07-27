'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function PrintReveal() {
  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.batch('.print-col', {
        start: 'top 88%',
        onEnter: (els) =>
          gsap.from(els, {
            y: 22,
            opacity: 0,
            duration: 0.45,
            stagger: 0.09,
            ease: 'power3.out',
            overwrite: true,
          }),
      })
    })
  })

  return null
}
