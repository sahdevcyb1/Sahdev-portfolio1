export interface EducationItem {
  id: string;
  level: string;
  institution?: string;
  location?: string;
  status: string;
  score?: string;
  scoreNumeric?: number;
  description: string;
  highlight?: boolean;
  tags: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  badge: string;
  levelDescription: string;
  context: string;
  iconName: 'python' | 'database' | 'code';
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
    output?: string;
  };
  concepts: string[];
}

export interface ProjectSlot {
  id: string;
  category: string;
  title: string;
  status: 'Project slot' | 'Coming soon';
  description: string;
  technologies: string[];
  plannedFeatures: string[];
  // Customizable placeholders for when actual projects are ready
  githubUrl: string; // e.g., 'YOUR_GITHUB_URL/project-repo'
  liveDemoUrl: string; // e.g., 'YOUR_DEMO_URL'
  screenshotUrl: string; // placeholder image
}

export interface RoadmapStage {
  step: string;
  title: string;
  description: string;
  focusAreas: string[];
  status: 'In Progress' | 'Upcoming';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Sahdev Singh Jhala',
    shortName: 'Sahdev',
    eyebrow: 'COMPUTER SCIENCE ENGINEERING · JAIPUR, INDIA',
    headline: 'Learning Today, Building Tomorrow.',
    bioShort: 'First-year CSE student at JECRC University, exploring the world of programming, computer science, and software development.',
    roles: [
      'Computer Science Student',
      'Python & C Learner',
      'Future Software Engineer',
    ],
    institution: 'JECRC University',
    institutionLocation: 'Jaipur, Rajasthan, India',
    degree: 'B.Tech in Computer Science Engineering (CSE Core)',
    currentYear: 'First-year undergraduate student',
    currentDirection: 'Building strong foundations in computer science, programming, problem-solving, and software development.',
    aboutStory: `I'm Sahdev Singh Jhala, a first-year Computer Science Engineering student at JECRC University, Jaipur. I'm currently building my foundation in programming and computer science, starting with Python and SQL from my school years and continuing with C programming at university. I believe becoming a good developer is a process of consistent learning, experimentation, and turning ideas into working solutions. This portfolio is where I document my journey, showcase my progress, and share what I build along the way.`,
    quickFacts: [
      { label: 'Currently Studying', value: 'B.Tech CSE Core' },
      { label: 'University', value: 'JECRC University' },
      { label: 'Location', value: 'Jaipur, Rajasthan' },
      { label: 'Current Focus', value: 'Programming fundamentals & problem-solving' },
    ],
  },

  socials: {
    // Verified placeholders clearly marked as specified in the prompt
    emailPlaceholder: 'YOUR_EMAIL@example.com',
    linkedinPlaceholder: 'https://linkedin.com/in/YOUR_LINKEDIN_URL',
    githubPlaceholder: 'https://github.com/YOUR_GITHUB_URL',
    displayEmail: 'YOUR_EMAIL',
    displayLinkedin: 'YOUR_LINKEDIN_URL',
    displayGithub: 'YOUR_GITHUB_URL',
  },

  stats: [
    {
      value: '86.4%',
      numeric: 86.4,
      label: 'Class 10 Score',
      sublabel: 'Secondary Education',
      detail: 'Consistent academic foundation',
    },
    {
      value: '75.6%',
      numeric: 75.6,
      label: 'Class 12 Score',
      sublabel: 'Senior Secondary',
      detail: 'Science & Computer fundamentals',
    },
    {
      value: '03',
      numeric: 3,
      label: 'Languages & Tools',
      sublabel: 'Current Toolkit',
      detail: 'Python, SQL, and C',
    },
    {
      value: '01',
      numeric: 1,
      label: 'Undergraduate Year',
      sublabel: 'In Progress',
      detail: 'B.Tech CSE Core at JECRC',
    },
  ],

  education: [
    {
      id: 'btech',
      level: 'B.Tech Computer Science Engineering (Core)',
      institution: 'JECRC University, Jaipur',
      location: 'Jaipur, Rajasthan',
      status: 'First Year · Currently Pursuing',
      description: 'Building deep foundations in programming, problem-solving, algorithmic thinking, and core computer science curricula.',
      highlight: true,
      tags: ['C Programming', 'Problem Solving', 'Data Structures Intro', 'Computer Architecture Basics'],
    },
    {
      id: 'class12',
      level: 'Class 12 — Senior Secondary Education',
      status: 'Completed',
      score: '75.6%',
      scoreNumeric: 75.6,
      description: 'Explored core computer science concepts, Python scripting, and relational database fundamentals through SQL.',
      highlight: false,
      tags: ['Python Fundamentals', 'SQL Basics', 'Mathematics', 'Computer Science'],
    },
    {
      id: 'class10',
      level: 'Class 10 — Secondary Education',
      status: 'Completed',
      score: '86.4%',
      scoreNumeric: 86.4,
      description: 'Demonstrated academic diligence and strong analytical foundation across science and mathematics disciplines.',
      highlight: false,
      tags: ['Mathematics', 'Science', 'Academic Foundation'],
    },
  ] as EducationItem[],

  skills: [
    {
      id: 'python',
      name: 'Python',
      badge: 'School-level fundamentals',
      levelDescription: 'School-level fundamentals',
      context: 'Learned Python during Class 12.',
      iconName: 'python',
      codeSnippet: {
        filename: 'fundamentals.py',
        language: 'python',
        code: `# Learned during Class 12
def analyze_growth(focus, hours_daily):
    print(f"Strengthening {focus}...")
    consistency_factor = hours_daily * 365
    return f"Future impact: {consistency_factor} hrs/yr"

status = analyze_growth("CS Core Foundations", 3)
print(status)`,
        output: 'Strengthening CS Core Foundations...\nFuture impact: 1095 hrs/yr',
      },
      concepts: ['Variables & Data Types', 'Control Flow & Loops', 'Functions & Scope', 'Lists & Dictionaries', 'File Handling Basics'],
    },
    {
      id: 'sql',
      name: 'SQL',
      badge: 'School-level fundamentals',
      levelDescription: 'School-level fundamentals',
      context: 'Learned SQL during Class 12.',
      iconName: 'database',
      codeSnippet: {
        filename: 'queries.sql',
        language: 'sql',
        code: `-- Learned during Class 12: Relational queries
SELECT student_name, branch, current_year
FROM jecrc_students
WHERE branch = 'CSE Core' 
  AND current_year = 1
ORDER BY student_name ASC;`,
        output: '1 row returned (Sahdev Singh Jhala | CSE Core | 1)',
      },
      concepts: ['Relational Data Models', 'SELECT & WHERE Clauses', 'Filtering & Sorting', 'Aggregate Functions', 'Table Joins Intro'],
    },
    {
      id: 'c',
      name: 'C Programming',
      badge: 'First-year undergraduate fundamentals',
      levelDescription: 'First-year undergraduate fundamentals',
      context: 'Currently learning C as part of my B.Tech curriculum.',
      iconName: 'code',
      codeSnippet: {
        filename: 'main.c',
        language: 'c',
        code: `// University Coursework: C Language Core
#include <stdio.h>

int main(void) {
    char name[] = "Sahdev Singh Jhala";
    int year = 1;
    printf("Developer: %s\\n", name);
    printf("Status: Year %d at JECRC University\\n", year);
    return 0;
}`,
        output: 'Developer: Sahdev Singh Jhala\nStatus: Year 1 at JECRC University',
      },
      concepts: ['Syntax & Standard I/O', 'Conditionals & Loops', 'Functions & Modular Design', 'Pointers & Memory Model', 'Arrays & Strings'],
    },
  ] as SkillItem[],

  currentlyStrengthening: [
    {
      title: 'Programming fundamentals',
      description: 'Mastering algorithmic logic, clean syntax structure, and systematic code organization.',
    },
    {
      title: 'Logical thinking',
      description: 'Deconstructing problem statements into discrete algorithmic steps and mathematical proofs.',
    },
    {
      title: 'Problem-solving',
      description: 'Tackling programming challenges methodically to build debugging endurance and precision.',
    },
    {
      title: 'Understanding core computer science concepts',
      description: 'Grasping how memory, compilation, operating systems, and computer hardware interact with code.',
    },
  ],

  projectSlots: [
    {
      id: 'python-slot',
      category: 'Python Projects',
      title: 'Python Projects Slot',
      status: 'Coming soon',
      description: 'Dedicated slot for Python applications, automation scripts, and foundational problem-solving utilities created as skills expand.',
      technologies: ['Python 3', 'Standard Library', 'Algorithms', 'Scripting'],
      plannedFeatures: [
        'Modular architecture with clean code structure',
        'Command-line automation & data processing tools',
        'Unit testing and algorithmic challenge implementations',
      ],
      githubUrl: 'YOUR_GITHUB_URL/python-projects-placeholder',
      liveDemoUrl: 'YOUR_DEMO_URL',
      screenshotUrl: '/placeholder-python.svg',
    },
    {
      id: 'c-slot',
      category: 'C Programming Projects',
      title: 'C Programming Projects Slot',
      status: 'Coming soon',
      description: 'Dedicated slot for low-level system utilities, data structure implementations, and memory management exercises from university coursework.',
      technologies: ['C (C11/C17)', 'GCC Compiler', 'Data Structures', 'Memory Management'],
      plannedFeatures: [
        'Linear and non-linear data structure prototypes',
        'CLI utilities demonstrating pointer manipulation',
        'Memory optimization and file I/O operations',
      ],
      githubUrl: 'YOUR_GITHUB_URL/c-projects-placeholder',
      liveDemoUrl: 'YOUR_DEMO_URL',
      screenshotUrl: '/placeholder-c.svg',
    },
    {
      id: 'sql-slot',
      category: 'SQL & Database Projects',
      title: 'SQL & Database Projects Slot',
      status: 'Coming soon',
      description: 'Dedicated slot for relational database schemas, complex analytical queries, and structured data storage solutions.',
      technologies: ['SQL', 'Relational Databases', 'Schema Design', 'Data Normalization'],
      plannedFeatures: [
        'E-R modeling and normalized schema blueprints',
        'Analytical multi-table JOINs and query benchmarks',
        'Data integrity constraints and transactional design',
      ],
      githubUrl: 'YOUR_GITHUB_URL/sql-projects-placeholder',
      liveDemoUrl: 'YOUR_DEMO_URL',
      screenshotUrl: '/placeholder-sql.svg',
    },
  ] as ProjectSlot[],

  roadmap: [
    {
      step: '01',
      title: 'Strengthening programming fundamentals',
      description: 'Deepening core knowledge of C and Python syntax, control structures, and sound programming habits.',
      focusAreas: ['Syntax mastery', 'Control structures', 'Function modularity'],
      status: 'In Progress',
    },
    {
      step: '02',
      title: 'Practicing problem-solving and writing cleaner code',
      description: 'Developing consistent problem-solving intuition, code readability, structured debugging, and modular design.',
      focusAreas: ['Pattern recognition', 'Refactoring', 'Edge-case handling'],
      status: 'In Progress',
    },
    {
      step: '03',
      title: 'Exploring data structures and algorithms',
      description: 'Learning fundamental data structures (arrays, linked lists, stacks, queues, trees) and algorithmic time/space analysis.',
      focusAreas: ['DSA fundamentals', 'Big-O notation', 'Algorithmic efficiency'],
      status: 'Upcoming',
    },
    {
      step: '04',
      title: 'Building practical software projects',
      description: 'Applying learned concepts to build real-world software applications, command-line utilities, and database-backed programs.',
      focusAreas: ['Full project lifecycle', 'Version control (Git)', 'Application architecture'],
      status: 'Upcoming',
    },
    {
      step: '05',
      title: 'Preparing for internships and real-world development',
      description: 'Synthesizing technical knowledge, collaborative workflows, and technical communication to prepare for engineering internships.',
      focusAreas: ['Open source', 'Technical interviews', 'Production-ready code'],
      status: 'Upcoming',
    },
  ] as RoadmapStage[],
};
