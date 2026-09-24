import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const unsupported = !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

/* ─── Route map (page keyword → route path) ─── */
const routeCommands = {
  home: '/',
  about: '/about',
  skills: '/skills',
  skill: '/skills',
  projects: '/projects',
  project: '/projects',
  certifications: '/certifications',
  certification: '/certifications',
  certificates: '/certifications',
  certificate: '/certifications',
  education: '/education',
  career: '/career',
  github: '/github',
  contact: '/contact',
  ibm: '/certifications/ibm',
  wadhwani: '/certifications/wadhwani',
};

/* ─── Navigation verb patterns ─── */
const navVerbs = [
  'open', 'show', 'go to', 'go', 'take me to', 'take me',
  'navigate to', 'navigate', 'see', 'want to see', 'want to',
  'switch to', 'visit', 'display', 'load', 'bring up',
];

/* ─── Info query patterns (user wants to HEAR about a topic) ─── */
const infoVerbs = [
  'tell me about', 'tell about', 'say about', 'what about',
  'what is', 'what are', 'who is', 'describe', 'explain',
  'talk about', 'speak about', 'give me info', 'information about',
  'details about', 'detail about', 'know about',
];

/* ─── Feminine voice preference ─── */
const feminineVoicePattern = /female|woman|samantha|ava|victoria|zira|jenny|aria|hazel|karen|moira|serena|susan|allison|google uk english female|microsoft.*female/i;

/* ─── Topic keywords → spoken responses ─── */
const topicResponses = {
  skills: () =>
    `Prajwal has good knowledge of C programming and basic knowledge of Python, which he is actively improving. He is also building skills in web development with HTML, CSS, JavaScript, and React. His key areas include programming, artificial intelligence, project development, and IoT.`,

  projects: () =>
    `Prajwal has built three notable projects. First, a Smart Agriculture Monitoring System using ESP8266, soil moisture sensors, and IoT for automated drip irrigation. Second, a Line Editor written in C. And third, a 2D Graphics Editor in C for drawing shapes like lines, rectangles, triangles, and circles. You can see all the details on the projects page.`,

  education: () =>
    `Prajwal N Thingalaya is a ${portfolioData.year} ${portfolioData.degree} student at ${portfolioData.university}, Bengaluru, studying from ${portfolioData.period}. His study areas include web development, artificial intelligence, project development, and programming.`,

  about: () =>
    `Prajwal N Thingalaya is a ${portfolioData.year} ${portfolioData.degree} student at ${portfolioData.university}. He is a computer science student interested in programming, web development, artificial intelligence, and practical project development. He has good knowledge of C and basic knowledge of Python. His career interests include becoming a Software Developer, Full-Stack Developer, or AI and ML Engineer.`,

  certifications: () =>
    `Prajwal has earned certifications from ${portfolioData.certifications.join(' and ')}. He has 2 Python learning certificates from IBM SkillsBuild and 1 certificate from Wadhwani Foundation, totaling 3 certifications.`,

  ibm: () =>
    `Prajwal has 2 Python learning certificates from IBM SkillsBuild, covering Python programming fundamentals and advanced concepts.`,

  wadhwani: () =>
    `Prajwal has completed a certification from the Wadhwani Foundation.`,

  contact: () =>
    `You can reach Prajwal via email at ${portfolioData.email}, by phone at ${portfolioData.phone}, or connect through LinkedIn and GitHub. He is available for projects, collaboration, and connections.`,

  github: () =>
    `You can find Prajwal's open-source work on his GitHub profile at github dot com slash prajwalthingalaya328-ai. His repositories include projects like the Line Editor and 2D Graphics Editor.`,

  career: () =>
    `Prajwal is currently a ${portfolioData.year} ${portfolioData.degree} student focused on building expertise in C, Python, web development, and AI. His career interests include Software Development, Full-Stack Development, and AI and Machine Learning Engineering.`,

  home: () =>
    `The home page is the landing page of Prajwal's portfolio. It features his introduction as a B.Tech CSE student at REVA University, with quick links to explore his projects, skills, and profile.`,
};

