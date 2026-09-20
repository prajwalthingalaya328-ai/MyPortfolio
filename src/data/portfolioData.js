export const portfolioData = {
  name: 'Prajwal N Thingalaya',
  shortName: 'PNT',
  degree: 'B.Tech - Computer Science and Engineering',
  university: 'REVA University, Bangalore',
  year: '2nd Year',
  period: '2025 - Present',
  email: 'prajwalthingalaya328@gmail.com',
  phone: '6364642835',
  github: 'https://github.com/prajwalthingalaya328-ai',
  linkedin: 'https://www.linkedin.com/in/prajwal-n-thingalaya/',
  interests: ['Web Development', 'Artificial Intelligence', 'Project Development', 'Programming'],
  skills: [
    { name: 'C', level: 'Good' },
    { name: 'Python', level: 'Basic' },
  ],
  project: {
    title: 'IoT-Based Water Quality Monitoring System',
    description: 'An IoT-based system designed to monitor water quality using sensors and provide useful monitoring data through a connected system.',
    technologies: ['ESP8266 NodeMCU', 'Turbidity Sensor', 'LCD', 'IoT', 'Arduino IDE'],
  },
  certifications: ['IBM', 'Wadhwani Foundation'],
  certificateFiles: [
    {
      issuer: 'IBM SkillsBuild',
      file: '/certificates/Python%20certificate%201.pdf',
    },
    {
      issuer: 'IBM SkillsBuild',
      file: '/certificates/python%20certificate-2.pdf',
    },
  ],
};

export const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' },
];
