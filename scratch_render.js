import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from '../dist/ssr/App.js';

const routes = [
  '/',
  '/about',
  '/skills',
  '/projects',
  '/certifications',
  '/certifications/ibm',
  '/certifications/wadhwani',
  '/education',
  '/contact'
];

console.log('==================================================');
console.log('INSPECTING RENDERED PAGES FOR ALL ROUTES');
console.log('==================================================');

for (const route of routes) {
  try {
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [route] },
        React.createElement(App.default || App)
      )
    );

    console.log(`\n==================================================`);
    console.log(`PAGE: ${route}`);
    console.log(`==================================================`);
    console.log(`Rendered length: ${html.length} chars`);

    // Extract H1 headings
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    console.log('H1 Headings:', h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()));

    // Extract H2 headings
    const h2Matches = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
    console.log('H2 Headings (first 6):', h2Matches.slice(0, 6).map(h => h.replace(/<[^>]+>/g, '').trim()));

    // Check key elements depending on the page
    if (route === '/about') {
      const hasAboutName = html.includes('PRAJWAL') && html.includes('N THINGALAYA');
      const hasAccordions = html.includes('about-accordion');
      const hasProfile = html.includes('PROFILE');
      const hasInterests = html.includes('INTERESTS');
      const hasFocus = html.includes('CURRENT FOCUS');
      const hasProjects = html.includes('PROJECT EXPERIENCE');
      console.log(`About Name present: ${hasAboutName}`);
      console.log(`Accordions present: ${hasAccordions}`);
      console.log(`Sections present: PROFILE: ${hasProfile}, INTERESTS: ${hasInterests}, FOCUS: ${hasFocus}, PROJECTS: ${hasProjects}`);
    }

    if (route === '/skills') {
      const hasLab = html.includes('technology-lab');
      const hasPython = html.includes('PYTHON');
      const hasC = html.includes('C');
      const hasWeb = html.includes('WEB DEVELOPMENT');
      console.log(`Lab scene present: ${hasLab}`);
      console.log(`Skill modules present: PYTHON: ${hasPython}, C: ${hasC}, WEB: ${hasWeb}`);
    }

    if (route === '/projects') {
      const hasSmartAgri = html.includes('SMART AGRICULTURE') || html.includes('SMART DRIP IRRIGATION');
      const hasLineEditor = html.includes('LINE EDITOR');
      const hasGraphics = html.includes('2D GRAPHICS EDITOR');
      console.log(`Projects present: Agri: ${hasSmartAgri}, LineEditor: ${hasLineEditor}, Graphics: ${hasGraphics}`);
    }

    if (route === '/certifications') {
      const hasIBM = html.includes('IBM');
      const hasWadhwani = html.includes('WADHWANI');
      console.log(`Gateways present: IBM: ${hasIBM}, Wadhwani: ${hasWadhwani}`);
    }

    if (route === '/certifications/ibm') {
      const hasCert1 = html.includes('Certificate 01');
      const hasCert2 = html.includes('Certificate 02');
      console.log(`Certificates present: Cert 1: ${hasCert1}, Cert 2: ${hasCert2}`);
    }

    if (route === '/certifications/wadhwani') {
      const hasWadhwaniCert = html.includes('Wadhwani Foundation');
      console.log(`Wadhwani certificate present: ${hasWadhwaniCert}`);
    }

    if (route === '/education') {
      const hasBTech = html.includes('B.TECH');
      const hasReva = html.includes('REVA UNIVERSITY');
      const hasTimeline = html.includes('timeline-node');
      console.log(`Education details: B.Tech: ${hasBTech}, Reva: ${hasReva}, Timeline: ${hasTimeline}`);
    }

    if (route === '/contact') {
      const hasPhone = html.includes('+91 6364642835');
      const hasEmail = html.includes('prajwalthingalaya@gmail.com');
      const hasGithub = html.includes('@prajwalthingalaya328-ai');
      const hasLinkedin = html.includes('Prajwal N Thingalaya');
      console.log(`Contact items: Phone: ${hasPhone}, Email: ${hasEmail}, GitHub: ${hasGithub}, LinkedIn: ${hasLinkedin}`);
    }

    if (route === '/') {
      const hasWordmark = html.includes('identity-wordmark');
      const hasUniverse = html.includes('identity-universe');
      const hasWorlds = html.includes('world-field');
      console.log(`Home elements: Wordmark: ${hasWordmark}, Universe: ${hasUniverse}, Worlds: ${hasWorlds}`);
    }

  } catch (err) {
    console.error(`Error rendering ${route}:`, err);
  }
}
