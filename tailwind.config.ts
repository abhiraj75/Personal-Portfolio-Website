import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'press-red': 'var(--press-red)',
        'press-blue': 'var(--press-blue)',
        'press-yellow': 'var(--press-yellow)',
      },
      fontFamily: {
        masthead: ['var(--font-bodoni)', 'Georgia', 'serif'],
        body: ['var(--font-source-serif)', 'Georgia', 'serif'],
        stat: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        sfx: ['var(--font-anton)', 'Impact', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
}
export default config
