import type {
  NavItem,
  HomeContent,
  AboutContent,
  Principle,
  ProfessionalContent,
  SpiritualContent,
  FaithContent,
  EthicalContent,
} from '../types/content';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'principles', label: 'Principles' },
  { id: 'professional', label: 'Professional' },
  { id: 'spiritual', label: 'Spiritual' },
  { id: 'faith', label: 'Faith & SE' },
  { id: 'ethics', label: 'Ethics' },
];

export const homeContent: HomeContent = {
  name: 'Isaac Glad',
  title: 'Software Engineer & Faith-Driven Technologist',
  intro:
    'I build software with intention—crafting systems that are not only robust and elegant, but ethically grounded. This portfolio traces my journey as a developer and as a person of faith, exploring where engineering excellence meets spiritual responsibility.',
  resumeUrl: '#professional',
  githubUrl: 'https://github.com/gladclan',
  linkedinUrl: 'https://linkedin.com/in/isaac-glad',
  email: 'mrglad01@gmail.com',
};

export const aboutContent: AboutContent = {
  biography:
    'I am a software engineer who believes that code is never written in a vacuum — every system reflects the values of its creator. My journey began with a curiosity about how things work, evolved into a passion for building meaningful software, and deepened through a faith that asks me to consider the human impact of every decision I make. I pursue excellence not as an end in itself, but as a form of stewardship—using the skills I have been given to serve others well.',
  education: [
    {
      institution: 'Ensign College',
      degree: 'BAS Software Engineering',
      year: '2023 – 2026',
      details: 'Learned to design, build, and deploy software solutions from concept to completion using agile project management frameworks. The curriculum emphasized full-stack development, cloud deployment, and the integration of AI and large language models (LLMs) into real-world applications.',
    },
    // {
    //   institution: 'Online Certifications',
    //   degree: 'Cloud & Full-Stack Development',
    //   year: '2023–2024',
    //   details: 'AWS Solutions Architect Associate, Meta Front-End Developer Professional, and Google UX Design certificates.',
    // },
  ],
  interests: [
    'Distributed systems design',
    'Open-source contribution',
    'Technical writing and mentoring',
    'Faith and technology ethics',
    'Hiking and nature',
    'Fantasy and sci-fi novels',
  ],
  goals: [
    'Build software that genuinely serves its users and respects their dignity.',
    'Mentor junior developers, especially those from underrepresented backgrounds.',
    'Contribute to open-source projects that benefit non-profits and communities.',
    'Continue exploring the intersection of faith, ethics, and technology.',
    'Speak and write about responsible engineering practices.',
  ],
  timeline: [
    {
      year: '2018',
      title: 'First Line of Code',
      description: 'Wrote my first C# windows forms app in a high school intro CS course and was instantly hooked on the art of programming.',
    },
    {
      year: '2023',
      title: 'Beginning of Poststecondary Education',
      description: 'Started schooling at Ensign College, learning how to develop software applications, solve technical problems, work in teams, manage projects, mentor other programmers, and so much more.',
    },
    {
      year: '2026',
      title: 'First Internship',
      description: 'Accepted a request from a local company to help them get more out of their sales data by interfacing Claude AI securely with their database.',
    },
    {
      year: '2026',
      title: 'This Portfolio',
      description: 'Launched this portfolio to document my professional and spiritual journey—and the conversation between them.',
    },
    {
      year: '2027',
      title: 'Graduation and the great beyond',
      description: '',
    },
  ],
};