/* ─── Keyword sets for matching topics in free-form speech ─── */
const topicKeywords = {
  home:           ['home', 'landing', 'main page', 'front page', 'homepage'],
  skills:         ['skill', 'skills', 'programming language', 'programming languages', 'technologies', 'tech stack', 'languages', 'what can he do', 'what does he do', 'what does he know', 'abilities'],
  projects:       ['project', 'projects', 'iot', 'water quality', 'monitoring', 'esp8266', 'nodemcu', 'work', 'portfolio work', 'agriculture', 'irrigation', 'line editor', 'graphics editor'],
  education:      ['education', 'study', 'studying', 'university', 'college', 'degree', 'student', 'reva', 'b.tech', 'btech'],
  about:          ['about', 'prajwal', 'who is', 'tell me about prajwal', 'about prajwal', 'himself', 'introduction', 'intro', 'bio', 'background'],
  certifications: ['certification', 'certifications', 'certificate', 'certificates', 'certified'],
  ibm:            ['ibm', 'ibm skillsbuild', 'skillsbuild'],
  wadhwani:       ['wadhwani', 'wadhwani foundation'],
  contact:        ['contact', 'email', 'phone', 'reach', 'connect', 'get in touch', 'touch'],
  github:         ['github', 'git hub', 'repository', 'repositories', 'repos', 'open source'],
  career:         ['career', 'experience', 'job', 'internship'],
};


