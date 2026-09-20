import { useState } from 'react';
import PageFrame from '../components/PageFrame';

const projectData = [
  {
    id: 'smart-agriculture',
    number: '01',
    title: 'SMART AGRICULTURE MONITORING SYSTEM',
    displayTitle: 'SMART DRIP IRRIGATION SYSTEM',
    category: 'IoT / EMBEDDED SYSTEMS',
    theme: 'agriculture',
    shortDescription: 'An IoT-based smart agriculture system designed to monitor soil conditions and automate irrigation using connected hardware.',
    technologies: ['ESP8266 / NodeMCU', 'Soil Moisture Sensor', 'Relay Module', 'Water Pump', 'Arduino IDE', 'Embedded C', 'ThingSpeak / Blynk'],
    repositoryUrl: null,
    details: {
      overview: 'An IoT-based smart agriculture and drip irrigation system designed to monitor soil conditions and automate water supply.',
      purpose: 'The project focuses on reducing unnecessary water usage, monitoring soil moisture, automating irrigation, reducing manual intervention and supporting healthier plant growth.',
      flow: ['SOIL', 'SOIL MOISTURE SENSOR', 'ESP8266 / NODEMCU', 'DATA PROCESSING', 'THRESHOLD DECISION', 'RELAY MODULE', 'WATER PUMP', 'DRIP IRRIGATION', 'MONITORING / CLOUD'],
      implementation: 'The described implementation uses sensor readings processed by the ESP8266, Wi-Fi communication, cloud monitoring and threshold-based pump control for drip irrigation.',
      features: ['Real-time monitoring', 'Automated irrigation', 'Water conservation', 'Reduced manual effort', 'Practical IoT integration'],
      learning: 'The project provided practical exposure to connected hardware, sensor-based decisions, wireless communication and cloud-supported monitoring.',
      note: 'The project material describes ThingSpeak for cloud data visualization and also contains a section describing Blynk for remote monitoring and control. They are listed separately here rather than combined as one claim.',
    },
  },
  {
    id: 'line-editor',
    number: '02',
    title: 'LINE EDITOR',
    category: 'C / PROGRAMMING',
    theme: 'editor',
    shortDescription: 'A C project represented by a public repository containing a line-editor source file and compiled executable files.',
    technologies: ['C', 'main.c', 'editor.exe', 'main.exe'],
    repositoryUrl: 'https://github.com/prajwalthingalaya328-ai/LineEditor',
    details: {
      overview: 'A C-based LineEditor repository with a source file and compiled executable files.',
      purpose: 'The repository is presented as a focused programming project for a line editor. Its public contents verify the project name, C language and included executable/source artifacts.',
      implementation: 'The repository contains main.c together with editor.exe and main.exe. The available public README does not document additional behavior, so the detail stays limited to those verified contents.',
      features: ['LineEditor project structure', 'C source file', 'Compiled executable artifacts'],
      learning: 'Working with this project provides practice with C source organization and compiling a programming project into executable output.',
    },
  },
  {
    id: 'graphics-editor',
    number: '03',
    title: '2D GRAPHICS EDITOR',
    category: 'C / COMPUTER GRAPHICS',
    theme: 'geometry',
    shortDescription: 'A menu-driven 2D graphics editor in C using a character-based canvas for drawing and object operations.',
    technologies: ['C', 'Character-based canvas', 'Geometric shapes', 'Object operations'],
    repositoryUrl: 'https://github.com/prajwalthingalaya328-ai/2D-graphics-editor',
    details: {
      overview: 'A menu-driven 2D Graphics Editor in C using a character-based canvas.',
      purpose: 'The project explores drawing and managing geometric shapes through a programming-led graphics workflow.',
      implementation: 'The repository contains graphics_editor.c and documents a character-based canvas with menu-driven operations.',
      features: ['Draw lines', 'Draw rectangles', 'Draw triangles', 'Draw circles', 'Add, delete, modify and display operations'],
      learning: 'The project develops practical understanding of representing geometric objects and organizing canvas operations in C.',
    },
  },
];

