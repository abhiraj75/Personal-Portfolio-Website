# Personal Portfolio Website

Portfolio of Abhiraj Singh, built as a vintage Sunday broadsheet where the paper is the
shell and the projects are the comics page.

**[View live site](https://abhiraj-portfolio-website.vercel.app/)**

## Design

- **Newspaper shell** — broadsheet grid, Bodoni Moda nameplate, dateline strip, paired
  hairline rules, bylines and section headers
- **Comic content** — projects live in ink-bordered panels with speech bubbles and SFX
  stamps, framed as a Sunday comics page
- **One shared texture** — halftone dots, used as newsprint tooth at 4px and as comic
  shading at 8px, driven by a single CSS class

## The Comics Page

The signature section. On desktop it pins and scrolls horizontally, revealing nine
project panels left to right with a staggered assembly, one SFX stamp and one speech
bubble per panel. Below 1024px the same panels stack vertically with no pinning.

Under `prefers-reduced-motion` the pin, the smooth scroll, and every reveal are skipped,
and the strip collapses to the vertical stack. All content stays in the DOM and in the
accessibility tree at all times, so keyboard and screen-reader access are unaffected by
the motion layer.

## Built with

- [Next.js](https://nextjs.org/) 16, App Router, fully static
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) with ScrollTrigger and SplitText
- [Lenis](https://lenis.darkroom.engineering/) for smooth scroll, feeding ScrollTrigger
- Deployed on [Vercel](https://vercel.com/)

## Running locally

```bash
npm install
npm run dev
```

Content lives in `lib/content.ts`. Projects, skills, education, and links are all edited
from that one file.
