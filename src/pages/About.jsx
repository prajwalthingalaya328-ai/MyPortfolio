import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

const profileRows = [
  ['DEGREE', 'B.Tech - Computer Science and Engineering'],
  ['UNIVERSITY', 'REVA University'],
  ['LOCATION', 'Bangalore'],
  ['CURRENT YEAR', '2nd Year'],
  ['PERIOD', '2025 - Present'],
  ['ACADEMIC AREA', 'Computer Science and Engineering'],
];

const interests = [
  ['01', 'Web Development', 'Interested in developing modern web interfaces and building practical web projects.'],
  ['02', 'Artificial Intelligence', 'Interested in understanding AI and machine-learning technologies and their practical applications.'],
  ['03', 'Programming', 'Focused on strengthening programming logic, fundamentals and problem-solving.'],
  ['04', 'Project Development', 'Interested in turning ideas into working technical projects.'],
  ['05', 'IoT / Practical Technology', 'Interested in connected systems and practical automation.'],
];

const learning = [
  ['01', 'Programming fundamentals', 'Strengthening programming logic and problem-solving.'],
  ['02', 'Python', 'Building stronger Python programming fundamentals.'],
  ['03', 'Web development', 'Developing practical web interfaces and improving frontend development skills.'],
  ['04', 'Artificial Intelligence / ML understanding', 'Exploring AI and machine-learning concepts.'],
  ['05', 'Practical project development', 'Learning through building and improving practical technical projects.'],
];

const projects = [
  ['01', 'Smart Agriculture / Drip Irrigation', 'An IoT-based academic project involving soil monitoring, ESP8266 / NodeMCU, automated irrigation and remote monitoring.'],
  ['02', 'Line Editor', 'A programming and editor project built around C programming, command-driven editing and structured text handling.'],
  ['03', '2D Graphics Editor', 'A graphics and programming project for drawing and manipulating shapes including lines, rectangles, triangles and circles.'],
];

const journey = [
  ['LEARN', 'Building programming and computer science foundations.'],
  ['BUILD', 'Creating academic and practical projects.'],
  ['EXPLORE', 'Exploring web development, AI and connected technologies.'],
  ['IMPROVE', 'Strengthening technical and problem-solving skills.'],
];

function RevealPanel({ id, open, onToggle, number, title, description, children }) {
  return (
    <article className={`about-accordion ${open ? 'is-open' : ''}`}>
      <button className="about-accordion-trigger" type="button" aria-expanded={open} aria-controls={`about-panel-${id}`} onClick={onToggle}>
        <span className="about-accordion-number">{number}</span>
        <span className="about-accordion-heading"><strong>{title}</strong><small>{description}</small></span>
        <span className="about-accordion-indicator" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="about-accordion-content" id={`about-panel-${id}`} aria-hidden={!open}>
        <div className="about-accordion-inner">{children}<button className="about-collapse" type="button" onClick={onToggle}>COLLAPSE <span>↑</span></button></div>
      </div>
    </article>
  );
}

export default function About() {
  const [openSection, setOpenSection] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const toggleSection = (id) => setOpenSection((current) => (current === id ? null : id));

  return (
    <PageFrame eyebrow="" title="" intro="">
      <section className="about-resume">
        <header className="about-resume-hero reveal">
          <div className="about-hero-copy">
            <div className="about-kicker">ABOUT / PERSONAL PROFILE</div>
            <h1>PRAJWAL <span>N THINGALAYA</span></h1>
            <p className="about-lead">Computer Science student interested in programming, web development, artificial intelligence and practical project development.</p>
          </div>
          <aside className="about-hero-aside">
            <p>B.Tech Computer Science &amp; Engineering</p>
            <p>REVA University, Bangalore</p>
            <p>2nd Year <span>2025 - Present</span></p>
          </aside>
        </header>

        <div className="about-accordion-list">
          <RevealPanel id="profile" open={openSection === 'profile'} onToggle={() => toggleSection('profile')} number="01" title="PROFILE" description="Academic background and personal profile.">
            <h2>ABOUT ME</h2><p className="about-reveal-lead">I am a second-year Computer Science and Engineering student at REVA University, Bangalore, developing my programming foundation while exploring web development, artificial intelligence and practical project development.</p><dl className="profile-rows">{profileRows.slice(0, 5).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </RevealPanel>
          <RevealPanel id="interests" open={openSection === 'interests'} onToggle={() => toggleSection('interests')} number="02" title="INTERESTS" description="The areas of technology I am exploring.">
            <h2>AREAS OF INTEREST</h2><div className="interest-list">{interests.map(([number, title, detail]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
          </RevealPanel>
          <RevealPanel id="focus" open={openSection === 'focus'} onToggle={() => toggleSection('focus')} number="03" title="CURRENT FOCUS" description="What I am currently developing and learning.">
            <h2>CURRENTLY DEVELOPING</h2><div className="learning-list">{learning.map(([number, title, detail]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div><div className="about-programming-note"><h3>PROGRAMMING PROFILE</h3><p><strong>C</strong> Good · Good working familiarity with C programming and programming fundamentals.</p><p><strong>Python</strong> Basic · Basic working knowledge with a focus on improving programming and problem-solving skills.</p></div>
          </RevealPanel>
          <RevealPanel id="projects" open={openSection === 'projects'} onToggle={() => toggleSection('projects')} number="04" title="PROJECT EXPERIENCE" description="Three practical projects exploring IoT, programming and graphics.">
            <h2>PROJECT EXPERIENCE</h2><p className="about-reveal-lead">Three practical projects exploring IoT, programming and graphics.</p><div className="about-project-accordion">{projects.map(([number, title, detail]) => <div className={`about-project-item ${openProject === number ? 'is-open' : ''}`} key={number}><button type="button" onClick={() => setOpenProject((current) => (current === number ? null : number))}><span>{number}</span><strong>{title}</strong><i>{openProject === number ? '−' : '+'}</i></button>{openProject === number && <p>{detail}</p>}</div>)}</div><Link className="about-text-link" to="/projects">VIEW ALL PROJECTS <span>→</span></Link>
          </RevealPanel>
          <RevealPanel id="journey" open={openSection === 'journey'} onToggle={() => toggleSection('journey')} number="05" title="DEVELOPMENT JOURNEY" description="Learn, build, explore and improve through practice.">
            <h2>MY DEVELOPMENT JOURNEY</h2><div className="journey-list">{journey.map(([title, detail]) => <article key={title}><span>{title}</span><p>{detail}</p></article>)}</div>
          </RevealPanel>
          <RevealPanel id="career" open={openSection === 'career'} onToggle={() => toggleSection('career')} number="06" title="CAREER DIRECTION" description="The technical directions I am interested in developing toward.">
            <h2>CURRENT CAREER INTERESTS</h2><div className="direction-list"><span>Software Developer</span><span>Full-Stack Developer</span><span>AI / ML Engineer</span></div><p className="about-reveal-lead">These are areas I am interested in developing toward as I continue strengthening my programming, development and technical project skills.</p>
          </RevealPanel>
        </div>
      </section>
    </PageFrame>
  );
}
