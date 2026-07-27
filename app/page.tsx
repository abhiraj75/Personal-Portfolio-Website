import { Masthead } from '@/components/masthead'
import { SiteNav } from '@/components/site-nav'
import { ComicsPage } from '@/components/comics-page'
import { PrintReveal } from '@/components/print-reveal'
import { achievements, education, links, skills } from '@/lib/content'

function SectionHead({ title, page, standfirst }: { title: string; page: string; standfirst?: string }) {
  return (
    <div className="print-col">
      <div className="flex items-end justify-between gap-4 border-b-[3px] border-ink pb-2">
        <h2 className="font-masthead text-[clamp(2rem,6vw,3.75rem)] font-black leading-none">{title}</h2>
        <p className="kicker shrink-0 pb-1 text-[11px] text-ink-soft">{page}</p>
      </div>
      <div className="mt-[3px] border-t border-ink" />
      {standfirst && <p className="mt-3 max-w-2xl text-[17px] leading-snug text-ink-soft">{standfirst}</p>}
    </div>
  )
}

export default function Page() {
  const dateline = new Date()
    .toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    .toUpperCase()

  return (
    <>
      <PrintReveal />
      <SiteNav />

      <main className="mx-auto max-w-[1400px]">
        <Masthead dateline={dateline} />

        <section id="profile" className="scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHead title="The Profile" page="Page 2" />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14">
            <div className="print-col">
              <p className="kicker mb-4 text-[11px] text-ink-soft">
                By Abhiraj Singh &middot; Staff Writer
              </p>

              <div className="text-[17px] leading-relaxed sm:columns-2 sm:gap-8 [&>p]:mb-4">
                <p className="first-letter:float-left first-letter:mr-2 first-letter:font-masthead first-letter:text-[4.2rem] first-letter:font-black first-letter:leading-[0.78] first-letter:text-press-red">
                  I am a B.Tech Computer Science student specialising in AI and ML, and I spend
                  most of my time building. I pick unfamiliar domains on purpose, because that is
                  where I learn fastest. It is how a Bitcoin transaction parser and a voice
                  pipeline for ambulance handoffs ended up in the same year of work.
                </p>
                <p>
                  Open source is where most of the real learning happens. I have contributed to
                  Learning Equality, CircuitVerse, and Learning Unlimited, working on bug fixes,
                  new features, refactoring, testing infrastructure, type systems, and language
                  migrations. The code is only half of it. Finding the right issue, working with
                  maintainers, and shipping something a real community depends on is a different
                  skill from writing code alone.
                </p>
                <p>
                  Before university I was School Captain at Army Public School, Barrackpore, which
                  taught me that leadership is mostly consistency and earned trust rather than a
                  title.
                </p>
                <p>
                  Outside tech I care about stray dog welfare and have organised vaccination
                  drives in my community. I am always up for a conversation about AI, open source,
                  or pointing software at problems that actually matter.
                </p>
              </div>
            </div>

            <aside className="print-col panel-ink self-start p-5">
              <h3 className="kicker border-b-[3px] border-ink pb-2 text-[11px]">The Record So Far</h3>
              <ul className="mt-3 space-y-3">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-ink-soft">
                    <span aria-hidden="true" className="mt-[3px] shrink-0 text-press-red">
                      &#9632;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <ComicsPage />

        <section id="almanac" className="scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHead
            title="The Almanac"
            page="Page 5"
            standfirst="What I reach for, listed the way a paper lists the markets."
          />

          <dl className="mt-8 border-t-[3px] border-ink">
            {skills.map(([category, items]) => (
              <div
                key={category}
                className="print-col grid gap-1 border-b border-ink py-3 sm:grid-cols-[minmax(140px,1fr)_4fr] sm:gap-6 sm:py-2.5"
              >
                <dt className="kicker pt-0.5 text-[11px] text-press-blue">{category}</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-1 font-stat text-[15px] text-ink">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="record" className="scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHead title="The Record" page="Page 6" />

          <div className="mt-8 space-y-6">
            {education.map((entry) => (
              <article key={entry.qualification} className="print-col border-l-[6px] border-ink pl-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-masthead text-2xl font-bold leading-tight sm:text-3xl">
                    {entry.qualification}
                  </h3>
                  <p className="kicker text-[11px] text-ink-soft">{entry.dates}</p>
                </div>
                <p className="kicker mt-1 text-xs text-press-red">{entry.place}</p>
                <p className="mt-2 max-w-3xl text-[16px] leading-snug text-ink-soft">{entry.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="classifieds" className="scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHead title="Classifieds" page="Page 8" />

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="print-col panel-ink relative p-6 sm:p-8">
              <div
                className="halftone pointer-events-none absolute inset-0 text-press-blue opacity-[0.11]"
                style={{ ['--dot' as string]: '1.6px', ['--gap' as string]: '7px' }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="kicker text-[11px] text-press-red">Situations Wanted</p>
                <h3 className="mt-2 font-masthead text-3xl font-bold leading-tight sm:text-4xl">
                  Developer seeks hard problems.
                </h3>
                <p className="mt-4 max-w-xl text-[17px] leading-snug text-ink-soft">
                  Abhiraj Singh, B.Tech Computer Science (AI/ML), Bengaluru. Builds full-stack
                  applications, AI tooling, and protocol-level software. Open to conversations
                  about internships, collaboration, and open-source work. Replies to every
                  message.
                </p>

                <a
                  href={`mailto:${links.email}`}
                  className="kicker mt-6 inline-block border-[3px] border-ink bg-ink px-5 py-3 text-xs text-paper transition-colors hover:bg-press-red"
                >
                  {links.email}
                </a>
              </div>
            </div>

            <ul className="print-col grid content-start gap-4">
              {[
                { label: 'Résumé', value: 'Read the full record', href: links.resume },
                { label: 'GitHub', value: 'github.com/abhiraj75', href: links.github },
                { label: 'LinkedIn', value: 'in/abhirajsingh27', href: links.linkedin },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel-ink flex items-baseline justify-between gap-4 p-5 transition-colors hover:bg-press-yellow"
                  >
                    <span className="kicker text-[11px] text-press-blue">{item.label}</span>
                    <span className="font-stat text-[15px]">{item.value} &#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="border-t-[3px] border-ink px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="kicker text-[11px] text-ink-soft">
              &copy; {new Date().getFullYear()} Abhiraj Singh &middot; Bengaluru
            </p>
            <p className="kicker text-[11px] text-ink-soft">
              Set in Bodoni Moda, Source Serif, Archivo Narrow &amp; Anton
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
