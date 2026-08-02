import {
  type NavItem,
  type HomeContent,
  type AboutContent,
  type Principle,
  type ProfessionalContent,
  type SpiritualContent,
  type FaithContent,
  type EthicalContent,
  type ReflectionContent,
  values,
} from '../types/content';

const resumePdfUrl = `${import.meta.env.BASE_URL}${encodeURI('Isaac Glad Resume 2026.pdf')}`;

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'principles', label: 'Principles' },
  { id: 'professional', label: 'Professional' },
  { id: 'spiritual', label: 'Spiritual' },
  { id: 'faith', label: 'Faith & SE' },
  { id: 'ethics', label: 'Ethics' },
  { id: 'reflection', label: 'Reflection'},
];

export const homeContent: HomeContent = {
  name: 'Isaac Glad',
  title: 'Value-Driven Software Engineer',
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
      description: 'Wrote my first C# windows forms app in a high school introductory computer programming course and was instantly hooked on the art of programming.',
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
    icon: 'Shrub',
    reflection:
      "I believe that my talents and opportunities are gifts from God, meant to bless the lives of others. This principle reminds me that success is measured not only by what I accomplish, but by the positive influence I have on the people around me. Whether I'm developing software, helping someone learn, or contributing to a team, I want my work to improve lives, encourage growth, and create lasting value. Every project is an opportunity to serve with excellence and purpose.",
  },
  {
    id: 'creativity',
    title: 'Creativity and shared experiences',
    title_long: 'Encouraging creativity and sharing fun and meaningful stories and experiences',
    subtitle: 'Recognizing software as one of many creative outlets through which I can inspire, teach, and connect with others.',
    icon: 'Castle',
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
        'This project taught me how much successful software engineering depends on understanding the problem before writing code. I gained experience in system architecture, API design, database analysis, and technical documentation, while also learning the importance of security, iterative development, and clear communication with stakeholders.',
      growth: 'Not only did this project strengthen my abilities in backend development, database analysis, API design, system architecture, and secure software development, but it was reinforced by my desire to make a difference by creating software that solves meaningful problems. Rather than simply connecting an AI to a database, I focused on creating a tool that could help people make better business decisions while respecting privacy and security. It also reminded me that good stewardship includes building systems that are trustworthy and carefully designed.',
      values: [values.difference],
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
      growth: 'Developing responsive web applications and communicating technical concepts to a non-technical audience were not the only skills I developed in this project. This project directly reflects my desire to make a difference. By helping people recognize online scams, I hoped to reduce harm and empower users to make informed decisions. It reminded me that software can be used to educate, protect, and serve others.',
      githubUrl: 'https://github.com/GladClan/ScamShield',
      demoUrl: 'https://gladclan.github.io/ScamShield/',
      values: [values.difference, values.creativity],
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
      growth: 'This project emphasized the importance of connection. I learned that successful software projects depend on listening, encouraging teammates, and helping everyone contribute their strengths. Building relationships became just as important as completing technical tasks.',
      values: [values.connection, values.difference]
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
      growth: 'This project strengthened both connection and making a difference. Automating repetitive tasks wasn\'t the goal; rather, the goal of this project was to create more time for instructors and students to focus on learning. Working with my teammates reminded me that software engineering is fundamentally a collaborative profession.',
      values: [values.connection, values.difference]
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
      growth: 'This project naturally reflected all three of my guiding principles. The game\'s message centered on helping others, while the collaborative development process strengthened relationships and the creative aspects of the project reminded me that meaningful stories can inspire and encourage people.',
      githubUrl: 'https://github.com/Unity-Group-4/Lamps-Hub',
      values: [values.connection, values.difference, values.creativity]
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
      growth: 'This was my first major project, and since it is ongoing, it is still an incredible exercise to me of object-oriented programming, software architecture, and full-stack development. It has challenged me to think about maintainability, game mechanics, and user experience from the beginning of the design process. But more than that, this project reflects my love of creativity and shared experiences. I\'ve come to see software as another creative medium through which stories can be told and meaningful experiences can be shared. Building something enjoyable for others has reminded me that creativity can uplift and connect people.',
      githubUrl: 'https://github.com/GladClan/text-dungeon-crawler',
      values: [values.creativity]
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
    pdfUrl: resumePdfUrl,
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
      description: "I didn't know what to expect since I was the first in my family to take this leap and serve the Lord. But it surely wasn't the incredible feeling of teaching another person something meaningful and new while sharing and creating personal experiences. Serving as a missionary was a deeply spiritual experience that changed my life forever. " + 
        "Through it all, I learned the power of overcoming trials through serving others.",
    },
    {
      year: '2023',
      title: 'Coming home from mission service',
      description: "Something I did not expect was the trial of not knowing whether I did my best. After coming home, I struggled to know whether I had done enough. But through heartfelt and sincere connection with God, I came to know that He was—and is—proud of me as His son.",
    },
    {
      year: '2024',
      title: 'Courting my earthly angel',
      description: "It's cheesy, I know, but dating and marriage have taught me so much about God's mercy and love. There is no way I could have come together with my wife if it had not been for divine intervention. And I testify unashamedly that she is my earthly angel.\n" +
        "She is there with me in good times and bad, and she helps me feel my Saviour's love when all I want to do is curl up in a ball and block out the world. Through her, I've learned that God speaks through other people, and works miracles through those close to us.",
    },
  ],
  scriptures: [
    {
      id: 'ether-12',
      reference: 'Ether 12:27',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng&id=p27#p27',
      text: 'And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.',
      reflection:
        'To me, this scripture is a reminder of how I need to rely on the Saviour as a source of strength. It reminds me to give myself grace and not be too hard on myself, because in the Lord\'s hands, I can do incredible things.' +
          'Also, during my experience as a missionary, I realized that there is a double meaning here — the closer I get to Jesus, the more imperfect I will see myself. Realizing that helped me feel confident again when I had felt overburdened by my own imperfection.',
    },
    {
      id: 'mosiah-2',
      reference: 'Mosiah 2:17',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p17#p17',
      text: 'And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.',
      reflection:
        "This verse stands out as the clarion call of going about doing good. It came to mind as an invitation to be in the service of others, thinking of others rather than of myself. To me, this verse is a reminder of my duty and responsibility to use the gifts God has given me to bless and serve others. " +
          "And on the other side of the coin, it is a reminder and warning to not waste away the time I've been given on this earth in selfish hedonism.",
    },
    {
      id: 'mosiah-4',
      reference: 'Mosiah 4:27',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=p27#p27',
      text: 'And see that all these things are done in wisdom and order; for it is not requisite that a man should run faster than he has strength. And again, it is expedient that he should be diligent, that thereby he might win the prize; therefore, all things must be done in order.',
      reflection:
        'Like the scripture in Ether, this is a reminder to me to give myself grace and not overtax myself. Reading this, I am reminded that God is a God of order, and not panic. He trusts me to be able to do what He needs me to do.',
    },
    {
      id: 'alma-18',
      reference: 'Alma 18:24-40',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/18?lang=eng&id=p24-p40#p24',
      text: 'Ammon teaching king Lamoni, relating the teachings to what he already knew',
      reflection:
        "This story came to mind as a representative for my value of creativity and sharing stories and experiences. In this chapter, Ammon teaches king Lamoni about God, but in ways that king Lamoni is familiar with and relates to. " +
          "Ammon creates common ground between them and builds up the king's knowledge and understanding from where it is rather than being stubborn or inflexible in his explanation of the Plan and the Saviour's gospel.",
    },
    {
      id: 'alma-7',
      reference: 'Alma 7:11-12',
      hyperlink: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=eng&id=11-12#11',
      text: 'And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people.\n\n' +
        'And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities.',
      reflection: 'These verses are so special to me. Something that I find especially significant is that it doesn\'t just speak of Jesus taking my sins, but also my pains and afflictions and anywhere that I am not firm. I love that because it really shows that Jesus knows me perfectly, and that as I strive to know Him, He can also better me and heal me and even teach me about myself.'
    }
  ],
  talks: [
    {
      id: 'comparisons',
      title: '"Wrestling with Comparisons" by J.B. Haws',
      link: 'https://speeches.byu.edu/talks/j-b-haws/wrestling-with-comparisons/',
      reflection: [
        'I will forever have fond memories and a strong emotional connection to this talk. J.B. Haws speaks with passion about comparison, the thief of all joy, relating it to breathing. "It can almost feel ­reflexive—almost natural."',
        'One of Haws\' central messages is that comparison naturally turns our attention inward. We become preoccupied with questions like "Am I doing better than everyone else?" instead of "How can I bless someone today?" He argues that Christ\'s solution is to "forget yourself and start concentrating on others."',
        'In connection with Software engineering, this talk reminds me that success is not measured by outperforming others and more by how well I use my abilities to serve. As a software engineer, I hope to build tools that improve people\'s lives rather than simply demonstrate technical ability.'
      ]
    },
    {
      id: 'things',
      title: '"Things As They really Are" by Elder David A. Bednar',
      link: 'https://www.churchofjesuschrist.org/study/ensign/2010/06/things-as-they-really-are',
      reflection: [
        'This is a hard talk to listen to, I\'m sure, for gamers of this age (like myself). This message teaches that technology should always be a tool for accomplishing righteous purposes, rather than becoming the focus itself.',
        'Elder Bednar affirms that technology should be a tool for strengthening meaningful relationships and blessing people\'s lives. Personally, when I listened to this talk, it gives me hope to create technology that solves real problems and keeps people and relationships as the focus, rather than ease and pleasure.'
      ]
    },
    {
      id: 'things-2',
      title: '"Things As They really Are 2.0" also by Elder David A. Bednar',
      link: 'https://www.churchofjesuschrist.org/study/broadcasts/worldwide-devotional-for-young-adults/2024/11/13bednar',
      reflection: [
        'AI is a big part of this world — I used several different generative AI\'s to create the structure and flow of this portfolio. AI really is an incredible tool.',
        'Just as technology as a whole is a tool to strengthen relationships wit hGod and others, AI must fall under those same principles.',
        'As AI becomes an increasingly important part of software engineering, I want to use it to enhance learning, creativity, and service while remembering that ethical judgment, agency, and spiritual growth remain uniquely human responsibilities.'
      ]
    },
    {
      id: 'forgive',
      title: '"Faith to Forgive Grievous Harms: Accepting the Atonement as Restitution" by James R. Rasband',
      link: 'https://speeches.byu.edu/talks/james-r-rasband/faith-to-forgive-grievous-harms-atonement-restitution/',
      reflection: [
        'This message deepened my understanding of Christ\'s atonement. James Rasband explains that Christ not only forgives our sins, but also provides complete healing and restitution for the wrongs we experience.',
      'Forgiveness is best offered rooted in faith that even if I can\'t wholly restore or compensate for my mistakes and errors, the Saviour makes all the difference. Because of His mercy, I can seek for and extend grace trusting that I\'ll be okay, that unfairness will one day be overcome.',
      'Even the small portion of life that I\'ve experienced, I have learned how important it is to strengthen trust, strengthen relationships, and improve the lives of others. And I have surely learned that it is impossible to meaningfully progress while holding on to grudges.',
      'I think the most meaningful lesson that I learned from this talk is really what it means to extend grace to others. Considering how desperately I want and need grace, Rasband invites us to then transpose that onto others, imagining how they must desire the same grace that I do. In doing so, I find it so much easier t osee others as children of a Heavenly Father, just like me.'
      ]
    },
    {
      id: 'responsible',
      title: '"Be 100 Percent Responsible" by Elder Lynn G. Robbins',
      link: 'https://speeches.byu.edu/talks/lynn-g-robbins/be-100-percent-responsible/',
      reflection: [
        'Elder Lynn G. Robbins taught that agency and responsibility cannot be separated. His message reminds me that growth begins when I stop making excuses and focus on what I can control.',
        'This message taught me to focus on meaningful actions that lead to a solution rather than placing blame. As a result, I find myself much more aware of the worth of personal ownership and perseverance, especially in the face of mistakes and trials. I let these ideas work in me, encouraging me to accept responsibility for my work, continue learning from mistakes, and use that accountability to better serve others.'
      ]
    },
  ],
  songs: [
    {
      id: 'look',
      title: 'Look Unto Christ',
      link: 'https://youtu.be/UdjWhPoFMKE?t=130',
      reflection: [
        'I have a strong emotional connection to this song from the time I had the privilege to be a part of a choir performing it. It offers steady encouragements: "doubt not," "fear not," "heed not," "press on."',
        'The song seems to represent life, going through tribultion, doubts, conspiring foes, and mocking voices, weakness and mourning. Through all of the difficulties, it encourages me to look to the Saviour, my "Lord and Friend."'
      ]
    },
    {
      id: 'water',
      title: 'Living Water by James Thorup',
      link: 'https://www.churchofjesuschrist.org/media/video/2024-03-0060-living-water-official-track-video-feat-james-thorup-1080p-eng-mp4',
      reflection: [
        'Something that I\'ve realized I love to hear in song and story is imagery. My favorite songs evoke colors and scenes in the mind that enhance the impact of the song, bringing it to life internally. Parables are an excellent example of this - the Saviour teaching through situations and experiences that are familiar to the audience.',
        'The song Living Water is a splended example of this as well. It relates my personal spiritaul health to a garden that I am tending to. The plants and flowers in it needing attention and care, and most importantly, water.',
        'This song is a vivid reminder to me of the importance of the Saviours "living water" and the healing He brings. Without the Saviour in my life, or when I turn away, it\'s like turning a flower away from the light of the sun. As I turn back to Him, He reminds me of the healing power of His light, breathing life back into the dying flower that is my soul.'
      ]
    },
    {
      id: 'wounds',
      title: 'Behold the Wounds in Jesus\' Hands',
      link: 'https://www.churchofjesuschrist.org/media/music/songs/2025-10-behold-the-wounds-in-jesus-hands',
      reflection: [
        'I have had some growing experiences in my life that have taught me truly that the Saviour is real and has a physical presence. Singing this song is singing my testimony that Jesus did live. He suffered trials, temptation, and pain - and he did it so that He could heal and comfort me.',
        'Even more than that, He stands beside me, even when I feel so alone, like He should be upset or resentful - He isn\'t. He\'s right there beside me with a knowing smile and a hand on my shoulder, encouraging me to rise up and  get to work.'
      ]
    },
    {
      id: 'stranger',
      title: 'No Stranger',
      link: 'https://www.churchofjesuschrist.org/media/music/songs/no-stranger?lang=eng',
      reflection: [
        'I\'m sure anyone could relate when I say I\'ve had moments when I\'ve felt alone or overwhelmed by life, or when I felt that I made a mistake that leaves me feeling empty and meaningless.',
        'In many of those moments, I took time to listen to this song and be reminded that the Lord knows those feelings — Jesus is intimately aware of our low moments and how hard it can feel to repeatedly make mistakes. That\'s one of the reasons He came down, after all. So when things feel out of control, then He can step in and remind us that He is Master over wind and tempest.',
      ]
    }
  ],
  personalGrowth: [
    "As I reflect on these projects, I see more than a collection of technical accomplishments. Each experience has helped me grow not only as a software engineer but also as a disciple of Jesus Christ.",
    "Each project that I've chosen to work on relates to my principles — my personal values. To me, technical ability and spiritual growth are not separate pursuits. As I strive to strengthen my relationship with God, serve others, and cultivate creativity, those same principles influence how I design software, collaborate with others, and approach every new challenge.",
    "I also strive to use these principles to drive me in every other aspect of life as well, connecting them to how I choose to spend my time and what I devote my energy to.",
  ],
  christlikeAttributeGrowth: [
    
  ]
};