export default function VoiceAssistant() {
  const navigate = useNavigate();
  const recognition = useRef(null);
  const voices = useRef([]);
  const hideTimer = useRef(null);
  const [state, setState] = useState(unsupported ? 'UNSUPPORTED' : 'IDLE');
  const [active, setActive] = useState(false);

  /* ── Load voices ── */
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => { voices.current = window.speechSynthesis.getVoices(); };
      loadVoices();
      window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
      return () => { window.speechSynthesis.removeEventListener('voiceschanged', loadVoices); recognition.current?.stop(); window.clearTimeout(hideTimer.current); };
    }
    return () => { recognition.current?.stop(); window.clearTimeout(hideTimer.current); };
  }, []);

  /* ── Voice selection ── */
  const chooseVoice = () => {
    const english = voices.current.filter((v) => /^(en-IN|en-US|en-GB)/i.test(v.lang));
    return [...english].sort((a, b) => {
      const score = (v) =>
        (v.lang.toLowerCase() === 'en-in' ? 5 : v.lang.toLowerCase() === 'en-us' ? 4 : 3) +
        (feminineVoicePattern.test(v.name) ? 5 : 0) +
        (/natural|premium|enhanced|neural/i.test(v.name) ? 2 : 0);
      return score(b) - score(a);
    })[0];
  };

  /* ── Speech helpers ── */
  const hideAfterResponse = () => {
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => { setActive(false); setState(unsupported ? 'UNSUPPORTED' : 'IDLE'); }, 650);
  };

  const speak = (text, onEnd, dismiss = false) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = chooseVoice();
      if (voice) utterance.voice = voice;
      utterance.rate = 0.92;
      utterance.pitch = 1.05;
      utterance.volume = 1;
      utterance.onstart = () => setState('SPEAKING');
      utterance.onend = () => { setState('IDLE'); onEnd?.(); if (dismiss) hideAfterResponse(); };
      window.speechSynthesis.speak(utterance);
    } else {
      setState('IDLE');
      onEnd?.();
      if (dismiss) hideAfterResponse();
    }
  };

  /* ── Intent detection helpers ── */
  const hasNavIntent = (text) => navVerbs.some((v) => text.includes(v));
  const hasInfoIntent = (text) => infoVerbs.some((v) => text.includes(v));

  const findPage = (text) => {
    // Check longest keywords first to avoid partial matches (e.g. "ibm skillsbuild" before "skill")
    const sorted = Object.keys(routeCommands).sort((a, b) => b.length - a.length);
    return sorted.find((key) => text.includes(key));
  };

  const findTopic = (text) => {
    // Check multi-word keywords first, then single-word
    for (const [topic, keywords] of Object.entries(topicKeywords)) {
      const multiWord = keywords.filter((k) => k.includes(' '));
      if (multiWord.some((k) => text.includes(k))) return topic;
    }
    for (const [topic, keywords] of Object.entries(topicKeywords)) {
      const singleWord = keywords.filter((k) => !k.includes(' '));
      if (singleWord.some((k) => text.includes(k))) return topic;
    }
    return null;
  };

  /* ── Main response logic ── */
  const respond = (raw) => {
    const text = raw.toLowerCase().trim();

    /* 1 — External links */
    if (text.includes('linkedin') || text.includes('linked in') || text.includes('connect with prajwal')) {
      speak("Sure, opening Prajwal's LinkedIn profile.", undefined, true);
      window.open(portfolioData.linkedin, '_blank', 'noopener,noreferrer');
      return;
    }

    /* 2 — Navigation commands ("open X", "show X", "go to X", etc.) */
    if (hasNavIntent(text)) {
      const page = findPage(text);
      if (page) {
        speak(`Sure, opening the ${page} page.`, () => navigate(routeCommands[page]), true);
        return;
      }
      // GitHub external link via "open github"
      if (text.includes('github')) {
        speak("Sure, opening Prajwal's GitHub.", undefined, true);
        window.open(portfolioData.github, '_blank', 'noopener,noreferrer');
        return;
      }
    }

    /* 3 — Info queries ("tell me about X", "say about X", "what are his skills", etc.) */
    if (hasInfoIntent(text)) {
      const topic = findTopic(text);
      if (topic && topicResponses[topic]) {
        // Also navigate to the relevant page if it has one
        const route = routeCommands[topic];
        if (route) {
          speak(topicResponses[topic](), () => navigate(route), true);
        } else {
          speak(topicResponses[topic](), undefined, true);
        }
        return;
      }
    }

    /* 4 — Direct page name without a verb (user just says "skills" or "projects") */
    const directPage = findPage(text);
    if (directPage) {
      // If the input is very short (just the page name), navigate
      if (text.split(/\s+/).length <= 3) {
        speak(`Sure, opening the ${directPage} page.`, () => navigate(routeCommands[directPage]), true);
        return;
      }
      // Otherwise treat as info request
      if (topicResponses[directPage]) {
        speak(topicResponses[directPage](), () => navigate(routeCommands[directPage]), true);
        return;
      }
    }

    /* 5 — Keyword-based topic matching (no explicit verb, longer phrases) */
    const topic = findTopic(text);
    if (topic && topicResponses[topic]) {
      const route = routeCommands[topic];
      if (route) {
        speak(topicResponses[topic](), () => navigate(route), true);
      } else {
        speak(topicResponses[topic](), undefined, true);
      }
      return;
    }

    /* 6 — Greeting */
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(text)) {
      speak("Hello! I'm Prajwal's portfolio assistant. You can ask me to open any page, or ask about his skills, projects, education, certifications, or contact details.", undefined, true);
      return;
    }

    /* 7 — Thank you */
    if (/thank|thanks/.test(text)) {
      speak("You're welcome! Let me know if there's anything else you'd like to know.", undefined, true);
      return;
    }

    /* 8 — Help / what can you do */
    if (/help|what can you do|how do you work|what do you do/.test(text)) {
      speak("I can help you navigate this portfolio. Try saying: open projects, tell me about his skills, show certifications, or what is his education. You can also ask me to open GitHub or LinkedIn.", undefined, true);
      return;
    }

    /* 9 — Fallback */
    speak(
      "I didn't quite catch that. You can ask me things like: open projects, tell me about Prajwal, show his skills, or go to contact page.",
      undefined,
      true
    );
  };

  /* ── Speech recognition ── */
  const listen = () => {
    if (unsupported) return;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition.current = new Recognition();
    recognition.current.continuous = false;
    recognition.current.interimResults = false;
    recognition.current.lang = 'en-IN';
    recognition.current.onstart = () => setState('LISTENING');
    recognition.current.onerror = () => { setState('IDLE'); hideAfterResponse(); };
    recognition.current.onresult = (event) => { setState('THINKING'); respond(event.results[0][0].transcript); };
    recognition.current.onend = () => setState((current) => current === 'LISTENING' ? 'IDLE' : current);
    recognition.current.start();
  };

  /* ── Activation ── */
  const activate = () => {
    if (unsupported) { setActive(true); return; }
    setActive(true);
    setState('THINKING');
    speak("Hello there, I am your personal assistant. How may I help you?", listen);
  };

  /* ── Render ── */
  const visibleAvatar = active && state !== 'IDLE' && state !== 'UNSUPPORTED';
  return (
    <aside className={`voice-assistant ${active ? 'is-active' : ''} state-${state.toLowerCase()}`} aria-label="Prajwal AI assistant">
      <div className={`assistant-avatar ${visibleAvatar ? 'is-visible' : ''}`} aria-hidden="true">
        <div className="avatar-aura" />
        <div className="avatar-hair" />
        <div className="avatar-head">
          <i className="avatar-eye eye-left" />
          <i className="avatar-eye eye-right" />
          <i className="avatar-mouth" />
        </div>
        <div className="avatar-neck" />
        <div className="avatar-shoulders" />
        <i className="avatar-wave wave-one" />
        <i className="avatar-wave wave-two" />
      </div>
      <div className="assistant-orb-wrap">
        <button className="voice-button" onClick={activate} aria-label="Start Prajwal AI assistant" data-cursor="TALK">
          <span>P</span>
        </button>
        <i className="assistant-wave wave-one" />
        <i className="assistant-wave wave-two" />
      </div>
    </aside>
  );
}
