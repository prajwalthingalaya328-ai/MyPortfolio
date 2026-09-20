export const portfolioData = {
  name: 'Prajwal N Thingalaya',
  shortName: 'PNT',
  degree: 'B.Tech - Computer Science and Engineering',
  university: 'REVA University, Bangalore',
  year: '2nd Year',
  period: '2025 - Present',
  github: 'https://github.com/prajwalthingalaya328-ai',
  linkedin: 'https://www.linkedin.com/in/prajwal-n-thingalaya/',
  interests: ['Web Development', 'Artificial Intelligence', 'Project Development', 'Programming'],
  skills: [
    { name: 'C', level: 'Good', value: 72 },
    { name: 'Python', level: 'Basic', value: 38 },
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
      title: 'Python for Data Science',
      file: '/certificates/Python%20certificate%201.pdf',
      description: 'Completed successfully. Issued/validated through IBM SkillsBuild.',
    },
    {
      issuer: 'IBM SkillsBuild',
      title: 'Data Analysis with Python',
      file: '/certificates/python%20certificate-2.pdf',
      description: 'Completed successfully. Issued/validated through IBM SkillsBuild.',
    },
  ],
  career: [
    { title: 'Software Developer', description: 'Building programming and problem-solving skills toward software development.' },
    { title: 'Full-Stack Developer', description: 'Exploring how complete web applications are designed and developed.' },
    { title: 'AI/ML Engineer', description: 'Exploring Artificial Intelligence, Machine Learning, and intelligent applications.' },
  ],
};

export const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/education', label: 'Education' },
  { path: '/career', label: 'Career' },
  { path: '/github', label: 'GitHub' },
  { path: '/contact', label: 'Contact' },
];
