import { useState } from 'react';
import PageFrame from '../components/PageFrame';

const systems = [
  {
    key: 'python',
    name: 'PYTHON',
    status: 'BASIC',
    line: 'PROGRAMMING',
    detail: 'LEARNING',
    tags: ['PROGRAMMING', 'LEARNING', 'BUILDING'],
    position: 'system-python',
  },
  {
    key: 'c',
    name: 'C',
    status: 'GOOD',
    line: 'PROGRAMMING',
    detail: 'LOGIC',
    tags: ['PROGRAMMING', 'LOGIC'],
    position: 'system-c',
  },
  {
    key: 'web',
    name: 'WEB DEVELOPMENT',
    status: 'BUILDING',
    line: 'INTERFACES',
    detail: 'WEB PROJECTS',
    tags: ['INTERFACES', 'WEB PROJECTS'],
    position: 'system-web',
  },
  {
    key: 'ai',
    name: 'AI',
    status: 'EXPLORING',
    line: 'ARTIFICIAL INTELLIGENCE',
    detail: '',
    tags: ['AI', 'EXPLORING'],
    position: 'system-ai',
  },
  {
    key: 'projects',
    name: 'PROJECT DEVELOPMENT',
    status: 'BUILDING',
    line: 'TESTING',
    detail: '',
    tags: ['BUILDING', 'TESTING'],
    position: 'system-projects',
  },
  {
    key: 'programming',
    name: 'PROGRAMMING',
    status: 'CORE',
    line: 'PROGRAMMING',
    detail: '',
    tags: ['CORE', 'LOGIC'],
    position: 'system-programming',
  },
];

export default function Skills() {
  const [active, setActive] = useState('python');
  const current = systems.find((system) => system.key === active) ?? systems[0];

  return (
    <PageFrame eyebrow="" title="" intro="">
      <section className="technology-lab">
        <header className="lab-header reveal">
          <div className="eyebrow">SKILLS</div>
          <h1>THE PLACE WHERE MY SKILLS ARE TESTED.</h1>
        </header>

        <div className="lab-scene reveal">
          <div className="lab-grid" aria-hidden="true" />
          <div className="lab-rings" aria-hidden="true" />

          <div className="lab-display">
            <div className="lab-core">
              <span>ACTIVE MODULE</span>
              <h2>{current.name}</h2>
              <strong>{current.status}</strong>
              <p>{current.line}</p>
              <div className="lab-tags">
                {current.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {systems.map((system) => (
              <button
                key={system.key}
                type="button"
                className={`lab-module ${system.position} ${active === system.key ? 'is-selected' : ''}`}
                onClick={() => setActive(system.key)}
              >
                <span>{system.name}</span>
                <small>{system.detail || system.status}</small>
              </button>
            ))}
          </div>

          <aside className="lab-readout">
            <span>LAB STATUS</span>
            <strong>{current.name}</strong>
            <em>{current.status}</em>
            <small>{current.line}</small>
          </aside>
        </div>
      </section>
    </PageFrame>
  );
}
