import { Link } from 'react-router-dom'
import './RecruitmentPage.css'

const GOOGLE_FORM_PLACEHOLDER_URL = 'https://forms.gle/YPwpHYb7K1RxbGF29'
const HERO_IMAGE_CDN_URL =
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80'

const roles = [
    {
        title: 'Propulsion Engineer',
        stream: '[Mechanical / Aerospace / Chemical]',
        work: [
            'CAD of engine components and related hardware',
            'Basic CFD / FEA for flow, thermal, or stress checks',
            'Assist in engine assembly and static fire test setup',
            'Record and analyze propulsion test data',
        ],
        preferredSkills: [
            'SolidWorks / Fusion 360 / CATIA',
            'ANSYS / OpenFOAM / COMSOL',
            'MATLAB / Python',
            'Basic understanding of thermodynamics / fluid flow / heat transfer / propulsion',
        ],
    },
    {
        title: 'Avionics Engineer',
        stream: '[EE / ECE / CSE]',
        work: [
            'Work with sensors, wiring, and power distribution',
            'Use microcontrollers for data acquisition and control',
            'Write basic embedded code for onboard systems',
            'Set up telemetry and ground-side data reception',
        ],
        preferredSkills: [
            'Arduino / STM32 / ESP32',
            'C / C++ / Embedded programming',
            'Basic understanding of sensors / circuits / communication protocols',
            'Familiarity with PCB tools / electronics debugging',
        ],
    },
    {
        title: 'Flight Systems Engineer',
        stream: '[CSE / EE / Aerospace]',
        work: [
            'Write code for data logging and sensor handling',
            'Build basic simulations for flight / test analysis',
            'Process and visualize flight or static test data',
            'Support onboard logic and control-related tasks',
        ],
        preferredSkills: [
            'Python / MATLAB / C++',
            'Basic understanding of simulation / numerical methods / control systems',
            'Familiarity with data handling / plotting / scripting',
            'Exposure to embedded logic / flight dynamics / telemetry software',
        ],
    },
    {
        title: 'Manufacturing Engineer',
        stream: '[Metallurgy / Mechanical / Chemical]',
        work: [
            'Assist in material selection and fabrication planning',
            'Coordinate machining and hardware manufacturing',
            'Inspect parts and support fitment / assembly',
            'Help prepare hardware for testing and integration',
        ],
        preferredSkills: [
            'Basic understanding of materials / manufacturing processes / machining',
            'Familiarity with engineering drawings and tolerances',
            'Exposure to workshop tools / fabrication practices',
            'Knowledge of thermal / structural material behavior is a plus',
        ],
    },
    {
        title: 'Operations & Documentation',
        stream: '[1st Year / Any Branch]',
        work: [
            'Maintain technical documents and project records',
            'Prepare reports, presentations, and updates',
            'Track tasks, timelines, and team coordination',
            'Assist during tests, builds, and internal reviews',
        ],
        preferredSkills: [
            'Good written communication and formatting skills',
            'Familiarity with Google Docs / Sheets / Slides / MS Office',
            'Ability to organize files, timelines, and follow-ups',
            'Basic understanding of technical projects is a plus',
        ],
    },
]

function RecruitmentPage() {
    return (
        <div className="recruitment-page">
            <div className="recruitment-page-overlay" aria-hidden="true" />

            <header className="recruitment-topbar">
                <Link className="recruitment-brand" to="/" aria-label="IOTIC Space home">
                    <img src="/LogoWithoutText.png" alt="IOTIC Space logo" />
                    <span>iotic.space</span>
                </Link>

                <Link className="back-link" to="/">
                    Home
                </Link>
            </header>

            <section
                className="recruitment-header"
                style={{
                    '--hero-bg-image': `url(${HERO_IMAGE_CDN_URL})`,
                }}
            >
                <div className="recruitment-hero-copy">
                    <p className="recruitment-kicker">IOTIC Space Recruitment</p>
                    <h1>Team Roles & Requirements</h1>
                    <p className="recruitment-intro">
                        Join us in building propulsion and flight capability from the ground up. Explore open roles below
                        and apply using the form link.
                    </p>

                    <a className="apply-cta" href={GOOGLE_FORM_PLACEHOLDER_URL} target="_blank" rel="noreferrer">
                        Apply via Google Form
                    </a>
                </div>
            </section>

            <main className="roles-grid" aria-label="Open team roles">
                {roles.map((role) => (
                    <article className="role-card" key={role.title}>
                        <div className="role-heading">
                            <h2>{role.title}</h2>
                            <p className="role-stream">{role.stream}</p>
                        </div>

                        <div className="role-columns">
                            <section>
                                <h3>Work</h3>
                                <ul>
                                    {role.work.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h3>Preferred Skills</h3>
                                <ul>
                                    {role.preferredSkills.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </article>
                ))}
            </main>

            <footer className="recruitment-footer">
                <p>Ready to contribute to real aerospace engineering work?</p>
                <a className="apply-cta" href={GOOGLE_FORM_PLACEHOLDER_URL} target="_blank" rel="noreferrer">
                    Submit Application
                </a>
            </footer>
        </div>
    )
}

export default RecruitmentPage