function ProjectVisual({ theme }) {
  return <div className={`case-study-visual case-study-visual-${theme}`} aria-hidden="true">
    {theme === 'agriculture' && <><span className="visual-label">FIELD / SENSOR / CONTROL</span><div className="agriculture-stem" /><div className="agriculture-sensor">MOISTURE</div><div className="agriculture-pump">PUMP</div><div className="agriculture-line" /></>}
    {theme === 'editor' && <><span className="visual-label">C / LINE EDITOR</span><div className="editor-lines"><span>01</span><span>02</span><span>03</span><span>04</span></div><div className="editor-code"><b>line</b> editor.c<br /><em>input</em> → buffer<br /><em>mode</em> → edit<br /><i>_</i></div></>}
    {theme === 'geometry' && <><span className="visual-label">GRAPHICS / GEOMETRY / CANVAS</span><div className="geometry-grid" /><div className="geometry-line" /><div className="geometry-rectangle" /><div className="geometry-circle" /><div className="geometry-triangle" /></>}
  </div>;
}

function DetailBlock({ label, children }) {
  return <section className="case-study-detail-block"><h3>{label}</h3>{children}</section>;
}

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return <PageFrame eyebrow="" title="" intro="">
    <section className="case-study-page">
      <header className="case-study-header reveal"><div className="eyebrow">SELECTED WORK / ENGINEERING CASE STUDIES</div><h1>PROJECTS BUILT<br /><span>TO LEARN BY DOING.</span></h1><p>Projects built to explore software development, problem solving, embedded systems and practical technology.</p></header>
      <div className="case-study-list">
        {projectData.map((project) => {
          const isOpen = openProject === project.id;
          return <article className={`case-study-item case-study-item-${project.theme} ${isOpen ? 'is-open' : ''}`} key={project.id}>
            <div className="case-study-summary reveal">
              <div className="case-study-number">{project.number}</div>
              <div className="case-study-main"><div className="case-study-category">{project.category}</div><h2>{project.displayTitle ?? project.title}</h2><p>{project.shortDescription}</p><div className="case-study-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
              <div className="case-study-actions"><button type="button" onClick={() => setOpenProject(isOpen ? null : project.id)}>{isOpen ? 'CLOSE PROJECT' : 'EXPLORE PROJECT'} <span>{isOpen ? '↑' : '→'}</span></button>{project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer">VIEW REPOSITORY <span>↗</span></a> : <span className="repository-unavailable">REPOSITORY NOT VERIFIED</span>}</div>
            </div>
            <div className="case-study-details"><div className="case-study-detail-inner"><div className="case-study-detail-heading"><span>{project.number} / CASE STUDY</span><h2>{project.title}</h2></div><div className="case-study-detail-grid"><DetailBlock label="PROJECT OVERVIEW"><p>{project.details.overview}</p></DetailBlock><DetailBlock label="PROBLEM / PURPOSE"><p>{project.details.purpose}</p></DetailBlock>{project.details.flow && <DetailBlock label="PROJECT FLOW"><div className="project-flow-list">{project.details.flow.map((step, index) => <span key={step}>{step}{index < project.details.flow.length - 1 && <i>↓</i>}</span>)}</div></DetailBlock>}<DetailBlock label="TECHNOLOGY"><div className="detail-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>{project.details.note && <p className="case-study-note">{project.details.note}</p>}</DetailBlock><DetailBlock label="IMPLEMENTATION"><p>{project.details.implementation}</p></DetailBlock><DetailBlock label="KEY FEATURES"><ul>{project.details.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></DetailBlock><DetailBlock label="WHAT I LEARNED"><p>{project.details.learning}</p></DetailBlock><DetailBlock label="REPOSITORY">{project.repositoryUrl ? <a className="source-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">VIEW SOURCE ON GITHUB <span>↗</span></a> : <p className="case-study-note">No project repository URL was verified for this project.</p>}</DetailBlock></div><button className="case-study-close" type="button" onClick={() => setOpenProject(null)}>CLOSE PROJECT <span>↑</span></button></div></div>
          </article>;
        })}
      </div>
    </section>
  </PageFrame>;
}
