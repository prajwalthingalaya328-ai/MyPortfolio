import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const unsupported = !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
const routeCommands = { home: '/', about: '/about', skills: '/skills', projects: '/projects', certifications: '/certifications', education: '/education', career: '/career', github: '/github', contact: '/contact' };
const feminineVoicePattern = /female|woman|samantha|ava|victoria|zira|jenny|aria|hazel|karen|moira|serena|susan|allison|google uk english female|microsoft.*female/i;

export default function VoiceAssistant() {
  const navigate = useNavigate();
  const recognition = useRef(null);
  const voices = useRef([]);
  const hideTimer = useRef(null);
  const [state, setState] = useState(unsupported ? 'UNSUPPORTED' : 'IDLE');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => { voices.current = window.speechSynthesis.getVoices(); };
      loadVoices();
      window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
      return () => { window.speechSynthesis.removeEventListener('voiceschanged', loadVoices); recognition.current?.stop(); window.clearTimeout(hideTimer.current); };
    }
    return () => { recognition.current?.stop(); window.clearTimeout(hideTimer.current); };
  }, []);

  const chooseVoice = () => {
    const english = voices.current.filter((voice) => /^(en-IN|en-US|en-GB)/i.test(voice.lang));
    return [...english].sort((a, b) => {
      const score = (voice) => (voice.lang.toLowerCase() === 'en-in' ? 5 : voice.lang.toLowerCase() === 'en-us' ? 4 : 3) + (feminineVoicePattern.test(voice.name) ? 5 : 0) + (/natural|premium|enhanced|neural/i.test(voice.name) ? 2 : 0);
      return score(b) - score(a);
    })[0];
  };

  const hideAfterResponse = () => { window.clearTimeout(hideTimer.current); hideTimer.current = window.setTimeout(() => { setActive(false); setState(unsupported ? 'UNSUPPORTED' : 'IDLE'); }, 650); };
  const speak = (text, onEnd, dismiss = false) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = chooseVoice();
      if (voice) utterance.voice = voice;
      utterance.rate = .92;
      utterance.pitch = 1.05;
      utterance.volume = 1;
      utterance.onstart = () => setState('SPEAKING');
      utterance.onend = () => { setState('IDLE'); onEnd?.(); if (dismiss) hideAfterResponse(); };
      window.speechSynthesis.speak(utterance);
    } else { setState('IDLE'); onEnd?.(); if (dismiss) hideAfterResponse(); }
  };

  const respond = (raw) => {
    const text = raw.toLowerCase();
    if (text.includes('linkedin') || text.includes('connect with prajwal')) { speak("Sure, opening Prajwal's LinkedIn profile.", undefined, true); window.open(portfolioData.linkedin, '_blank', 'noopener,noreferrer'); return; }
    if (text.includes('github')) { speak("Sure, opening Prajwal's GitHub.", undefined, true); window.open(portfolioData.github, '_blank', 'noopener,noreferrer'); return; }
    const wantsNavigation = ['open', 'show', 'go', 'take me', 'navigate', 'see', 'want to'].some((verb) => text.includes(verb));
    const route = wantsNavigation && Object.keys(routeCommands).find((item) => text.includes(item));
    if (route) { speak(`Sure, opening your ${route} page.`, () => navigate(routeCommands[route]), true); return; }
    if (text.includes('skill') || text.includes('programming language')) speak('Prajwal currently has good knowledge of C and basic knowledge of Python. He is also interested in web development, artificial intelligence, project development, and programming.', undefined, true);
    else if (text.includes('project') || text.includes('iot')) speak(`Prajwal's featured project is an ${portfolioData.project.title} using an ESP8266 NodeMCU, turbidity sensor, LCD, IoT technology, and Arduino IDE.`, undefined, true);
    else if (text.includes('study') || text.includes('university') || text.includes('what is prajwal studying') || text.includes('who is prajwal') || text.includes('tell me about')) speak(`Prajwal N Thingalaya is a second-year ${portfolioData.degree} student at ${portfolioData.university}.`, undefined, true);
    else if (text.includes('contact')) speak('You can connect with Prajwal through LinkedIn or GitHub.', undefined, true);
    else if (text.includes('what can he do') || text.includes('what does he do')) speak("He's currently focused on C, Python, web development, AI, and building practical projects.", undefined, true);
    else speak("Sorry, I didn't understand that. You can ask me to open a page, show your projects, tell you about Prajwal, or open GitHub or LinkedIn.", undefined, true);
  };

  const listen = () => {
    if (unsupported) return;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition.current = new Recognition();
    recognition.current.continuous = false;
    recognition.current.interimResults = false;
    recognition.current.onstart = () => setState('LISTENING');
    recognition.current.onerror = () => { setState('IDLE'); hideAfterResponse(); };
    recognition.current.onresult = (event) => { setState('THINKING'); respond(event.results[0][0].transcript); };
    recognition.current.onend = () => setState((current) => current === 'LISTENING' ? 'IDLE' : current);
    recognition.current.start();
  };

  const activate = () => {
    if (unsupported) { setActive(true); return; }
    setActive(true);
    setState('THINKING');
    speak("Hello there, I am your personal assistant. How may I help you?", listen);
  };

  const visibleAvatar = active && state !== 'IDLE' && state !== 'UNSUPPORTED';
  return <aside className={`voice-assistant ${active ? 'is-active' : ''} state-${state.toLowerCase()}`} aria-label="Prajwal AI assistant"><div className={`assistant-avatar ${visibleAvatar ? 'is-visible' : ''}`} aria-hidden="true"><div className="avatar-aura" /><div className="avatar-hair" /><div className="avatar-head"><i className="avatar-eye eye-left" /><i className="avatar-eye eye-right" /><i className="avatar-mouth" /></div><div className="avatar-neck" /><div className="avatar-shoulders" /><i className="avatar-wave wave-one" /><i className="avatar-wave wave-two" /></div><div className="assistant-orb-wrap"><button className="voice-button" onClick={activate} aria-label="Start Prajwal AI assistant" data-cursor="TALK"><span>P</span></button><i className="assistant-wave wave-one" /><i className="assistant-wave wave-two" /></div></aside>;
}