export const faithContent: FaithContent = {
  intro:
    'My faith and my work are not separate parts of my life. The principles that guide my relationship with God also influence how I design software, work with others, solve problems, and face decisions. As I continue developing as a software engineer, I hope my work reflects the same values that guide me everywhere else in life.',
  topics: [
    {
      title: 'Faith Inspires Connection',
      body: 'Genesis opens with God creating—bringing order from chaos, calling things into being, and declaring them good. As an engineer, I participate in this creative impulse. Every system I design, every interface I build, is an act of sub-creation. This does not mean all my code is good; it means the act of creating itself reflects the image of God in me. When I build something useful, beautiful, and true, I am echoing the first chapter of Scripture.',
    },
    {
      title: 'Faith Gives My Work Purpose',
      body: 'Software is one of the most powerful tools available for improving lives. Whether I am automating repetitive work, educating users, or creating meaningful experiences, I want my projects to solve real problems and leave a positive impact on the people who use them.',
    },
    {
      title: 'Faith Encourages Creativity',
      body: 'I believe creativity is one of God\'s gifts. Programming allows me to combine creativity with logic to build something that did not exist before. Whether developing games, designing software architecture, or creating educational resources, I enjoy using creativity to serve others and communicate meaningful ideas.',
    },
    {
      title: 'Ethical Responsibility',
      body: 'My faith also influences how I approach ethical decisions. Integrity, honesty, accountability, and stewardship are not simply professional expectations — they are spiritual commitments. Whether reviewing AI-generated code, protecting sensitive data, or communicating honestly about mistakes, I believe software engineers have a responsibility to use technology wisely and in ways that benefit others.',
    },
  ],
  conclusion: [
    'As technology continues to evolve, I hope to continue growing not only as a software engineer but also as a disciple of Jesus Christ.',
    'My faith reminds me that every line of code ultimately serves people, not computers. It encourages me to build strong relationships, approach challenges with integrity, and use my talents to make a positive difference. Software engineering is much more than writing code — it is the opportunity to create tools, solve problems, and improve people\'s lives.',
    'Technical skills will continue to change throughout my career, but the principles of faith, service, integrity, and creativity provide a lasting foundation for how I hope to build software and serve others. Whether collaborating with a team, designing a secure system, or creating an engaging experience, I strive to view software engineering as both a technical discipline and an act of service.',
    'Creativity, stewardship, and compassion are just as important to me as technical excellence, and I hope those principles will continue to guide my work throughout my career.',
  ]
};

