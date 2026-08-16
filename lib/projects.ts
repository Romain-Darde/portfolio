export type ProjectLink =
  | { type: "repo"; url: string }
  | { type: "live"; url: string }
  | { type: "wiki"; url: string }
  | { type: "video"; url: string }
  | { type: "document"; url: string; label: string };

export type ProjectKind = "school" | "internship" | "personal";

export type Project = {
  slug: string;
  year: number;
  title: string;
  tagline: string;
  stack: string[];
  featured: boolean;
  kind: ProjectKind;
  period?: string;
  image?: string;
  sketch?: string;
  beforeAfter?: { before: string; after: string }[];
  logo?: { src: string; href: string };
  link?: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: "writing-robot",
    year: 2023,
    period: "Feb - May 2023",
    title: "Writing robot",
    tagline: "From laser-cut design to Arduino control.",
    stack: ["Arduino", "C"],
    featured: false,
    kind: "school",
    image: "/projects/writing-robot/preview.png",
    link: { type: "wiki", url: "https://wiki.fablab.sorbonne-universite.fr/BookStack/books/projets-due-2023-2024/page/projet-rob3-mathys-claudel-sarah-el-zeghendy-romain-darde" },
  },
  {
    slug: "bomberbot",
    year: 2024,
    period: "Feb - Apr 2024",
    title: "BomberBot",
    tagline: "Bomberman-style 2D game in object-oriented C++.",
    stack: ["C++", "OOP"],
    featured: false,
    kind: "school",
    image: "/projects/bomberbot/preview.png",
    link: { type: "repo", url: "https://github.com/Romain-Darde/BomberBot" },
  },
  {
    slug: "roche-meca",
    year: 2024,
    period: "Apr - Jun 2024",
    title: "Roche Meca",
    tagline: "Contributed to the integration of a FANUC M-10iD12 robotic cell for machining high-precision industrial parts.",
    stack: ["Industrial Robotics", "TopSolid", "FANUC"],
    featured: false,
    kind: "internship",
    image: "/projects/roche-meca/preview.jpeg",
    logo: {
      src: "/projects/roche-meca/logo.jpg",
      href: "https://www.roche-meca.fr/",
    },
    link: {
      type: "document",
      url: "/projects/roche-meca/recommendation-letter.pdf",
      label: "Recommendation letter",
    },
  },
  {
    slug: "apartment-renovation",
    year: 2024,
    period: "Jun 2024 - Aug 2025",
    title: "Apartment renovation",
    tagline: "Autonomously executed a complete gut renovation of a 24m² studio apartment during school breaks, managing everything from demolition to final finishes.",
    stack: ["Electricity", "Plumbing", "Carpentry","Tiling"],
    featured: false,
    kind: "personal",
    beforeAfter: [
      {
        before: "/projects/apartment-renovation/before-1.jpeg",
        after: "/projects/apartment-renovation/after-1.jpg",
      },
      {
        before: "/projects/apartment-renovation/before-2.jpeg",
        after: "/projects/apartment-renovation/after-2.jpg",
      },
      {
        before: "/projects/apartment-renovation/before-3.jpeg",
        after: "/projects/apartment-renovation/after-3.jpg",
      },
    ],
  },
  {
    slug: "dird",
    year: 2025,
    period: "Since Oct 2024",
    title: "DIRD",
    tagline:
      "Designed, developed, and deployed a B2B2C event management web platform, now live with 30 registered providers and 19 listings posted.",
    stack: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL"],
    featured: false,
        logo: {
      src: "/projects/dird/logo.png",
      href: "https://www.dird.fr/",
    },
    kind: "personal",
    image: "/projects/dird/preview.png",
    link: { type: "live", url: "https://dird.fr" },
  },
  {
    slug: "compass-robot",
    year: 2026,
    period: "Apr - Jun 2026",
    title: "Dynamic Embedded Compass robot",
    tagline:
      "Developed a real-time tracking system that keeps a physical needle pointing north, compensating for the robot's orientation.",
    stack: ["C", "Zephyr RTOS", "Threads", "STM32", "IMU"],
    featured: false,
    kind: "school",
    image: "/projects/compass_robot/preview.jpeg",
    link: {
      type: "repo",
      url: "https://github.com/romain-darde/Implementation_ROB5",
    },
  },
  {
    slug: "stanley-robotics",
    year: 2026,
    period: "Mar - Aug 2026",
    title: "Stanley Robotics",
    tagline: "Part of the robotics engineering team working on STAN the autonomous valet robot for car parking.",
    stack: ["Robotics", "Embedded Hardware & Software"],
    featured: false,
    kind: "internship",
    image: "/projects/stanley-robotics/preview.jpeg",
    sketch: "/projects/stanley-robotics/robot_sketch_1.png",
    logo: {
      src: "/projects/stanley-robotics/logo.png",
      href: "https://www.stanley-robotics.com/fr/",
    },
    link: {
      type: "document",
      url: "/projects/stanley-robotics/recommendation-letter.pdf",
      label: "Recommendation letter",
    },
  },
];