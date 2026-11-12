export type Project = {
  slug: string
  title: string
  kicker: string
  description: string
  tech: string[]
  repo: string | null
  demo: string | null
  stats?: [string, string][]
  sfx: string
  bubble: string
}

export const projects: Project[] = [
  {
    slug: 'ems-voice-pcr',
    title: '108 EMS: Voice PCR',
    kicker: 'Voice AI / Healthcare',
    description:
      "A voice copilot for India's 108 ambulances. A live agent interviews the paramedic in Hindi or English, fills the patient care report, and reads back what it wrote. Every value links to the exact words it came from, and fixed rules, not the model, raise the alarms, like a drug the patient is allergic to.",
    tech: ['React', 'FastAPI', 'WebSockets', 'Gnani STT/TTS', 'Groq'],
    repo: 'https://github.com/abhiraj75/ems_voice_pcr',
    demo: 'https://ems-voice-pcr.vercel.app',
    stats: [
      ['Field accuracy', '97%'],
      ['Live agent', '92%'],
      ['Critical alerts', '4/4'],
    ],
    sfx: 'TRANSMIT!',
    bubble: "Say it out loud. I'll fill the form.",
  },
  {
    slug: 'debugx',
    title: 'DebugX',
    kicker: 'AI Tooling',
    description:
      "Practice problems that fight back. Runs your code, tells you where it broke and why, then walks the execution step by step. Tracks what you have actually retained with streaks and a heatmap, not just what you have clicked through.",
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Gemini', 'Firebase'],
    repo: 'https://github.com/abhiraj75/DebugX',
    demo: 'https://debugxfrontend.vercel.app',
    sfx: 'COMPILE!',
    bubble: "Your code broke. Here's exactly where, and why.",
  },
  {
    slug: 'speaker-claim-agent',
    title: 'Speaker Claim Agent',
    kicker: 'Agents / Evals',
    description:
      'Fact-checks AI-written product answers: every checkable claim gets marked supported, contradicted or unknown against a product catalogue, with the facts cited. The model picks sentence numbers and Python computes the quotes, so every span matches the source exactly, and instructions planted in the answers are never followed.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI', 'Evals'],
    repo: 'https://github.com/abhiraj75/speaker-claim-agent',
    demo: null,
    stats: [
      ['Extraction F1', '1.000'],
      ['Joint F1', '0.992'],
      ['Claims', '376'],
    ],
    sfx: 'VERIFY!',
    bubble: 'Sounds right. Is it, though?',
  },
  {
    slug: 'redhanded',
    title: 'RedHanded',
    kicker: 'Coding Agents',
    description:
      "A coding agent that can't ship a fix it hasn't proven. You describe a change and it opens the issue, reproduces the bug with a failing check in a sandbox, makes the fix, and opens a PR with the evidence attached. Nothing merges until a human approves. It is tested against kora-store, a demo shop with a pricing bug planted for it to find.",
    tech: ['TrueForge', 'GitHub MCP', 'Daytona', 'Agent Skills'],
    repo: 'https://github.com/abhiraj75/RedHanded',
    demo: null,
    sfx: 'GOTCHA!',
    bubble: 'Caught it. Proved it. Fixed it.',
  },
  {
    slug: 'saas-support-agent',
    title: 'SaaS Support Agent',
    kicker: 'Agents',
    description:
      "A support agent that decides which tool a question needs before it answers, and holds the thread across turns so users don't repeat themselves. Routing is the hard part, because a confident answer from the wrong tool is worse than no answer at all.",
    tech: ['FastAPI', 'PostgreSQL', 'Gemini', 'Docker'],
    repo: 'https://github.com/abhiraj75/SaaS_support_agent',
    demo: null,
    sfx: 'ROUTE!',
    bubble: "Ask anything. I'll pick the right tool.",
  },
  {
    slug: 'chain-lens',
    title: 'Chain Lens',
    kicker: 'Bitcoin Protocol',
    description:
      'Reads raw Bitcoin blocks and transactions byte by byte and explains what is inside them. No library does the parsing: SegWit witness structure, address derivation, and fee analysis are implemented straight against the protocol spec.',
    tech: ['Python', 'Flask', 'Bitcoin Protocol', 'SegWit'],
    repo: 'https://github.com/abhiraj75/Chain-Lens-Bitcoin',
    demo: null,
    sfx: 'DECODE!',
    bubble: 'Every byte accounted for.',
  },
  {
    slug: 'btc-predictor',
    title: 'BTC Next-Hour Predictor',
    kicker: 'Quant / Simulation',
    description:
      'Forecasts Bitcoin’s next hour as a range, not a number. Geometric Brownian motion driven by FIGARCH volatility and Student-t shocks, ten thousand runs per prediction. Across 720 backtested hourly predictions the 95% interval held 95.1% of the time: the stated confidence is the real confidence.',
    tech: ['Python', 'Streamlit', 'Monte Carlo', 'FIGARCH', 'Binance API'],
    repo: 'https://github.com/abhiraj75/BTC-predictor',
    demo: 'https://btc-predictor-abhiraj.streamlit.app/',
    stats: [
      ['Coverage', '95.1%'],
      ['Mean width', '$1,188'],
      ['Predictions', '720'],
    ],
    sfx: 'SIMULATE!',
    bubble: 'Ten thousand futures. One hour ahead.',
  },
  {
    slug: 'coin-smith',
    title: 'Coin Smith',
    kicker: 'Bitcoin Protocol',
    description:
      'The other half of a wallet: pick which coins to spend, work out the fee, build the PSBT. Four coin-selection strategies and two-pass fee math, because the fee depends on transaction size and the size depends on which coins you picked, so the numbers have to settle before you can sign.',
    tech: ['Python', 'Flask', 'Bitcoin Protocol', 'BIP-174'],
    repo: 'https://github.com/abhiraj75/Coin-Smith-Bitcoin',
    demo: null,
    sfx: 'FORGE!',
    bubble: 'Pick the coins. Do the fee math. Sign it.',
  },
  {
    slug: 'gift-picker-dapp',
    title: 'Gift Picker Lottery DApp',
    kicker: 'Web3 / Solidity',
    description:
      'A lottery with no operator to trust. Entry and winner selection both happen on-chain on the Flare Coston2 testnet, so the draw is something anyone can verify rather than something someone promises.',
    tech: ['Solidity', 'React', 'Next.js', 'wagmi'],
    repo: 'https://github.com/abhiraj75/web3-giftpicker-dapp',
    demo: null,
    sfx: 'DRAW!',
    bubble: 'Nobody picks the winner. The chain does.',
  },
  {
    slug: 'nova-studio',
    title: 'Nova Studio',
    kicker: 'Full Stack',
    description:
      'A full-stack site for a digital agency: a server-rendered landing page with services, a filterable portfolio and a contact form, plus a protected admin panel to manage them. Content lives in Postgres and analytics events in MongoDB, and the page and the API share one data layer, so there is a single source of truth for every query.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'MongoDB'],
    repo: 'https://github.com/abhiraj75/NovaStudio',
    demo: 'https://abhiraj-nova-studio.vercel.app',
    sfx: 'LAUNCH!',
    bubble: 'Front of house and back office.',
  },
  {
    slug: 'gaming-stats',
    title: 'Gaming Stats Dashboard',
    kicker: 'Data / Dashboards',
    description:
      'Game statistics, trends, and search across the RAWG catalogue, rendered as interactive charts instead of raw rows. A database that big is useless until you can see the shape of it.',
    tech: ['Node.js', 'Express', 'JavaScript', 'Chart.js'],
    repo: 'https://github.com/abhiraj75/Main-Esports-Dashboard',
    demo: 'https://main-esports-dashboard.onrender.com/',
    sfx: 'PLOT!',
    bubble: 'Thousands of titles. One chart.',
  },
  {
    slug: 'cyber-dodge',
    title: 'Cyber Dodge',
    kicker: 'Arcade',
    description:
      'A retro arcade survival game: dodge, survive, watch it speed up. Hand-rolled collision detection and a difficulty curve that keeps ramping, with high scores that persist between sessions.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Service Workers'],
    repo: 'https://github.com/abhiraj75/Dodge-The-Blocks',
    demo: 'https://abhiraj-dodge.netlify.app/',
    sfx: 'DODGE!',
    bubble: "One more run. You'll beat it this time.",
  },
]

