'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText, useGSAP)

export function Masthead({ dateline }: { dateline: string }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      document.fonts.ready.then(() => {
        const tl = gsap.timeline()

        SplitText.create('.nameplate', {
          type: 'chars',
          mask: 'chars',
          autoSplit: true,
          onSplit: (self) =>
            tl.from(self.chars, {
              yPercent: 115,
              stagger: 0.026,
              duration: 0.55,
              ease: 'power3.out',
            }),
        })

        tl.from(
          '.masthead-rule',
          { scaleX: 0, transformOrigin: 'left', duration: 0.5, ease: 'power2.inOut' },
          0.15,
        )
          .from('.masthead-meta', { opacity: 0, y: 8, duration: 0.4, stagger: 0.08 }, 0.3)
          .from('.splash', { opacity: 0, y: 24, duration: 0.5, ease: 'power3.out' }, 0.45)
      })
    },
    { scope: root },
  )

  return (
    <header ref={root} className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="border-y-[3px] border-ink py-1.5">
        <ul className="kicker flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] text-ink-soft sm:justify-between sm:text-[11px]">
          <li className="masthead-meta">Vol. I, No. 1</li>
          <li className="masthead-meta">{dateline}</li>
          <li className="masthead-meta">Bengaluru, India</li>
          <li className="masthead-meta hidden sm:block">Price: Free</li>
        </ul>
      </div>

      <div className="pt-6 text-center sm:pt-8">
        <p className="masthead-meta kicker text-sm tracking-[0.5em] text-press-red sm:text-base">
          The
        </p>
        <h1
          className="nameplate font-masthead font-black leading-[0.9] tracking-[-0.02em] pb-[0.28em]"
          style={{ fontSize: 'clamp(2.75rem, 12.5vw, 11rem)' }}
        >
          Abhiraj Singh
        </h1>
        <p className="masthead-meta mt-2 font-body text-sm italic text-ink-soft sm:text-base">
          All the code that&rsquo;s fit to ship
        </p>
      </div>

      <div className="masthead-rule rule-paired mt-5" />

      <article className="splash panel-ink mt-7 grid gap-0 md:grid-cols-[1.55fr_1fr]">
        <div className="relative flex flex-col justify-center p-6 sm:p-9">
          <div
            className="halftone pointer-events-none absolute inset-0 text-press-red opacity-[0.13]"
            style={{ ['--dot' as string]: '1.6px', ['--gap' as string]: '7px' }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="kicker text-[11px] text-press-red">Lead Story</p>
            <h2 className="mt-2 font-masthead text-[clamp(1.6rem,4.2vw,2.9rem)] font-bold leading-[1.05]">
              I build things that are harder than they need to be, on purpose.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-snug text-ink-soft">
              Full-stack developer working across AI, Bitcoin protocol internals, and open
              source. B.Tech Computer Science student in Bengaluru. I pick unfamiliar domains
              deliberately, which is how a raw transaction parser and a voice pipeline for
              ambulance handoffs ended up in the same year of work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="kicker border-[3px] border-ink bg-ink px-5 py-2.5 text-xs text-paper transition-colors hover:bg-press-red hover:text-paper"
              >
                Read the comics
              </a>
              <a
                href="#classifieds"
                className="kicker border-[3px] border-ink px-5 py-2.5 text-xs transition-colors hover:bg-press-yellow"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <figure className="relative border-t-[3px] border-ink md:border-l-[3px] md:border-t-0">
          <div
            className="halftone absolute inset-0 text-ink opacity-25"
            style={{ ['--dot' as string]: '2px', ['--gap' as string]: '8px' }}
            aria-hidden="true"
          />
          <Image
            src="/abhiraj.jpg"
            alt="Abhiraj Singh"
            width={1280}
            height={1280}
            priority
            className="relative h-full max-h-[420px] w-full object-cover object-top mix-blend-multiply"
          />
          <figcaption className="kicker absolute bottom-0 left-0 right-0 border-t-[3px] border-ink bg-paper px-3 py-1.5 text-[10px] text-ink-soft">
            Abhiraj Singh, photographed at home
          </figcaption>
        </figure>
      </article>
    </header>
  )
}
