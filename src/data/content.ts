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
  // { id: 'faith', label: 'Faith & SE' },
  { id: 'ethics', label: 'Ethics' },
];

export const homeContent: HomeContent = {
  name: 'Isaac Glad',
  title: 'Software Engineer & Faith-Driven Technologist',
  intro:
    'Hello there! I\'m a software engineer who builds software with intention—crafting systems that are not only robust and elegant, but ethically grounded. This portfolio traces my journey as a developer and as a person of faith, exploring where engineering excellence meets spiritual responsibility.\n\n'
      + 'In a world of vibe coders, I\'m a coder who actually knows what they\'re doing.',
  resumeUrl: '#professional',
  githubUrl: 'https://github.com/gladclan',
  linkedinUrl: 'https://linkedin.com/in/isaac-glad',
  email: 'mrglad01@gmail.com',
};

export const aboutContent: AboutContent = {
  biography:
    [
      "I believe software engineering is one of today's most creative disciplines. It combines logic, problem-solving, collaboration, and innovation to create tools and experiences that can improve people's lives. As a Software Engineering student at Ensign College, I'm passionate about learning, building meaningful solutions, and producing quality work that makes a positive difference. My faith shapes the way I approach both technology and life, reminding me to build strong relationships, serve others, and continue growing through every challenge and opportunity.",
      "Whether I'm developing software, collaborating with a team, or exploring new technologies, my goal is to use my skills to create something meaningful. I hope to build software that not only solves problems but also reflects integrity, creativity, and a genuine desire to help others."
    ],
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
    'Software Development',
    'Education',
    'Game design',
    'Music',
    'Art and creativity',
    'Building meaningful user experiences',
    'Hiking and nature',
    'Legos',
    'Fantasy and sci-fi novels',
  ],
//   A slightly different approach
// Rather than a list of hobbies, consider making it a series of "I enjoy..." statements.
// For example:
// **Things I Enjoy**
//   Designing software architecture and solving complex technical problems.
//   Creating things—whether through software, music, writing, or games.
//   Learning new technologies and understanding how they work.
//   Collaborating with others to bring ideas to life.
//   Building tools that make a meaningful difference in people's lives.
//   Exploring how faith, creativity, and technology can work together to serve others.
  goals: [
    'Document and map personal strengths and skills gained during my time at Ensign College',
    'Establish a long-term goal-setting and planning routine to foster continuous spiritual and personal growth',
    'Build software that genuinely serves its users and respects their dignity.',
    'Continue exploring the intersection of faith, ethics, and technology.',
  ],
  timeline: [
    {
      year: '2016',
      title: 'The Seed was planted',
      description: 'Took an Introduction to Technology class, which introduced me to block coding. Naturally, my first creation was a simple video game.'
    },
    {
      year: '2018',
      title: 'First Line of Code',
      description: 'Wrote my first C# windows forms app in a high school intro CS course and was instantly hooked on the art of programming.',
    },
    // {
    //   year: '2021',
    //   title: 'Volunteer minister',
    //   description: 'Took time to serve, uplift, strengthen, and help people, under the direction of the Church of Jesus Christ of Latter-day Saints.'
    // },
    {
      year: '2023',
      title: 'Off to College',
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
    title: 'Connection',
    title_long: 'Connection with God, with myself, and with others',
    subtitle: 'How the principle of connection influences the way I approach my work and relationships.',
    icon: 'HeartHandshake',
    reflection:
      "This principle is rooted in Christ's invitation to love God and love our neighbors as ourselves. As I seek to strengthen my relationship with God, I gain greater clarity, purpose, and the companionship of the Holy Ghost. That spiritual foundation also helps me better understand myself and appreciate the unique perspectives and experiences of those around me. Whether I'm collaborating on a software project, listening to a teammate's ideas, or serving others, I strive to build genuine connections that foster trust, unity, and meaningful collaboration.",
  },
  {
    id: 'difference',
    title: 'Making a difference',
    title_long: 'Making a difference in the lives of those around me—my family, my friends, my community, and in my own life',
    subtitle: 'Viewing each project as an opportunity to serve others, solve meaningful problems, and leave a positive impact.',
    icon: 'Sparkles',
    reflection:
      "I believe that my talents and opportunities are gifts from God, meant to bless the lives of others. This principle reminds me that success is measured not only by what I accomplish, but by the positive influence I have on the people around me. Whether I'm developing software, helping someone learn, or contributing to a team, I want my work to improve lives, encourage growth, and create lasting value. Every project is an opportunity to serve with excellence and purpose.",
  },
  {
    id: 'creativity',
    title: 'Creativity and shared experiences',
    title_long: 'Encouraging creativity and sharing fun and meaningful stories and experiences',
    subtitle: 'Recognizing software as one of many creative outlets through which I can inspire, teach, and connect with others.',
    icon: 'ShieldCheck',
    reflection:
      "God is the ultimate Creator, and I believe creativity is one of His gifts to His children. Throughout my life I've enjoyed creating through music, writing, art, games, and now software engineering. To me, programming is more than writing code—it's another way to create meaningful experiences, solve problems, and tell stories. I also believe that fun and storytelling can be powerful tools for building relationships, teaching important ideas, and sharing truths in ways that resonate with others. Creativity becomes most meaningful when it brings people together and points them toward something greater than ourselves.",
  },
];

