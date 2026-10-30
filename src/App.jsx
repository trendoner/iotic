import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import yashPhoto from '/team/yash-budvansh.jpg'
import hrudayPhoto from '/team/hruday-chilukuri.jpg'
import harikeshPhoto from '/team/harikesh-pratap-verma.jpg'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Upcoming Test', href: '#upcoming-test' },
  { label: 'Our Approach', href: '#capabilities' },
  { label: 'Flux Alpha', href: '#vehicles' },
  { label: 'Moon Mission', href: '#moon-mission' },
  { label: 'Mission', href: '#mission-control' },
  { label: 'Company', href: '#company' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
  { label: 'About Us', href: '#about-us' },
]

const highlights = [
  {
    value: 'Phase 1',
    label: 'Design, manufacturing, and static fire testing',
  },
  {
    value: 'Tech',
    label: 'Solid rocket motor prototype validation',
  },
  {
    value: 'Goal',
    label: 'Build real engineering capability first. Scale later.',
  },
]

const moonRoadmap = [
  {
    title: 'Prove Propulsion',
    text: 'Static fire campaigns like Vector Alpha to validate motor design, combustion, and chamber pressure behavior.',
  },
  {
    title: 'Build Flux Alpha',
    text: 'Scale up to a 400 kN LOX + LCH4 engine capable of powering real launch vehicles.',
  },
  {
    title: 'Reach Cislunar Space',
    text: 'Develop reliable space transportation systems that move payloads beyond Earth orbit.',
  },
  {
    title: 'Land on the Moon',
    text: 'Deliver missions to the lunar surface and support humanity’s lasting presence on the Moon.',
  },
]

const capabilities = [
  {
    title: 'Propulsion Validation',
    text: 'A foundational solid rocket motor prototype focusing on combustion understanding, nozzle design, and chamber pressure behavior.',
  },
  {
    title: 'Deep-Tech Infrastructure',
    text: 'Building scalable space transportation systems to support humanity’s expansion into cislunar and lunar space.',
  },
  {
    title: 'Iterative Engineering',
    text: 'Embracing a disciplined cycle of design, validation, and improvement—the true engine of aerospace progress.',
  },
]

const teamMembers = [
  {
    name: 'Yash Budvansh',
    role: 'Propulsion Engineer',
    education: 'B.Tech, Mechanical Engineering (MME), IIT (ISM) Dhanbad (Exp: 2028)',
    expertise: ['Propulsion', 'CFD', 'FEA', 'Internal Ballistics', 'CAD'],
    image: yashPhoto,
  },
  {
    name: 'Hruday Chilukuri',
    role: 'Aero-Mechanical Engineer',
    education: 'B.Tech, Mechanical Engineering, IIT (ISM) Dhanbad (Exp: 2028)',
    expertise: ['Mechanical Design', 'Thermal Systems', 'Structural Analysis', 'CAD'],
    image: hrudayPhoto,
  },
  {
    name: 'Harikesh Pratap Verma',
    role: 'Flight Systems and Data Engineer',
    education: 'B.Tech, Mechanical Engineering, IIT (ISM) Dhanbad (Exp: 2028)',
    expertise: ['Simulation', 'Control Algorithms', 'Data Analysis'],
    image: harikeshPhoto,
  },
]

function getCountdown() {
  const targetDate = new Date('2026-06-18T21:00:00Z')
  const remaining = Math.max(targetDate.getTime() - Date.now(), 0)

  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [days, hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':')
}