export const ethicalContent: EthicalContent = {
  intro:
    'Ethics in software engineering is not an add-on or a compliance checklist. It is the practice of asking, at every decision point, "Who does this affect, and how?" The following discussion is a relevant example of how principles should guide ethical reasoning in technical work.',
  topic: 'How much autonomy should AI coding agents have, and who is responsible when an AI makes a harmful change?',
  information: [
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
      title: 'My Initial Response',
      body: 'When I first learned about this incident, my attention immediately focused on the AI itself. It seemed like another example of artificial intelligence making a costly mistake that resulted in a production outage. ' +
        'However, as I learned more about what happened, I realized the ethical issue was much broader than whether AI is trustworthy. The outage was not caused by malicious or unpredictable behavior from the AI alone—' +
        'it was the result of human decisions to grant the AI excessive permissions and allow it to perform high-impact actions without sufficient safeguards. This shifted my perspective from questioning the technology to questioning how responsibly it was being used.',
      references: [
        {
          title: 'Correcting the Financial Times report about AWS, Kiro, and AI',
          link: 'https://www.aboutamazon.com/news/aws/aws-service-outage-ai-bot-kiro',
        },
        {
          title: 'AWS Outage Was ‘Not AI’ Caused Via Kiro Coding Tool, Amazon Confirms',
          link: 'https://www.crn.com/news/cloud/2026/aws-outage-was-not-ai-caused-via-kiro-coding-tool-amazon-confirms',
        }
      ],
    },
    {
      title: 'Thinking on it further...',
      body: 'The deeper ethical dilemma is one of accountability. When AI systems become more capable and autonomous, it can be tempting to view them as independent decision-makers. In reality, software engineers and organizations remain responsible for the systems they design, configure, and deploy. ' +
        'This responsibility includes understanding the capabilities and limitations of AI tools, implementing appropriate security controls, reviewing AI-generated actions, and protecting users from unnecessary risk. Amazon\'s response reflected this principle by strengthening permission controls, ' +
        'emphasizing human oversight, and requiring safeguards such as least-privilege access and approval workflows before allowing AI agents to make significant changes.',
      references: [
        {
          title: 'Bolt Support',
          link: 'https://support.bolt.new/best-practices/prompting-effectively#:~:text=Don%E2%80%99t%20expect%20the%20LLM%20to%20have%20common%20sense.',
        },
        {
          title: 'State of Code Developer Survey report: The current reality of AI coding',
          link: 'https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding',
        },
      ],
    },
    {
      title: 'Conclusion',
      body: 'This case reinforced an important lesson for me as I prepare to enter the software engineering profession. I regularly use AI to brainstorm ideas, explain concepts, and accelerate development, but I also recognize that AI is a tool — not a substitute for professional judgment. ' +
        'Ultimately, I am accountable for the quality, security, and reliability of the software I produce. Whether reviewing AI-generated code, validating recommendations, or making deployment decisions, I believe software engineers have an ethical responsibility to understand the tools they use and to ' +
        'ensure that technology serves people safely and responsibly.',
      references: [
        {
          title: 'Amazon Kiro AI Outage: The AWS Failure That Changed AI Safety',
          link: 'https://www.ruh.ai/blogs/amazon-kiro-ai-outage-ai-governance-failure',
        },
        {
          title: 'ACM Code of Ethics and Professional Conduct',
          link: 'https://www.acm.org/code-of-ethics'
        },
      ],
    },
  ],
  principles: [
    {
      handle: 'Responsability / Accountability',
      question: 'Who is responsible when an AI agent causes harm?',
      listOpener: 'The incident demonstrated that even when an AI performs an action autonomously, humans remain responsible for AI\'s actions, including',
      listItems: [
        'granting its permissions',
        'reviewing its actions',
        'implementing safeguards, ',
        'deciding when and how it is deployed',
      ],
      close: 'In the end, it is the software engineers who need to be held accountable for the systems they build and operate.',
    },
    {
      handle: 'Avoiding Harm',
      question: 'How do engineers protect users and organizations from unnecessary risk?',
      listOpener: 'Engineers have an ethical obligation to:',
      listItems: [
        'minimize foreseeable risks',
        'thoroughly test systems',
        'implement safeguards',
        'prevent avoidable failures',
      ],
      close: 'The production outage affected AWS services and potentially customers who depended on them.',
    },
    {
      handle: 'Professional Competence',
      question: 'Should engineers understand the capabilities and limitations of AI before relying on it?',
      listOpener: 'Software engineers have a responsibility to:',
      listItems: [
        'understand the tools they use',
        'know AI\'s limitations',
        'avoid overreliance on automation',
        'continue learning as technology evolves'
      ],
      close: 'This is especially relevant because AI is still a rapidly developing technology.',
    },
  ],
  alternateSuggestion: [ // What could have been done differently?
    'Rather than enforcing the use of AI agents immediately, a more ethical approach would have been to introduce AI coding agents gradually that emphasized human oversight, collaboration, and clearly defined safeguards. Engineers should have been required to review and approve any AI-generated code or infrastructure changes before they were deployed, especially in production environments. At the organizational level, leadership should have established governance policies from the beginning, including least-privilege access, approval workflow, auditing, and clear expectations for when AI could act autonomously.',
    'This approach better reflects the ethical principles associated with the situation. Responsibility means that software engineers and organizational leaders remain accountable for the behavior of the AI systems they deploy, rather than shifting blame to the technology itself. Avoiding harm requires designing processes that minimize foreseeable risks to customers, employees, and business operations before incidents occur. Professional competence requires engineers to understand the capabilities and limitations of AI tools and to verify their work instead of assuming AI-generated actions are correct. By combining thoughtful governance with careful engineering practices, organizations can benefit from AI while protecting users, maintaining trust, and fulfilling their professional responsibilities.',
    'This approach also better reflects the values that I hold most important. Collaboration and accountability are focused on working with others, understanding one another, encouraging engineers to work together rather than relying solely on automation.',
    'Technology should have the ultimate purpose to benefit people, prioritizing reliability and protecting customers from unnecessary risk.',
    'Human wisdom and ethical judgement will always remain essential, but they can also be naturally integrated into innovation and the responsible use of powerful new tools.',
    'By combining thoughtful leadership with careful engineering practices, AWS could have embraced AI\'s benefits without sacrificing safety, trust, or professional responsibility.',
  ],
};