export const professionalContent: ProfessionalContent = {
  skills: [
    {
      category: 'Languages',
      skills: ['C#', 'TypeScript', 'Python', 'SQL', 'Java', 'YAML'],
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'React', 'Next.js', 'API Integration'],
    },
    {
      category: 'Backend',
      skills: ['ASP.NET', 'Node.js', 'REST API Design'],
    },
    // {
    //   category: 'DevOps & Cloud',
    //   skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'CI/CD', 'Terraform', 'Monitoring & Alerting'],
    // },
    {
      category: 'Practices',
      skills: ['Test-Driven Development', 'Code Review', 'Agile', 'System Design', 'Technical Writing'],
    },
  ],
  projects: [
    {
      id: 'mcp',
      title: 'SQL MCP Server',
      problem:
        'The company had a large legacy Point of Sale database containing valuable business information, but querying it required extensive SQL knowledge. Business users wanted to ask natural language questions through Claude AI without exposing sensitive customer information or requiring direct database access.',
      solution:
        "I designed and implemented a custom Model Context Protocol (MCP) server in C# that securely connected Claude AI to the company's SQL Server database. The system translated natural language requests into validated SQL queries while enforcing security rules, sanitizing sensitive information, and providing meaningful business insights.",
      technologies: ['Model Context Protocol (MCP)', 'C#', 'ASP.NET Core', 'SQL', 'REST APIs', 'GIT/GitHub', 'LAN Networking', 'Claude AI'],
      challenges:
        [
          'Reverse-engineering a complex legacy database with limited documentation',
          'Designing a semantic layer that translated business language into database structures',
          'Balancing flexibility with security and data privacy',
          'Designing a scalable architecture that could support future expansion'
        ],
      lessons:
        'This project taught me how much successful software engineering depends on understanding the problem before writing code. I gained experience in system architecture, API design, database analysis, and technical documentation, while also learning the importance of security, iterative development, and clear communication with stakeholders.'
    },
    {
      id: 'scam-awareness',
      title: 'Scam Awareness Website',
      problem:
        'Many people struggle to recognize increasingly sophisticated online scams, making them vulnerable to fraud and identity theft.',
      solution:
        'I developed an interactive educational website that teaches users how to identify common scams, recognize warning signs, and respond safely through practical examples and educational resources.',
      technologies: ['TypeScript', 'CSS', 'React', 'Vite', 'Responsive web design', 'Educational content design', ],
      challenges:
        [
          'Presenting cybersecurity concepts in language accessible to non-technical users',
          'Organizing information without overwhelming visitors',
          'Designing an engaging learning experience rather than simply listing facts'
        ],
      lessons:
        'This project reinforced the importance of designing software around the needs of its users. I learned that technical knowledge has the greatest impact when it is communicated clearly and used to help others make informed decisions.',
      githubUrl: 'https://github.com/GladClan/ScamShield',
      demoUrl: 'https://online-scam-awareness-rilp.bolt.host/'
    },
    {
      id: 'dashboard',
      title: 'Technical Writing Dashboard',
      problem:
        'Our team needed to design an interactive dashboard while simultaneously documenting each phase of the software development lifecycle for both technical and non-technical stakeholders.',
      solution:
        "As project manager, I coordinated the team's work, delegated responsibilities, tracked progress, and ensured that both the dashboard and supporting documentation met project requirements.",
      technologies: ['Microsoft Excel', 'Project Management', 'Software development lifecycle (SDLC)', 'Technical documentation', 'Team coordination', 'Presentation skills'],
      challenges:
        [
          'Coordinating schedules across multiple team members',
          'Balancing leadership responsibilities with individual technical contributions',
          'Maintaining consistent communication throughout the project',
          'Keeping documentation aligned with project progress'
        ],
      lessons:
        'Leading this project showed me that successful software development depends just as much on communication and organization as it does on technical ability. I developed greater confidence in leading teams, facilitating collaboration, and adapting to changing project needs.',
    },
    {
      id: 'github-classrooms',
      title: 'Canvas–GitHub Classroom Integration API',
      problem:
        'Managing programming assignments across Canvas and GitHub Classroom required repetitive manual work for instructors and created opportunities for human error.',
      solution:
        "Our team developed an API that integrated the two platforms to automate assignment management and streamline the grading workflow.",
      technologies: ['TypeScript', 'Project Management', 'Peer Code Reviews', 'Technical Presentations', 'Authentication', 'Team Collaboration'],
      challenges:
        [
          'Understanding two different systems and how they communicate',
          'Designing reliable API interactions',
          'Coordinating work across teammates with different experience levels',
          'Explaining technical decisions to both technical and non-technical audiences'
        ],
      lessons:
        'This project strengthened my understanding of API design and collaborative software development. I also gained valuable experience conducting peer reviews, presenting technical information, and adapting my communication style for different audiences.',
    },
    {
      id: 'lamps-game',
      title: 'Lamps Game',
      problem:
        'Our goal was to create a game that communicated a meaningful message while delivering an engaging player experience.',
      solution:
        "Our team developed a narrative-driven game centered on using one's light to help others, contributing to implementation, testing, refinement, and feature development throughout the project.",
      technologies: ['Unity Game Engine', 'C#', 'Software testing', 'UI implementation'],
      challenges:
        [
          'Balancing gameplay with storytelling',
          'Coordinating contributions across the team',
          'Identifying and fixing bugs within project deadlines',
          'Maintaining consistency throughout development'
        ],
      lessons:
        'This project taught me that software can be a powerful medium for storytelling and positive influence. I strengthened my testing, debugging, and teamwork skills while seeing firsthand how thoughtful design can create meaningful experiences for users.',
    },
    {
      id: 'text-based-rpg',
      title: 'Text-Based RPG Dungeon Crawler',
      problem:
        'I wanted to create a game that combined strategic gameplay with meaningful player choices while giving myself the opportunity to explore full-stack game development using modern technologies.',
      solution:
        "I'm developing a turn-based RPG featuring party management, tactical combat, character progression, and narrative-driven gameplay using Next.js, TypeScript, and an ASP.NET backend.",
      technologies: ['Next.js', 'TypeScript', 'C#', 'ASP.NET Core', 'Git/GitHub', 'Full-stack development', 'Data modeling', 'Backend API development'],
      challenges:
        [
          'Designing game systems that are engaging and balanced',
          'Separating game logic from presentation',
          'Managing project scope as new ideas emerge',
          'Learning how frontend and backend systems interact in a game environment'
        ],
      lessons:
        'This project has strengthened my object-oriented design skills and reinforced the value of planning before implementation. It has also reminded me that creativity and software engineering go hand in hand, as building games requires both technical problem-solving and thoughtful user experience design.',
      githubUrl: 'https://github.com/GladClan/text-dungeon-crawler',
      },
  ],
  certifications: [
    {
      title: 'Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)',
      issuer: 'Microsoft',
      year: '2024',
      details: 'I can create and edit a workbook with multiple sheets, and use graphic elements to represent data visually including professional-looking budgets, financial statements, performance charts, and data-entry logs.',
    },
    {
      title: 'CompTIA A+ Core 1 (220-1201) Cert Prep',
      issuer: 'LinkedIn Learning',
      year: '2025',
      details: 'A foundational training program covering critical hardware, networking, and cloud computing skills required for entry-level tech support roles, such as help desk specialists and IT technicians.',
    },
    {
      title: 'Networking Devices and Initial Configuration',
      issuer: 'Cisco',
      year: '2025',
      details: 'Learned characteristics and benefits of cloud and virtualization, explored how to provide Internet Protocol (IP) addresses to devices, calculate an IP addressing scheme, configured Cisco devices to create a small network and tested for connectivity issues. Participated in up to 7 labs and 12 Cisco Packet Tracer activities..',
    },
    {
      title: 'Network Support and Security',
      issuer: 'Cisco',
      year: '2025',
      details: 'Learned how to support endpoints, networks, and users including diagnostics and documentation as a member of a help desk team as well as an in-depth view of troubleshooting of networks and endpoints and knowledge and skills regarding supporting users and networks remotely. Participated in up to 10 labs and Cisco PT activities.',
    },
    {
      title: 'Network Addressing and Basic Troubleshooting',
      issuer: 'Cisco',
      year: '2025',
      details: 'Understood physical, data link and network layers, how they work together to provide end-to-end connectivity, and also understands IPv6 addressing functions and how to obtain one and the neighbor discovery process. Practiced troubleshooting skills to keep a network up and running in up to 13 Cisco Packet Tracer activities.',
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco',
      year: '2025',
      details: 'Understood the types of networks, how they work, how devices send and receive data, the types of network cabling, how IP addresses find information on the Internet, how transport and applications operate, and has practiced building a home wireless network. Participated in up to 13 Cisco Packet Tracer activities.',
    },
  ],
  resume: {
    summary:
      'Software Engineering student with experience in backend development, APIs, databases, and collaborative software projects. Passionate about creating secure, meaningful solutions through thoughtful design, continuous learning, and effective teamwork. I enjoy combining technical problem-solving with creativity to build software that serves people and makes a positive impact.',
    pdfUrl: '/Isaac%20Glad%20Resume%202026.pdf',
  },
};

