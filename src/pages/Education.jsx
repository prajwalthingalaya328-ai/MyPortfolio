import { useState } from 'react';
import PageFrame from '../components/PageFrame';

const studyAreas = [
  {
    key: 'current',
    label: 'CURRENT STUDIES',
    detail: 'B.Tech Computer Science & Engineering at REVA University, Bengaluru, currently in 2nd year.',
  },
  {
    key: 'projects',
    label: 'PROJECT WORK',
    detail: 'Building practical systems focused on smart agriculture, interactive tools, and programming-led problem solving.',
  },
  {
    key: 'technical',
    label: 'TECHNICAL LEARNING',
    detail: 'Exploring web development, artificial intelligence, and project development while strengthening core programming skills.',
  },
  {
    key: 'programming',
    label: 'PROGRAMMING',
    detail: 'Developing structured problem solving with languages and project work grounded in real implementation.',
  },
  {
    key: 'development',
    label: 'DEVELOPMENT',
    detail: 'Designing interfaces, applications, and experiments that connect technical learning to practical outcomes.',
  },
];

export default function Education() {
  const [active, setActive] = useState('current');
  const current = studyAreas.find((area) => area.key === active) ?? studyAreas[0];

  return (
    <PageFrame eyebrow="" title="" intro="">
      <section className="academic-journey">
        <header className="education-header reveal">
          <div className="eyebrow">EDUCATION</div>
          <h1>
            B.TECH
            <span>COMPUTER SCIENCE</span>
            <em>&amp; ENGINEERING</em>
          </h1>
          <div className="education-meta">
            <span>REVA UNIVERSITY</span>
            <span>BENGALURU</span>
            <span>2025 — PRESENT</span>
            <span>2ND YEAR</span>
          </div>
        </header>

        <div className="timeline-shell reveal">
          <div className="timeline-glow" aria-hidden="true" />
          <div className="timeline-node timeline-current">
            <span>2025</span>
            <div>
              <strong>B.Tech CSE</strong>
              <small>REVA University</small>
              <em>2025 — Present</em>
            </div>
          </div>
          <div className="timeline-node timeline-current timeline-secondary">
            <span>NOW</span>
            <div>
              <strong>2ND YEAR</strong>
              <small>Computer Science &amp; Engineering</small>
              <em>Currently pursuing</em>
            </div>
          </div>
        </div>

        <div className="education-details reveal">
          <div className="detail-grid">
            <div>
              <span>FIELD</span>
              <strong>Computer Science &amp; Engineering</strong>
            </div>
            <div>
              <span>UNIVERSITY</span>
              <strong>REVA University</strong>
            </div>
            <div>
              <span>LOCATION</span>
              <strong>Bengaluru</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong>Currently pursuing</strong>
            </div>
          </div>

          <div className="focus-cluster">
            <div className="focus-label">INTEREST AREAS</div>
            <div className="focus-tags">
              <span>Web Development</span>
              <span>Artificial Intelligence</span>
              <span>Project Development</span>
              <span>Programming</span>
            </div>
          </div>
        </div>

        <div className="journey-panels reveal">
          <div className="panel-selector">
            {studyAreas.map((item) => (
              <button
                key={item.key}
                type="button"
                className={active === item.key ? 'is-active' : ''}
                onClick={() => setActive(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="journey-panel">
            <span>{current.label}</span>
            <p>{current.detail}</p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
