export const personal = {
  name: 'Chatla Sreevani',
  title: 'Electronics & Communication Engineer | VLSI Design Enthusiast | Semiconductor Engineer',
  intro:
    'Passionate about designing efficient semiconductor circuits, exploring memory architectures, and building reliable digital systems.',
  email: 'sreevanichatla26@gmail.com',
  phone: '+91 83409 02569',
  linkedin: 'https://www.linkedin.com/in/sreevanichatla',
  resumePath: '/memory_design.pdf',
  researchPaperUrl: 'https://ieeexplore.ieee.org/document/11213171',
  location: 'Telangana, India',
};

export const stats = [
  { value: '9.49', label: 'CGPA – B.Tech' },
  { value: '9137', label: 'AIR – GATE 2026' },
  { value: '3', label: 'Engineering Projects' },
];

export const about = {
  paragraphs: [
    "I am a 2026 Electronics and Communication Engineering graduate from CVR College of Engineering with a CGPA of 9.49. I have a strong foundation in CMOS circuit design, digital electronics, transistor-level simulation, and timing analysis.",
    "My technical interests include VLSI design, SRAM architecture, semiconductor circuits, and digital system design.",
    "I have hands-on academic project experience with 6T SRAM cell design, metastability-optimized TSPC D flip-flops, and UART controller implementation.",
    "I am familiar with industry-standard EDA tools such as Cadence Virtuoso and Synopsys Custom Compiler, and I continuously strive to strengthen my semiconductor design and verification skills.",
  ],
  info: [
    { label: 'Degree', value: 'B.Tech – Electronics & Communication Engineering' },
    { label: 'College', value: 'CVR College of Engineering' },
    { label: 'Graduation', value: '2026' },
    { label: 'CGPA', value: '9.49' },
    { label: 'Location', value: 'Telangana, India' },
  ],
};

export const skillCategories = [
  {
    title: 'CMOS Circuit Design',
    icon: 'Cpu',
    skills: [
      'MOSFET Fundamentals',
      'CMOS Inverters',
      'Transistor Sizing',
      'Sequential Circuits',
      'Timing Analysis',
    ],
  },
  {
    title: 'Memory Design Fundamentals',
    icon: 'Database',
    skills: [
      '6T SRAM Architecture',
      'Cross-Coupled Inverters',
      'Word Lines',
      'Bit Lines',
      'Read, Write & Hold Operations',
      'Static Noise Margin (SNM)',
    ],
  },
  {
    title: 'Digital Design',
    icon: 'Binary',
    skills: [
      'Verilog HDL',
      'SystemVerilog',
      'Combinational Logic',
      'Sequential Logic',
      'Finite State Machines (FSM)',
      'FIFO',
      'UART',
    ],
  },
  {
    title: 'EDA & Simulation Tools',
    icon: 'Wrench',
    skills: [
      'Cadence Virtuoso',
      'Synopsys Custom Compiler',
      'Cadence Genus',
      'LTspice',
      'Xilinx Vivado',
    ],
  },
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Python', 'C++', 'Tcl (Basic)'],
  },
];

export interface Project {
  id: string;
  title: string;
  tools: string;
  description: string;
  contributions: string[];
  visual: 'sram' | 'dff' | 'uart';
}

export const projects: Project[] = [
  {
    id: 'sram',
    title: '6T SRAM Cell Design and DC Stability Analysis',
    tools: 'Cadence Virtuoso',
    description:
      'Designed a six-transistor CMOS SRAM bit cell using cross-coupled inverters and access transistors.',
    contributions: [
      'Designed a 6T CMOS SRAM bit cell.',
      'Performed DC analysis to evaluate voltage transfer characteristics and SRAM cell stability.',
      'Analyzed butterfly curves.',
      'Evaluated Static Noise Margin (SNM).',
    ],
    visual: 'sram',
  },
  {
    id: 'dff',
    title: 'Metastability-Optimized TSPC D Flip-Flop for Vernier TDCs',
    tools: 'Synopsys Custom Compiler | 90 nm CMOS',
    description:
      'Designed and simulated a True Single-Phase Clock (TSPC) D flip-flop using 90 nm CMOS technology.',
    contributions: [
      'Designed and simulated a TSPC D flip-flop.',
      'Analyzed clock-to-Q delay.',
      'Evaluated setup time and hold time under different operating conditions.',
      'Investigated circuit-level techniques for improving timing performance and metastability behavior.',
    ],
    visual: 'dff',
  },
  {
    id: 'uart',
    title: 'UART Controller with 16× Oversampling',
    tools: 'Verilog HDL | SystemVerilog',
    description:
      'Developed a parameterizable UART transmitter and receiver with configurable baud rates and parity.',
    contributions: [
      'Developed UART transmitter and receiver.',
      'Implemented configurable baud rates and parity.',
      'Implemented 16× oversampling for reliable start-bit detection.',
      'Verified functionality using SystemVerilog testbenches and waveform analysis.',
    ],
    visual: 'uart',
  },
];

export const experience = [
  {
    company: 'nDMatrix Pvt. Ltd.',
    position: 'Research Intern',
    duration: 'February 2026 – July 2026',
    responsibilities: [
      'Studied microcontroller architecture, including processing cores, I/O controllers, and peripheral interfaces.',
      'Reviewed functional blocks and their integration within embedded control systems.',
    ],
  },
];

export const education = [
  {
    institution: 'CVR College of Engineering',
    degree: 'B.Tech in Electronics & Communication Engineering',
    period: '2022 – 2026',
    score: 'CGPA: 9.49',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Class XII – MPC',
    period: '2020 – 2022',
    score: 'Percentage: 98.6%',
    board: 'Telangana Board',
  },
  {
    institution: "St. Anne's EM High School, Nalgonda",
    degree: 'Class X – SSC',
    period: '2020',
    score: 'Percentage: 95%',
  },
];

export const educationStats = [
  { value: '9.49', label: 'B.Tech CGPA' },
  { value: '98.6%', label: 'Class XII' },
  { value: '95%', label: 'Class X' },
];

export const achievements = [
  {
    type: 'gate',
    title: 'GATE 2026',
    details: [
      'Electronics and Communication Engineering.',
      'All India Rank: 9137.',
    ],
  },
  {
    type: 'ieee',
    title: 'IEEE Publication',
    details: [
      'Co-author of the research paper:',
      '"Design of an Optimized Reversible Multiplier for Quantum-Secure Cryptographic Applications."',
      'Published in November 2025.',
    ],
  },
];

export const certifications = [
  {
    title: 'System Design through Verilog HDL',
    org: 'NPTEL',
    badge: 'Elite + Silver',
  },
  {
    title: 'VLSI SoC Design using Verilog HDL',
    org: 'Maven Silicon',
  },
  {
    title: 'Introductory-Level 5G Technical Certificate',
    org: 'Qualcomm',
  },
  {
    title: 'ISWDP Cohort-4, Levels 1, 2 and Advanced',
    org: 'IISc Bengaluru',
  },
  {
    title: 'Embedded System Developer Virtual Internship',
    org: 'Microchip',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