export const spiritualContent: SpiritualContent = {
  milestones: [
    {
      year: '2012-2019',
      title: 'Personal experience',
      description: 'Through personal trials and difficulties, I was constantly reminded and gradually taught that I need to turn to God. By relying on Him, I can overcome adversity. Eventually I learned that adversity is there as a reminder to turn to my Heavenly Father',
    },
    {
      year: '2021',
      title: 'Two-year LDS Mission',
      description: "Being the first in my family to take this leap and server the Lord, I didn't know what to expect. But it surely wasn't the incredible feeling of teaching anotehr person something meaningful and new, sharing meaningful experiences, as well as deeply spiritual experience that changed my life forever. " + 
        "But along with that, I aso learned the power of overcoming trials through serving others.",
    },
    {
      year: '2023',
      title: 'Coming home from mission service',
      description: "Something that isn't widel recognized is the trial of not knowing whether you did your best. After coming home, I struggled to know whether I had done enough. But through heartfelt and sincere connection with God, I came to know that He was—and is—proud of me as His son.",
    },
    {
      year: '2024',
      title: 'Courting my earthly angel',
      description: "It's cheesy, I know, but dating and marriage have taught me so much about God's mercy and love. There is no way I could have gotten together with my wife if it had not been for divine intervention. And I testify unashamedly that she is my earthly angel. " +
        "She is there with me in good times and bad, and she helps me feel my Saviour's love when all I want to do is curl up in a ball and block out the world. Through her, I've learned that God speaks through other people, and works miracles through those close to us.",
    },
  ],
  scriptures: [
    {
      reference: 'Ether 12:27',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng&id=p27#p27',
      text: 'And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.',
      reflection:
        'To me, this scripture is a reminder of how I need to rely on the Saviour as a source of strength. It reminds me to give myself grace and not be too hard on myself, because in the Lord\'s hands, I can do incredible things.' +
          'Also, during my experience as a missionary, I realized that there is a double meaning here — the closer I get to Jesus, the more imperfect I will see myself. Realizing that helped me feel confident again when I had felt overburdened by my own imperfection.',
    },
    {
      reference: 'Mosiah 2:17',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p17#p17',
      text: 'And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.',
      reflection:
        "This verse stands out as the clarion call of going about doing good. It came to mind as an invitation to be in the service of others, thinking of others rather than of myself. To me, this verse is a reminder of my duty and responsibility to use the gifts God has given me to bless and serve others. " +
          "And on the other side of the coin, it is a reminder and warning to not waste away the time I've been given on this earth in selfish hedonism.",
    },
    {
      reference: 'Mosiah 4:27',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=p27#p27',
      text: 'And see that all these things are done in wisdom and order; for it is not requisite that a man should run faster than he has strength. And again, it is expedient that he should be diligent, that thereby he might win the prize; therefore, all things must be done in order.',
      reflection:
        'Like the scripture in Ether, this is a reminder to me to give myself grace and not overtax myself. Reading this, I am reminded that God is a God of order, and not panicked. He trusts me to be able to do what He needs me to do.',
    },
    {
      reference: 'Alma 18:24:40',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/18?lang=eng&id=p24-p40#p24',
      text: 'Ammon teaching king Lamoni, relating the teachings to what he already knew',
      reflection:
        "This story came to mind as a representative for my value of creativity and sharing stories and experiences. In this chapter, Ammon teaches king Lamoni about God, but in ways that king Lamoni is familiar with and relates to. " +
          "Ammon creates common ground between them and builds up the king's knowledge and understanding from where it is rather than being stubborn or inflexible in his explanation of the Plan and the Saviour's gospel.",
    },
  ],
  songs: [
    {
      title: 'Look Unto Christ',
      link: 'https://youtu.be/UdjWhPoFMKE?t=130',
      reflection: 'I have a strong emotional connection to this song from the time I had the privilege to be a part of a choir performing it. It offers steady encouragements: "doubt not," "fear not," "heed not," "press on." ' +
        'The song seems to represent life, going through tribultion, doubts, conspiring foes, and mocking voices, weakness and mourning. Through all of the difficulties, it encourages me to look to the Saviour, my "Lord and Friend."'
    },
    {
      title: 'Living Water by James Thorup',
      link: 'https://www.churchofjesuschrist.org/media/video/2024-03-0060-living-water-official-track-video-feat-james-thorup-1080p-eng-mp4',
      reflection: 'Something that I\'ve realized I love to hear in song and story is imagery. My favorite songs evoke colors and scenes in the mind that enhance the impact of the song, bringing it to life internally. Parables are an excellent example of this - ' +
        'the Saviour teaching through situations and experiences that are familiar to the audience. The song Living Water is a splended example of this as well. It relates my personal spiritaul health to a garden that I am tending to. The plants and flowers in it needing attention and care, ' +
        'and most importantly, water. This song is a vivid reminder to me of the importance of the Saviours "living water" and the healing He brings. Without the Saviour in my life, or when I turn away, it\'s like turning a flower away from the light of the sun. ' +
        'As I turn back to Him, He reminds me of the healing power of His light, breathing life back into the dying flower that is my soul.'
    },
    {
      title: 'Behold the Wounds in Jesus\' Hands',
      link: 'https://www.churchofjesuschrist.org/media/music/songs/2025-10-behold-the-wounds-in-jesus-hands',
      reflection: 'I have had some growing experiences in my life that have taught me truly that the Saviour is real and has a physical presence. Singing this song is singing my testimony that Jesus did live. He suffered trials, temptation, and pain - and he did it so that He could heal and comfort me. ' +
        'Even more than that, He stands beside me, even when I feel so alone, like He should be upset or resentful - He isn\'t. He\'s right there beside me with a knowing smile and a hand on my shoulder, encouraging me to rise up and  get to work.'
    },
  ],
  talks: [
    {
      title: '"Wrestling with Comparisons" by J.B. Haws',
      link: 'https://speeches.byu.edu/talks/j-b-haws/wrestling-with-comparisons/',
      reflection: ''
    },
    {
      title: '"Things As They really Are" by Elder David A. Bednar',
      link: 'https://www.churchofjesuschrist.org/study/ensign/2010/06/things-as-they-really-are',
      reflection: ''
    },
    {
      title: '"Things As They really Are 2.0" also by Elder David A. Bednar',
      link: 'https://www.churchofjesuschrist.org/study/broadcasts/worldwide-devotional-for-young-adults/2024/11/13bednar',
      reflection: ''
    },
    {
      title: '"Faith to Forgive Grievous Harms: Accepting the Atonement as Restitution" by James R. Rasband',
      link: 'https://speeches.byu.edu/talks/james-r-rasband/faith-to-forgive-grievous-harms-atonement-restitution/',
      reflection: 'My first experience with this BYU devotional was during my time as a missionary. The principles of this talk are truly essential, and it has helped me come to a better understanding of forgiveness and restitution. This, paired with other talks, has taught me essential lessons about forgiveness and restitution, ' +
        'as well as the power of grace - toward myself and toward others. We all want grace and forgiveness, and it is so important (even a divine command) to extend that grace and pardon to others when they make mistakes.'
    },
    {
      title: '"Be 100 Percent Responsible" by Elder Lynn G. Robbins',
      link: 'https://speeches.byu.edu/talks/lynn-g-robbins/be-100-percent-responsible/',
      reflection: ''
    },
  ],
	// - 
  personalGrowth:
    '',
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
    'Ethics in software engineering is not an add-on or a compliance checklist. It is the practice of asking, at every decision point, "Who does this affect, and how?" The following The following discussion is a relevant example of how principles should guide ethical reasoning in technical work.',
  topic: 'How much autonomy should AI coding agents have, and who is responsible when an AI makes a harmful change?',
  situation: [
    {
      title: 'What happened?',
      body: 
      [
        	'Amazon Web Services (AWS) was developing Kiro, an AI-powered coding agent designed to assist developers.',
          'During internal use, Kiro was given permission to perform operations on a production cloud environment.',
          'The AI agent deleted and recreated parts of a production environment, causing a service outage.',
          'Amazon later determined that the immediate cause was overly broad permissions granted to the AI agent by a human engineer, not malicious behavior by the AI itself.',
          'The incident became a widely discussed example of the risks associated with autonomous AI agents in software engineering.'
      ]
    },
    {
      title: 'What led up to the incident?',
      body: 
      [
        'AI coding agents were becoming increasingly capable of performing tasks beyond code generation, including interacting with cloud infrastructure.',
        'Engineers were experimenting with allowing AI agents to automate operational tasks.',
        'The AI agent was granted permissions that allowed it to make significant changes to production resources.',
        'Existing safeguards were insufficient to prevent destructive actions before they occurred.',
      ]
    },
    {
      title: 'Who was involved?',
      body: 
      [
        'Amazon engineers',
        'The AI coding agent',
        'AWS customers',
        'Amazon management',
      ]
    },
    {
      title: 'What was the response?',
      body: 
      [
        'Amazon determined that the root cause was excessive permissions assigned by a human engineer.',
        'AWS reviewed and strengthened permission controls for AI agents.',
        'Greater emphasis was placed on human oversight before allowing AI systems to perform high-impact actions.',
        'The incident reinforced the need for safeguards such as least-privilege access, approval workflows, monitoring and auditing of AI actions, and human review before executing destructive operations.',
      ]
    },
  ],
  discussionPoints: [
    {
      title: 'Initial Response',
      body: 'When I first learned about this incident, my attention immediately focused on the AI itself. It seemed like another example of artificial intelligence making a costly mistake that resulted in a production outage. ' +
        'However, as I learned more about what happened, I realized the ethical issue was much broader than whether AI is trustworthy. The outage was not caused by malicious or unpredictable behavior from the AI alone—' +
        'it was the result of human decisions to grant the AI excessive permissions and allow it to perform high-impact actions without sufficient safeguards. This shifted my perspective from questioning the technology to questioning how responsibly it was being used.',
    },
    {
      title: 'Thinking on it further...',
      body: 'The deeper ethical dilemma is one of accountability. When AI systems become more capable and autonomous, it can be tempting to view them as independent decision-makers. In reality, software engineers and organizations remain responsible for the systems they design, configure, and deploy. ' +
        'This responsibility includes understanding the capabilities and limitations of AI tools, implementing appropriate security controls, reviewing AI-generated actions, and protecting users from unnecessary risk. Amazon\'s response reflected this principle by strengthening permission controls, ' +
        'emphasizing human oversight, and requiring safeguards such as least-privilege access and approval workflows before allowing AI agents to make significant changes.',
    },
    {
      title: 'Conclusion',
      body: 'This case reinforced an important lesson for me as I prepare to enter the software engineering profession. I regularly use AI to brainstorm ideas, explain concepts, and accelerate development, but I also recognize that AI is a tool—not a substitute for professional judgment. ' +
        'Ultimately, I am accountable for the quality, security, and reliability of the software I produce. Whether reviewing AI-generated code, validating recommendations, or making deployment decisions, I believe software engineers have an ethical responsibility to understand the tools they use and to ' +
        'ensure that technology serves people safely and responsibly.',
    },
  ],
};
