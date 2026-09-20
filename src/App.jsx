import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/ScrollProgress';
import VoiceAssistant from './components/VoiceAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import IBM from './pages/IBM';
import Wadhwani from './pages/Wadhwani';
import Education from './pages/Education';
import GitHub from './pages/GitHub';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() { return <><CustomCursor /><ScrollProgress /><Navbar /><PageTransition><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} /><Route path="/certifications" element={<Certifications />} /><Route path="/certifications/ibm" element={<IBM />} /><Route path="/certifications/wadhwani" element={<Wadhwani />} /><Route path="/education" element={<Education />} /><Route path="/github" element={<GitHub />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></PageTransition><VoiceAssistant /><Footer /></>; }