export const skills: [string, string[]][] = [
  ['Languages', ['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'Solidity']],
  ['AI & LLMs', ['Agentic Tool Calling', 'Structured Outputs', 'Evals', 'Prompt Injection Defence', 'Speech-to-Text']],
  ['Frontend', ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Streamlit', 'Chart.js']],
  ['Backend', ['FastAPI', 'Node.js', 'Express', 'Django', 'Flask', 'SQLAlchemy', 'WebSockets']],
  ['Data', ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Firebase']],
  ['ML & Analysis', ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Monte Carlo', 'Time Series']],
  ['Tools', ['Git', 'Docker', 'pytest', 'Vercel', 'Render']],
]

export const experience = [
  {
    title: 'AI Engineering Intern',
    place: 'Aatra · Remote',
    dates: 'Jul 2026 to Sep 2026',
    note: 'Built a production system that tracks tax-law changes across all 50 US states for SaaS companies: rate changes, taxability shifts and nexus updates. Designed the Postgres schema behind per-state data adapters, and diff-based change detection that classifies every change (rate up or down, taxability flip, new tax, rescission) before it reaches the customer-facing report.',
  },
  {
    title: 'Open Source Contributor',
    place: 'Sugar Labs, Learning Equality, Kiwix, krkn, RISC-V, CircuitVerse, Learning Unlimited',
    dates: '2025 to Present',
    note: "Bug fixes, features, refactoring and migrations across Python, Go, JavaScript, TypeScript and Vue codebases, shipped through code review with maintainers on large production projects.",
  },
]

export const education = [
  {
    title: 'B.Tech, Computer Science & Engineering (AI/ML)',
    place: 'Polaris School of Technology',
    dates: '2025 to 2029',
    note: 'Coursework in Python, full-stack web development, data structures and algorithms, the mathematics of machine learning, and database systems.',
  },
  {
    title: 'Class XII, CBSE',
    place: 'Army Public School, Barrackpore',
    dates: 'Apr 2024 to Mar 2025',
    note: '91% overall, with 97 in Computer Science and 95 in English Literature. School Captain, leading the student council and running workshops, campaigns, and cultural events.',
  },
]

export const achievements = [
  'Merit scholarship worth ₹7,00,000 and a MacBook Pro, awarded for academic excellence',
  'AI Engineering Intern at Aatra, building a tax-law change tracker for all 50 US states',
  'Open-source contributor to Sugar Labs, Learning Equality, Kiwix, krkn, RISC-V and CircuitVerse',
  '91% in Class XII (CBSE), with 97 in Computer Science',
  'School Captain and student council lead, Army Public School, Barrackpore',
  'Organised community vaccination drives for stray dog welfare',
]

export const links = {
  email: 'itsabhiraj27@gmail.com',
  github: 'https://github.com/abhiraj75',
  linkedin: 'https://www.linkedin.com/in/abhirajsingh27/',
  resume: 'https://docs.google.com/document/d/1MNLO8-Utx6-QG4e23H-zYVbwS6-jft4S/edit?usp=sharing',
}
