'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ACCENTS = [
  'bg-press-red',
  'bg-press-blue',
  'bg-press-red',
  'bg-press-blue',
  'bg-press-yellow',
  'bg-press-red',
  'bg-press-blue',
  'bg-press-red',
  'bg-press-blue',
] as const

const PIN_RATIO = 0.78

export function ComicsPage() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLOListElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
          mobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)',
        },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean; mobile: boolean }
          const panels = gsap.utils.toArray<HTMLElement>('.panel')

          const assemble = (panel: HTMLElement, trigger: ScrollTrigger.Vars) =>
            gsap
              .timeline({ scrollTrigger: trigger })
              .from(panel, {
                y: 40,
                rotation: gsap.utils.random(-2.5, 2.5),
                duration: 0.42,
                ease: 'power3.out',
              })
              .from(
                panel.querySelector('.sfx'),
                { scale: 0, rotation: -24, duration: 0.38, ease: 'back.out(2.6)' },
                '-=0.14',
              )
              .from(
                panel.querySelector('.bubble'),
                { scale: 0.4, y: 14, opacity: 0, duration: 0.34, ease: 'back.out(2.2)' },
                '-=0.22',
              )

          if (desktop) {
            const distance = () => (track.current?.scrollWidth ?? 0) - window.innerWidth
            const navH = () =>
              parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0

            const scrollTween = gsap.to(track.current, {
              x: () => -distance(),
              ease: 'none', 
              scrollTrigger: {
                trigger: root.current,
                pin: true,
                scrub: 0.6,
                start: () => `top ${navH()}px`,
                end: () => '+=' + distance() * PIN_RATIO,
                invalidateOnRefresh: true,
              },
            })

            panels.forEach((panel) =>
              assemble(panel, {
                containerAnimation: scrollTween,
                trigger: panel,
                start: 'left 88%',
                toggleActions: 'play none none reverse',
              }),
            )

            const onFocus = (e: FocusEvent) => {
              const panel = (e.target as HTMLElement).closest('.panel') as HTMLElement | null
              const st = scrollTween.scrollTrigger
              if (!panel || !st || !distance()) return
              const progress = panel.offsetLeft / distance()
              window.scrollTo({
                top: st.start + progress * (st.end - st.start),
                behavior: 'instant' as ScrollBehavior,
              })
            }
            track.current?.addEventListener('focusin', onFocus)
            return () => track.current?.removeEventListener('focusin', onFocus)
          }

          panels.forEach((panel) =>
            assemble(panel, {
              trigger: panel,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }),
          )
        },
      )
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="projects"
      aria-labelledby="comics-heading"
      className="comics-section relative border-y-[3px] border-ink bg-paper lg:h-[calc(100svh-var(--nav-h))] lg:overflow-hidden"
    >
      <div className="flex items-end justify-between border-b-[3px] border-ink px-5 pb-2 pt-5 sm:px-8">
        <h2
          id="comics-heading"
          className="font-masthead text-4xl font-black leading-none sm:text-6xl"
        >
          The Comics
        </h2>
        <p className="kicker hidden text-[11px] text-ink-soft sm:block">
          Nine strips &middot; Sunday Edition
        </p>
      </div>

      <div className="comics-band lg:flex lg:h-[calc(100svh-var(--nav-h)-9rem)] lg:items-center">
        <ol
          ref={track}
          className="comics-track flex flex-col gap-8 px-5 py-8 sm:px-8 lg:w-max lg:flex-row lg:items-stretch lg:gap-7 lg:px-[6vw] lg:py-0"
        >
          {projects.map((p, i) => {
            const accent = ACCENTS[i % ACCENTS.length]
            return (
              <li
                key={p.slug}
                className="panel panel-ink relative flex flex-col lg:h-[70svh] lg:w-[min(74vw,505px)] lg:shrink-0"
              >
                <div
                  className={`relative flex h-40 shrink-0 items-center justify-center overflow-hidden border-b-[3px] border-ink lg:h-[38%] ${accent}`}
                >
                  <div
                    className="halftone absolute inset-0 text-ink opacity-40"
                    style={{ ['--dot' as string]: '2px', ['--gap' as string]: '8px' }}
                    aria-hidden="true"
                  />
                  <span
                    className="sfx relative font-sfx text-5xl uppercase tracking-tight text-paper sm:text-6xl"
                    style={{
                      transform: 'rotate(-6deg)',
                      WebkitTextStroke: '2.5px var(--ink)',
                      paintOrder: 'stroke fill',
                    }}
                    aria-hidden="true"
                  >
                    {p.sfx}
                  </span>

                  <span className="kicker absolute left-3 top-3 text-[11px] text-ink">
                    Panel {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="bubble relative mx-4 -mt-5 border-[3px] border-ink bg-paper px-4 py-2.5">
                  <p className="font-stat text-[15px] font-bold uppercase leading-tight text-ink">
                    {p.bubble}
                  </p>
                  <span
                    className="absolute -bottom-[13px] left-7 h-0 w-0 border-l-[14px] border-r-0 border-t-[13px] border-l-transparent border-t-ink"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="kicker text-[11px] text-press-red">{p.kicker}</p>
                  <h3 className="mt-1 font-masthead text-2xl font-bold leading-tight sm:text-[28px]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-snug text-ink-soft lg:overflow-hidden">
                    {p.description}
                  </p>

                  {p.stats && (
                    <dl className="mt-3 flex gap-5 border-y border-ink py-2">
                      {p.stats.map(([label, value]) => (
                        <div key={label}>
                          <dt className="kicker text-[9px] text-ink-soft">{label}</dt>
                          <dd className="font-stat text-[15px] font-bold leading-tight text-press-blue">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="kicker border border-ink px-1.5 py-0.5 text-[10px] text-ink-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {(p.repo || p.demo) && (
                    <div className="mt-4 flex gap-4 border-t-[3px] border-ink pt-3">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kicker text-xs underline decoration-2 underline-offset-4 hover:text-press-red"
                        >
                          Source &#8599;
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kicker text-xs underline decoration-2 underline-offset-4 hover:text-press-red"
                        >
                          Live demo &#8599;
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <p className="kicker border-t-[3px] border-ink px-5 py-2 text-[11px] text-ink-soft sm:px-8">
        Page 4 &middot; The Sunday Edition
      </p>
    </section>
  )
}