function App() {
  const [countdown, setCountdown] = useState(getCountdown())
  const hasSetInitialVideoOffset = useRef(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleMoonVideoLoadedMetadata = (event) => {
    if (hasSetInitialVideoOffset.current) return

    event.currentTarget.currentTime = 2
    hasSetInitialVideoOffset.current = true
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="IOTIC Space home">
          <img src="/LogoWithoutText.png" alt="IOTIC Space logo" />
          <span className="brand-name">iotic.space</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Link className="nav-recruitment-cta" to="/recruitment">
          Recruitment
        </Link>


      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy reveal">
            <h1>Engineering the first steps toward humanity’s next frontier.</h1>





          </div>

          <div className="hero-visual reveal" id="moon-live" style={{ '--reveal-delay': '120ms' }}>
            <div className="moon-panel">
              <div className="moon-frame">
                <video
                  className="moon-video"
                  src="/Moon%20Live%20Wallpaper_2160p.mp4"
                  onLoadedMetadata={handleMoonVideoLoadedMetadata}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Live moon wallpaper"
                />
                <div className="moon-sheen" />
              </div>
            </div>
          </div>
        </section>

        <section className="upcoming-test reveal" id="upcoming-test" aria-labelledby="upcoming-test-title">
          <div className="upcoming-test-copy">
            <p className="upcoming-test-badge">
              <span className="upcoming-test-pulse" aria-hidden="true" />
              Upcoming Test
            </p>
            <h2 id="upcoming-test-title">Vector Alpha</h2>
            <p className="upcoming-test-text">
              Our next static fire campaign: an 8 kN solid rocket motor test that puts our propulsion
              design to the test on the stand.
            </p>
          </div>

          <dl className="upcoming-test-specs">
            <div>
              <dt>Test</dt>
              <dd>Static Fire</dd>
            </div>
            <div>
              <dt>Motor Thrust</dt>
              <dd>8 kN</dd>
            </div>
            <div>
              <dt>Test Window</dt>
              <dd>Nov – Dec 2026</dd>
            </div>
          </dl>
        </section>

        <section className="capabilities reveal" id="capabilities">
          <div className="section-heading reveal" style={{ '--reveal-delay': '80ms' }}>
            <p>Our Approach</p>
            <h2>Real engineering capability first. Scale later.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="capability-card reveal"
                style={{ '--reveal-delay': `${120 + index * 90}ms` }}
              >
                <span className="card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase reveal" id="vehicles">
          <div className="showcase-visual">
            <img src="/engine.png" alt="IOTIC Space engine assembly" loading="lazy" />
          </div>

          <div className="showcase-copy">
            <h2>Flux Alpha</h2>
            <p>Engine properties</p>

            <div className="timeline">
              <div>
                <strong>ISP</strong>
                <span>260-290 s - efficiency range for sustained burn performance.</span>
              </div>
              <div>
                <strong>Thrust</strong>
                <span>400 kN - delivers strong acceleration for mission maneuvers.</span>
              </div>
              <div>
                <strong>Propellant</strong>
                <span>LOX + LCH4 - a clean, high-performance cryogenic propellant pair.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="moon-goal reveal" id="moon-mission" aria-labelledby="moon-goal-title">
          <div className="moon-goal-heading">
            <p className="eyebrow">Ultimate Goal</p>
            <h2 id="moon-goal-title">The Moon Mission.</h2>
            <p>
              Every test we run is a step toward one destination: building the propulsion and transportation
              systems that take IOTIC Space to the Moon.
            </p>
          </div>

          <ol className="moon-goal-roadmap">
            {moonRoadmap.map((step, index) => (
              <li
                key={step.title}
                className="reveal"
                style={{ '--reveal-delay': `${120 + index * 90}ms` }}
              >
                <span className="card-index">Step 0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mission-panel reveal" id="mission-control">
          <div>
            <p className="eyebrow">The Mission</p>
            <h2>One validated propulsion milestone at a time.</h2>
          </div>
          <p>
            IOTIC Space is not attempting to skip steps. We are beginning with foundational propulsion work
            that every serious space company must master—the ability to design, build, test, fail safely,
            learn, and iterate.
          </p>
        </section>

        <footer className="site-footer reveal" id="company">
          <div>
            <p className="eyebrow">Company</p>
            <h2>IOTIC Space.</h2>
          </div>
          <p>
            We are building a technically credible foundation in propulsion and launch system development. 
            Capability, once earned, can change everything.
          </p>
        </footer>

        <section className="team-section reveal" id="team" aria-labelledby="team-title">
          <div className="team-heading reveal" style={{ '--reveal-delay': '80ms' }}>
            <p className="eyebrow">Our Team</p>
            <h2 id="team-title">The engineers building IOTIC Space.</h2>
            <p className="team-subtitle">
              Pioneering next-generation propulsion, aero-mechanical structures, and flight systems from IIT (ISM) Dhanbad.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="team-card reveal"
                style={{ '--reveal-delay': `${120 + index * 90}ms` }}
              >
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                    loading="lazy"
                  />
                  <div className="team-image-overlay" />
                </div>

                <div className="team-info">
                  <div className="team-header">
                    <h3>{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                  </div>

                  <div className="team-detail">
                    <span className="team-detail-label">Education</span>
                    <p className="team-education">{member.education}</p>
                  </div>

                  <div className="team-detail">
                    <span className="team-detail-label">Expertise</span>
                    <ul className="team-expertise-tags" aria-label={`Expertise of ${member.name}`}>
                      {member.expertise.map((skill) => (
                        <li key={skill} className="team-tag">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-copy reveal" style={{ '--reveal-delay': '70ms' }}>
            <p className="eyebrow">Contact Us</p>
            <h2>Connect with the IOTIC Space team.</h2>
            <p>
              For collaboration, internships, and media inquiries, reach out through the channels below.
            </p>
          </div>

          <div className="contact-details" aria-label="Contact details">
            <div className="reveal" style={{ '--reveal-delay': '120ms' }}>
              <span>Email</span>
              <a className="contact-link contact-link--email" href="mailto:hello@ioticspace.com">
                hello@iotic.space
              </a>
            </div>

            <div className="reveal" style={{ '--reveal-delay': '150ms' }}>
              <span>Founder</span>
              <a className="contact-link contact-link--email" href="mailto:founder@iotic.space">
                founder@iotic.space
              </a>
            </div>

            <div className="reveal" style={{ '--reveal-delay': '180ms' }}>
              <span>Phone</span>
              <a className="contact-link" href="tel:+919876543210">
                +91 85059 05796
              </a>
            </div>

            <div className="reveal" style={{ '--reveal-delay': '240ms' }}>
              <span>Location</span>
              <p>Dhanbad, Jharkhand</p>
            </div>

            <div className="contact-details-wide reveal" style={{ '--reveal-delay': '300ms' }}>
              <span>LinkedIn</span>
              <a className="contact-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                www.linkedin.com/company/iotic-space/
              </a>
            </div>
          </div>
        </section>

        <section className="about-section reveal" id="about-us" aria-labelledby="about-title">
          <div className="about-heading">
            <p className="eyebrow">About Us</p>
            <h2 id="about-title">Incubated and recognised.</h2>
          </div>

          <div className="about-copy">
            <p>
              IOTIC Space is incubated at the CIIE – IIT (ISM) Dhanbad Foundation, under the Ministry of
              Electronics and Information Technology (MeitY) GENESIS Entrepreneur-in-Residence (EiR) 2.0
              programme.
            </p>
            <p>
              This incubation provides an institutional ecosystem to support our entrepreneurial and
              technological development.
            </p>
            <p>
              IOTIC Space is also registered with the Indian National Space Promotion and Authorisation
              Centre (IN-SPACe) as a Non-Government Entity (NGE).
            </p>

            <ul className="about-tags" aria-label="Affiliations">
              <li>CIIE – IIT (ISM) Dhanbad</li>
              <li>MeitY GENESIS EiR 2.0</li>
              <li>IN-SPACe Registered NGE</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