export const principles: Principle[] = [
  {
    id: 'connection',
    title: 'Connection to God, others, and to self',
    icon: 'HeartHandshake',
    reflection:
      'Colossians 3:23 reminds me that whatever I do, I should work at it with all my heart, as working for the Lord. This reframes excellence from self-promotion to an act of worship. When I write clean code, design thoughtful interfaces, or refactor a messy module, I am not merely being professional—I am honoring the One who gave me the ability to do this work. Excellence becomes not a burden but a joy, because the audience is always God first.',
    examples: [
      'Refactoring legacy code to be readable and maintainable, even when no one will notice.',
      'Writing thorough tests because quality is a form of stewardship, not just a metric.',
      'Reviewing pull requests with care, treating colleagues\' work with dignity.',
    ],
  },
  {
    id: 'difference',
    title: 'Making a difference',
    icon: 'Sparkles',
    reflection:
      'Software is built in layers—infrastructure, logic, interface—and integrity must run through all of them. Proverbs 11:3 says, "The integrity of the upright guides them." In practice, this means being honest about technical debt, transparent about risks, refusing to ship code I know is broken, and speaking up when a feature could harm users. Integrity is not just about not lying; it is about building systems that can be trusted because the people behind them can be trusted.',
    examples: [
      'Disclosing a security vulnerability I discovered, even when it was inconvenient.',
      'Pushing back on unrealistic deadlines that would force cutting corners on quality.',
      'Being transparent with stakeholders about what a timeline actually requires.',
    ],
  },
  {
    id: 'creativity',
    title: 'Creativity and shared experiences',
    icon: 'ShieldCheck',
    reflection:
      'Jesus said, "Whoever wants to become great among you must be your servant" (Mark 10:43). In software, this means the user is not a metric to optimize but a person to serve. It means building accessible interfaces, writing documentation that helps rather than gatekeeps, and choosing features that solve real problems rather than inflate engagement. It also means mentoring others, sharing credit, and using my platform to amplify voices that are often overlooked in tech.',
    examples: [
      'Prioritizing accessibility features even when they are not on the roadmap.',
      'Writing documentation and guides so the next developer does not struggle alone.',
      'Mentoring junior developers and advocating for their growth over my own visibility.',
    ],
  },
];