export const reflectionContent: ReflectionContent = {
  main: 'As I reviewed my portfolio, I realized that it tells more than the story of what I have accomplished. ' +
    'It reflects who I am striving to become as a disciple of Jesus Christ and as a software engineer. ' +
    'My values of **connection, making a difference, and creativity** are strengthened by developing Christlike attributes, and together they shape both my personal life and my professional goals.',
  attributes: [
    {
      title: 'Knowledge',
      intro: 'Every project in my portfolio represents an opportunity to learn. While I have gained technical skills in software engineering, I have also grown emotionally, spiritually, and interpersonally.',
      content: [
        {
          intro: 'How I have seen growth',
          bullets: [
            'Learned new programming languages, frameworks, and development practices',
            'Improved communication and teamwork through group projects',
            'Developed stronger leadership and problem-solving skills',
            'Increased my reliance on the Lord during difficult challenges',
          ],
        },
        {
          intro: 'How I want to continue growing',
          bullets: [
            'Continue learning throughout my career',
            'Seek both technical and spiritual knowledge',
            'Remain teachable regardless of experience',
          ],
        },
      ]
    },
    {
      title: 'Diligence',
      intro: 'I have learned that meaningful work requires initiative and consistent effort. I want to contribute because I care about making a difference, not simply because an assignment requires it.',
      content: [
        {
          intro: 'Examples from my portfolio',
          bullets: [
            'Taking leadership roles in team projects',
            'Striving to produce quality work rather than the minimum required',
            'Looking for opportunities to improve projects beyond assigned responsibilities',
          ],
        },
        {
          intro: 'Future focus',
          bullets: [
            'Continue taking initiative',
            'Finish projects with excellence',
            'Look for opportunities to serve wherever I am',
          ],
        },
      ],
      outro: '"Diligence includes doing many good things of your own free will instead of waiting for leaders to tell you what to do." — Preach My Gospel, Chapter 6'
    },
    {
      title: 'Obedience',
      intro: 'Leadership has taught me initiative, while obedience has taught me trust and humility.',
      content: [
        {
          intro: 'I strive to be obedient by',
          bullets: [
            'Following the counsel of Church leaders',
            'Honoring the covenants and standards I have chosen to live by',
            'Supporting and serving my wife',
            'Respecting direction from professors, mentors, and employers',
          ],
        },
      ],
      outro: 'Obedience reminds me that lasting success comes from aligning my life with God\'s will rather than simply following my own plans.'
    },
    {
      title: 'Humility',
      intro: 'For me, humility means recognizing that I do not know everything and being willing to learn.',
      content: [
        {
          intro: 'Humility looks like',
          bullets: [
            'Asking questions instead of pretending I already know',
            'Seeking clarification when something is unclear',
            'Accepting feedback without becoming defensive',
            'Listening to others, especially in leadership positions',
            'Putting God\'s wisdom above my own',
          ],
        },
      ],
    outro: 'This attribute has helped me become both a better teammate and a better disciple.'
    },
    {
      title: 'Hope',
      intro: 'One of my favorite teachings from Preach My Gospel says that hope is not wishful thinking but "an abiding confidence, grounded in your faith in Christ."',
      content: [
        {
          intro: 'Hope reminds me that',
          bullets: [
            'Mistakes are opportunities to learn',
            'Repentance is a source of strength, not discouragement',
            'Christ makes continual growth possible',
            'My future is built on faith in Jesus Christ rather than my own perfection',
          ],
        },
      ]
    },
  ],
  warnings: {
    intro: 'As I reflected on my habits, I identified several warning signs that indicate I am drifting away from my priorities.',
    content: [
      {
        title: 'Consuming instead of creating',
        intro: 'Sometimes I find myself watching YouTube or consuming entertainment instead of working on important responsibilities, especially when I feel overwhelmed or unsure how to begin.\nWhat this usually means is',
        bullets: [
          'I\'m avoiding something difficult',
          'I need clarity more than distraction',
        ],
      },
      {
        title: 'Feeling emotionally empty',
        intro: 'After spending too much time consuming content, I often notice an empty feeling.\nI\'ve realized that entertainment cannot replace',
        bullets: [
          'meaningful creation',
          'genuine connection',
          'spiritual nourishment',
          'purposeful work',
        ],
      },
      {
        title: 'Frustration and impatience',
        intro: 'When I become overly focused on solving one difficult problem, I can lose perspective and become impatient. Signs of this include',
        bullets: [
          'Tunnel vision',
          'Frustration',
          'Forgetting to enjoy the learning process',
          'Prioritizing productivity over peace',
        ],
      },
    ],
  },
  strategies: {
    intro: 'When I recognize these warning signs, I have several practices that help me return to what matters most.',
    content: [
      {
        intro: 'Spiritually',
        bullets: [
          'Pray and spend time in quiet meditation',
          'Study the scriptures',
          'Remember my relationship with Jesus Christ',
        ],
      },
      {
        intro: 'Personally',
        bullets: [
          'Call or spend time with my wife',
          'Connect with family or friends',
          'Focus on relationships instead of isolation',
        ],
      },
      {
        intro: 'Professionally',
        bullets: [
          'Break large tasks into smaller, manageable steps',
          'Take a short break to reset my perspective',
          'Change locations if I feel mentally stuck',
          'Return with a clearer mind instead of forcing progress',
        ],
      },
    ],
  },
  review: {
    paragraph: 'Looking back through my portfolio, I see a consistent pattern.' +
      'My projects demonstrate technical growth, but they also reflect the person I am becoming.',
    content: {
      intro: 'Throughout my portfolio, I hope others will see',
      bullets: [
        'A desire to strengthen relationships',
        'A commitment to serving others through my work',
        'A love of building meaningful solutions',
        'A growing reliance on Jesus Christ in every aspect of my life',
      ]
    },
    close: 'The portfolio is ultimately not about proving what I have accomplished. ' +
      'It is about showing the direction I am moving. ' +
      'I know I still have much to learn, but I am grateful that through Jesus Christ I can continue growing in knowledge, diligence, obedience, humility, hope, and every other Christlike attribute throughout my life.',
  },
}
