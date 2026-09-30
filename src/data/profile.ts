/**
 * All portfolio content lives here. Edit this file to update the site.
 * Content is taken only from the candidate's resume and LinkedIn profile.
 */

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  contribution: string[];
  outcome: string;
  tech: string[];
  repoUrl?: string; // add a GitHub repo link to show a "Code" link
  liveUrl?: string; // add a deployed link to show a "Live" link
};

export type SkillGroup = { label: string; items: string[] };

export type EducationItem = {
  institution: string;
  title: string;
  period: string;
  score?: string;
};

export const profile = {
  name: "Jilsiya Ali C",
  title: "Full-stack web developer",
  statement:
    "I build React applications with secure sign-in, API-driven data, and clear loading and error states.",
  location: "Malappuram, Kerala, India",
  email: "jilsiyaali2@gmail.com",
  phone: "8921971874",
  linkedin: "https://www.linkedin.com/in/jilsiya-ali-",
  github: "https://github.com/jiageeth",
  // Put your resume PDF in /public (e.g. /public/resume.pdf) and set this to "/resume.pdf".
  resumeUrl: "",
  about: [
    "I'm a B.Tech Computer Science student at Rajiv Gandhi Institute of Technology, Kottayam (2023 to 2027), and I'm also completing NxtWave's Industry Ready Certification in Full-stack Development.",
    "My projects focus on the parts of a web app that users notice first: signing in, protected pages, search and filters, and clear feedback while data loads or a request fails. On the server side I've used Node.js and Express, and my foundation in C, C++, data structures, algorithms and OOP keeps my code organised.",
  ],
};

export const projects: Project[] = [
  {
    name: "Jobby App",
    tagline: "Job search with login, filters and job details",
    problem:
      "Job seekers need a secure place to search openings and narrow them down without scrolling through everything.",
    solution:
      "A React job-search app where signed-in users browse listings, search by keyword, filter by employment type and salary, and open a detailed view of any job.",
    contribution: [
      "Implemented user authentication and protected routes.",
      "Built job search with employment-type and salary filters, backed by REST API calls.",
      "Developed detailed job pages with similar-job recommendations.",
      "Handled loading, success, failure and retry states so the app stays usable when requests are slow or fail.",
    ],
    outcome:
      "A complete flow from login to job details that recovers gracefully from failed requests.",
    tech: [
      "React JS",
      "JavaScript",
      "React Router",
      "REST API",
      "Cookies",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Nxt Trendz",
    tagline: "E-commerce app with product filters and a shopping cart",
    problem:
      "Online shoppers need to find products quickly, compare them by price, and keep track of what they plan to buy.",
    solution:
      "A responsive e-commerce app where authenticated users browse products, search and filter, sort by price, view product details and manage a cart.",
    contribution: [
      "Implemented secure authentication and protected routes using JWT tokens and cookies.",
      "Integrated REST APIs to fetch product lists and product details dynamically.",
      "Built filtering, search, sorting, cart management, quantity updates and checkout-related flows with React components and the Context API.",
    ],
    outcome:
      "An end-to-end shopping experience, from login to managing a cart.",
    tech: [
      "React JS",
      "JavaScript",
      "Context API",
      "React Router",
      "JWT",
      "REST API",
      "Cookies",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "NxtWatch",
    tagline: "Video streaming app with saved videos and themes",
    problem:
      "Viewers want to browse, search and revisit videos across categories without losing their place in the app.",
    solution:
      "A responsive video streaming app, inspired by platforms such as YouTube, with trending and gaming sections, search, video playback and saved videos.",
    contribution: [
      "Implemented authentication and protected routes with JWT tokens.",
      "Integrated REST APIs for videos, categories and video details.",
      "Developed search, trending, gaming, saved-video, like/dislike and theme-based interactions using React components, routing and state management.",
    ],
    outcome:
      "A multi-section streaming interface with a switchable theme and saved-video management.",
    tech: [
      "React JS",
      "JavaScript",
      "Context API",
      "React Router",
      "JWT",
      "REST API",
      "Bootstrap",
      "Cookies",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "GreenNest",
    tagline: "E-nursery site for plants and plant-care guidance",
    problem:
      "People who want to buy or grow plants need an easy way to explore options, see what suits the season, and learn how to care for them.",
    solution:
      "A responsive e-nursery web application with plant browsing, seasonal recommendations and plant-care information in a clean, intuitive interface.",
    contribution: [
      "Developed responsive pages for browsing plants and showing curated recommendations using reusable web components.",
      "Implemented structured navigation and interactive sections.",
      "Built on Node.js and Express.",
    ],
    outcome:
      "A clear, navigable nursery site covering plant discovery, seasonal picks and care guidance.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Flexbox",
      "React Router",
      "Context API",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "REST API integration"],
  },
  { label: "Databases", items: ["SQLite"] },
  {
    label: "Security and auth",
    items: ["JWT", "Cookies", "Authentication and authorization"],
  },
  {
    label: "Computer science",
    items: ["C", "C++", "Data structures and algorithms", "OOP"],
  },
  { label: "Tools and design", items: ["Git", "UI design", "UX design"] },
];

export const education: EducationItem[] = [
  {
    institution: "Rajiv Gandhi Institute of Technology, Kottayam",
    title: "B.Tech in Computer Science Engineering",
    period: "2023 to 2027",
    score: "7.2 CGPA",
  },
  {
    institution: "NxtWave Disruptive Technologies",
    title: "Industry Ready Certification in Full-stack Development",
    period: "Jan 2024 to present",
  },
  {
    institution: "KKMHSS, Cheekode",
    title: "Higher secondary (Intermediate)",
    period: "2020 to 2022",
    score: "95.0%",
  },
  {
    institution: "KKMHS, Cheekode",
    title: "Secondary School Certificate",
    period: "2019 to 2020",
    score: "10.0 CGPA",
  },
];
