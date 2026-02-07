'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, FileText, ChevronDown } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const projects = [
    {
      title: 'Full-Stack Gaming Stats Dashboard',
      description: 'Built a full-stack web app with interactive charts to display live gaming statistics, trends, and search results using the RAWG API.',
      tech: ['Node.js', 'Express', 'JavaScript', 'Chart.js'],
      github: 'https://github.com/abhiraj75',
      link: 'https://main-esports-dashboard.onrender.com/',
    },
    {
      title: 'Cyber Dodge',
      description: 'Built a retro-style arcade survival game with progressive difficulty, collision detection, and persistent high scores using LocalStorage.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Service Workers'],
      github: 'https://github.com/abhiraj75',
      link: 'https://cyberdodge.netlify.app',
    },
    {
      title: 'Gift Picker Lottery DApp',
      description: 'Built a decentralized lottery DApp on the Flare Coston2 testnet, enabling transparent, on-chain participant entry and winner selection.',
      tech: ['Solidity', 'React', 'Next.js', 'wagmi'],
      github: 'https://github.com/abhiraj75/web3-giftpicker-dapp',
      link: 'https://github.com/abhiraj75/web3-giftpicker-dapp',
    },
  ]

  const skills = {
    'Programming Languages': ['Python', 'JavaScript'],
    'Web Development': ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express'],
    'Core CS': ['Data Structures', 'Algorithms', 'Database Management', 'Git'],
    'Other': ['Problem Solving', 'Project Management', 'Leadership', 'Communication'],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 relative">
            {/* Desktop menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['hero', 'about', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex gap-4 ml-4 pl-4 border-l border-border">
                <a
                  href="https://github.com/abhiraj75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/abhiraj-singh-748b29268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Mobile social links */}
            <div className="md:hidden flex items-center gap-4 absolute left-4">
              <a
                href="https://github.com/abhiraj75"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhirajsingh27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors absolute right-4"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <div className="flex flex-col gap-3 pt-4">
                {['hero', 'about', 'projects', 'skills', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-sm font-medium text-foreground hover:text-accent transition-colors text-left px-2 py-2 rounded hover:bg-secondary"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-12 lg:items-center lg:justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                Abhiraj Singh
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4 lg:mb-6">
                Computer Science Student | AI/ML Enthusiast | Aspiring Software Developer | Open Source Contributor
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-6 lg:mb-8 mx-auto lg:mx-0">
                First-year student at Medhavi Skills University passionate about building innovative solutions with AI, web development, and Web3 technologies.
              </p>
            </div>
            
            <div className="relative flex-shrink-0">
              {/* Paperclip effect - subtle decoration */}
              <div className="absolute -top-4 -left-6 w-12 h-12 text-muted-foreground/40 transform -rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M10.5 1.5H21a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V10.5" />
                  <path d="M10.5 1.5a2 2 0 0 0-2 2v14.5" />
                </svg>
              </div>
              
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-08%20at%2022.25.12-zu9h7OX74mVxN9cXqRh7bN8TdQdHdQ.jpeg"
                alt="Abhiraj Singh"
                className="w-48 sm:w-56 lg:w-64 h-60 sm:h-72 lg:h-80 rounded-xl object-cover shadow-xl border border-border"
              />
            </div>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              View Projects
              <ChevronDown size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">About Me</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm a driven computer science student with a strong passion for Artificial Intelligence, Machine Learning, and full-stack web development, with a focus on solving real-world problems through innovative technology.
            </p>
            
            <p>
              As School Captain at Army Public School, I demonstrated leadership by coordinating school-wide events and representing student interests. I'm also committed to social responsibility through my volunteer work with the Stray Dogs Welfare Initiative, where I've coordinated vaccination drives and community education programs.
            </p>

            <p>
              I'm skilled at crafting intuitive frontend experiences and currently diving deeper into backend systems and server-side architecture. My foundation in full-stack development continues to grow with each project, coupled with an increasing interest in emerging technologies like Web3 and blockchain.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Key Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Merit-based scholarship worth ₹7,00,000 and MacBook Pro for academic excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>91% in Class XII (CBSE) with 97% in Computer Science</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>School Captain and student council leader at Army Public School</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Active community organizer in animal welfare initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-20 px-4 sm:px-6 lg:px-8 md:mt-0 mt-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow hover:border-accent/50 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-border">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 font-semibold transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Skills</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-foreground mb-4">{category}</h3>
                <div className="space-y-2">
                  {items.map((skill, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6 pb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">B.Tech CSE (AI/ML)</h3>
                  <p className="text-lg text-accent font-semibold">Medhavi Skills University</p>
                </div>
                <span className="text-muted-foreground">2025 - 2029 (Semester 2)</span>
              </div>
              <p className="text-muted-foreground mb-4">Currently pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning</p>
              <div>
                <p className="font-semibold text-foreground mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Web Development', 'DSA', 'ML Mathematics', 'DBMS'].map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Class XII (CBSE)</h3>
                  <p className="text-lg text-accent font-semibold">Army Public School</p>
                </div>
                <span className="text-muted-foreground">Apr 2024 - Mar 2025</span>
              </div>
              <p className="text-muted-foreground mb-3">91% overall | Computer Science: 97/100 | English Literature: 95/100</p>
              <p className="text-muted-foreground">School Captain, leading student council and organizing workshops, campaigns and cultural events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=itsabhiraj27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              itsabhiraj27@gmail.com
            </a>
            <a
              href="https://github.com/abhiraj75"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhirajsingh27/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 pb-6 border-b border-primary-foreground/20">
            <div>
              <p className="text-sm">© {currentYear} Abhiraj Singh. All rights reserved.</p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/abhiraj75"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhirajsingh27/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm text-primary-foreground/60">
            <p>Designed & Built with care | Portfolio of Abhiraj Singh</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