export const professionalContent: ProfessionalContent = {
  skills: [
    {
      category: 'Languages',
      skills: ['TypeScript', 'Python', 'Go', 'SQL', 'Java'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Accessibility (WCAG)'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'PostgreSQL', 'GraphQL', 'REST API Design', 'Microservices'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'CI/CD', 'Terraform', 'Monitoring & Alerting'],
    },
    {
      category: 'Practices',
      skills: ['Test-Driven Development', 'Code Review', 'Agile', 'System Design', 'Technical Writing'],
    },
  ],
  projects: [
    {
      id: 'collab-platform',
      title: 'Non-Profit Collaboration Platform',
      problem:
        'A local non-profit coordinated volunteers through spreadsheets and group chats, leading to missed shifts, duplicated efforts, and burnout among coordinators.',
      solution:
        'Built a real-time scheduling and communication platform with role-based access, automated reminders, and a mobile-first interface optimized for volunteers with limited tech experience.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'AWS Lambda'],
      challenges:
        'Many volunteers had older devices and unreliable connectivity. I had to design for low bandwidth, implement offline-first syncing, and ensure the interface was usable for non-technical users across multiple languages.',
      lessons:
        'Accessibility is not just about screen readers—it is about designing for the full range of human circumstances. I learned to test on real devices, talk to actual users, and let their needs—not my assumptions—drive decisions.',
      githubUrl: 'https://github.com',
    },
    {
      id: 'ethics-dashboard',
      title: 'AI Ethics Dashboard',
      problem:
        'A machine learning team had no systematic way to track bias, fairness metrics, or model impact across different demographic groups.',
      solution:
        'Designed and built an internal dashboard that visualizes model performance across demographic slices, flags disparities, and generates reports for compliance and ethics review boards.',
      technologies: ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL'],
      challenges:
        'Defining "fairness" is philosophically and mathematically complex. I had to build a system flexible enough to support multiple fairness definitions while making the trade-offs transparent to non-technical stakeholders.',
      lessons:
        'Technology is never neutral. Every metric we choose to optimize reflects a value judgment. Building this tool taught me that ethical engineering requires making those judgments visible and debatable, not hiding them behind algorithms.',
      githubUrl: 'https://github.com',
    },
    {
      id: 'open-source-docs',
      title: 'Open-Source Documentation Framework',
      problem:
        'Several small open-source projects had outdated, incomplete, or missing documentation, making them inaccessible to new contributors.',
      solution:
        'Created a documentation framework with templates, automated API reference generation, and a contribution guide generator that lowers the barrier for maintainers to produce high-quality docs.',
      technologies: ['TypeScript', 'Vite', 'Markdown', 'GitHub Actions'],
      challenges:
        'Documentation tools often assume a level of expertise that small project maintainers do not have. The challenge was building something powerful enough to be useful but simple enough that a solo maintainer could adopt it in an afternoon.',
      lessons:
        'Good documentation is an act of service. Every hour spent writing clear docs saves dozens of hours of confusion for others. I learned to see documentation not as a chore but as a way of loving my neighbor in the open-source community.',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
  ],
  certifications: [
    {
      title: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      details: 'Demonstrated proficiency in designing distributed systems on AWS, with a focus on reliability, cost optimization, and security best practices.',
    },
    {
      title: 'Meta Front-End Developer Professional',
      issuer: 'Meta',
      year: '2023',
      details: 'Completed a comprehensive curriculum covering React, accessibility, UX design principles, and front-end engineering best practices.',
    },
    {
      title: 'Google UX Design Professional',
      issuer: 'Google',
      year: '2023',
      details: 'Learned user-centered design methodologies, including user research, wireframing, prototyping, and usability testing.',
    },
  ],
  resume: {
    summary:
      'Software engineer with 3+ years of experience building web applications, distributed systems, and developer tools. Passionate about accessible, ethical, and well-tested software. Committed to mentoring and open-source contribution.',
    pdfUrl: '#',
  },
};

export const spiritualContent: SpiritualContent = {
  milestones: [
    {
      year: '2018',
      title: 'First Questions',
      description: 'Started asking deeper questions about purpose, meaning, and whether my work mattered beyond a paycheck.',
    },
    {
      year: '2019',
      title: 'Commitment of Faith',
      description: 'Made a personal commitment to follow Christ and began exploring what that meant for every area of life, including my career.',
    },
    {
      year: '2021',
      title: 'First Short-Term Mission Trip',
      description: 'Traveled to support a community technology literacy program. Saw firsthand how technology can empower or exclude.',
    },
    {
      year: '2022',
      title: 'Integrating Faith & Work',
      description: 'Began intentionally studying what Scripture says about work, justice, and technology. Started writing reflections on the intersection.',
    },
    {
      year: '2024',
      title: 'Leading a Faith & Tech Group',
      description: 'Started a small group for Christian tech workers to discuss ethical dilemmas, encourage one another, and pray for our work.',
    },
  ],
  scriptures: [
    {
      reference: 'Colossians 3:23',
      text: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.',
      reflection:
        'This verse reframes my entire workday. The code I write, the meetings I attend, the reviews I give—all are offered to God. It removes the divide between "sacred" and "secular" work.',
    },
    {
      reference: 'Proverbs 11:3',
      text: 'The integrity of the upright guides them, but the unfaithful are destroyed by their duplicity.',
      reflection:
        'Integrity is not just a personal virtue; it is a practical guide. In software, it means being honest about what my code can and cannot do, and never shipping something I know is broken.',
    },
    {
      reference: 'Mark 10:43-45',
      text: 'Whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all.',
      reflection:
        'Leadership in tech is often about influence, not title. This passage calls me to use whatever influence I have to serve my team, my users, and my community—not to build a platform for myself.',
    },
    {
      reference: 'Micah 6:8',
      text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.',
      reflection:
        'A framework for every technical decision: Does this act justly toward users? Does it show mercy to those it might harm? Does it reflect humility about my own limitations and biases?',
    },
  ],
  reflections: [
    {
      title: 'On Burnout and Sabbath',
      body: 'The culture of tech celebrates hustle—late nights, weekend deploys, always-on availability. But the biblical rhythm of Sabbath insists that rest is not laziness; it is trust. When I rest, I acknowledge that the world does not depend on me, that my identity is not my output, and that God sustains what I cannot. Practicing Sabbath has made me a better engineer, not a lesser one.',
    },
    {
      title: 'On Pride and Code Review',
      body: 'Code review can be a battleground for ego. I have learned to receive criticism as a gift, to give it with gentleness, and to remember that my worth is not tied to my pull request being merged. Humility in code review is a small but real way to practice the self-emptying love of Christ in a professional context.',
    },
    {
      title: 'On Building Systems That Last',
      body: 'We build software that may outlast our involvement with it. This is a form of stewardship. Am I leaving behind code that the next developer can understand and maintain? Or am I creating a burden? The parable of the talents reminds me that I will be asked to give an account for what I have been entrusted with—including my code.',
    },
  ],
  personalGrowth:
    'My spiritual journey has changed how I see my work. I no longer view my career primarily as a path to advancement but as a place of service. I am learning to pray before difficult technical decisions, to seek wisdom from Scripture when facing ethical dilemmas, and to trust that my work—when offered to God—has meaning beyond what I can see. I am not where I want to be, but I am grateful for the progress, and I am confident that He who began a good work in me will carry it on to completion.',
};

export const faithContent: FaithContent = {
  intro:
    'Software engineering and Christian faith are not separate domains. They ask overlapping questions: What does it mean to create well? Who do we serve? How do we handle power? The following reflections explore where these two worlds meet in my life.',
  topics: [
    {
      title: 'Creation and Creativity',
      body: 'Genesis opens with God creating—bringing order from chaos, calling things into being, and declaring them good. As an engineer, I participate in this creative impulse. Every system I design, every interface I build, is an act of sub-creation. This does not mean all my code is good; it means the act of creating itself reflects the image of God in me. When I build something useful, beautiful, and true, I am echoing the first chapter of Scripture.',
    },
    {
      title: 'Power and Responsibility',
      body: 'Software concentrates power. A single algorithm can shape what millions of people see, feel, and believe. Jesus consistently modeled the use of power for the flourishing of others, not for self-advancement. As a technologist, I must ask: Does the system I am building concentrate power in ways that could harm vulnerable people? Am I using my technical influence to serve or to control? Power is a stewardship, not a right.',
    },
    {
      title: 'Truth and Transparency',
      body: 'Scripture consistently aligns God with truth and light, and evil with deception and darkness. In software, deception is often subtle: dark patterns that manipulate users, metrics that mislead stakeholders, or hidden tracking that violates privacy. As a Christian engineer, I am called to build systems that are transparent about what they do, honest about their limitations, and respectful of the user\'s right to understand.',
    },
    {
      title: 'Community and Collaboration',
      body: 'The Trinity models community within unity—distinct persons working in perfect harmony. Software engineering is inherently collaborative: code reviews, pair programming, shared ownership. When I collaborate well—sharing credit, receiving correction, supporting teammates—I reflect the relational nature of the God whose image I bear. Isolation in engineering is not just inefficient; it is spiritually impoverished.',
    },
  ],
};

export const ethicalContent: EthicalContent = {
  intro:
    'Ethics in software engineering is not an add-on or a compliance checklist. It is the practice of asking, at every decision point, "Who does this affect, and how?" The following principles guide my ethical reasoning in technical work.',
  principles: [
    {
      title: 'User Dignity',
      body: 'Every user is a person made in the image of God. Systems should treat them as ends, not means. This means rejecting dark patterns, respecting privacy as a default, designing for accessibility, and never optimizing engagement at the cost of user wellbeing.',
    },
    {
      title: 'Transparency',
      body: 'Users and stakeholders deserve to understand what a system does, what data it collects, and what its limitations are. Hiding complexity to obscure harm is a form of deception. I commit to building systems whose behavior can be understood and audited.',
    },
    {
      title: 'Justice and Equity',
      body: 'Technology can amplify existing inequities or help dismantle them. I must consider who is excluded by default—whose devices, languages, abilities, or circumstances are not accounted for. Justice in software means designing for the margins, not just the majority.',
    },
    {
      title: 'Accountability',
      body: 'Systems should be auditable and their creators answerable. No algorithm should be a black box whose decisions cannot be explained or challenged. I commit to building systems where errors can be traced, harm can be remedied, and power can be checked.',
    },
  ],
  examples: [
    {
      title: 'Rejecting a Manipulative Feature',
      body: 'I was once asked to implement a notification pattern designed to create anxiety and drive compulsive engagement. I pushed back, explained the ethical concern to stakeholders, and proposed an alternative that informed users without manipulating them. The alternative was adopted.',
    },
    {
      title: 'Advocating for Accessibility',
      body: 'On a project with tight deadlines, accessibility testing was proposed to be cut. I advocated for keeping it, shared data on the impact of inaccessible design, and offered to do the testing myself to avoid schedule risk. The feature shipped accessible.',
    },
    {
      title: 'Disclosing a Data Risk',
      body: 'I discovered that a feature I was building could inadvertently expose sensitive user data under certain conditions. I immediately disclosed this to my team, paused the release, and worked with security to implement proper safeguards before shipping.',
    },
  ],
};
