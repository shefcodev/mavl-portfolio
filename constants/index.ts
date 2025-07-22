import { FaLaptopCode, FaHandshake } from "react-icons/fa";
import { LuBrain, LuMessageCircle } from "react-icons/lu";

// Navigation Links
export const links = [
  { title: "About", href: "#about" },
  { title: "Stacks", href: "#stacks" },
  { title: "Projects", href: "#projects" },
  { title: "Designs", href: "#designs" },
  { title: "Resume", href: "#resume" },
  { title: "Contact", href: "#contact" },
];

// About Section
export const details = {
  aboutTitle: "Hey, I'm Marvellous!",
  aboutSubtitle: "Strategic Virtual Assistant | Online Business Manager | Business Support Specialist",
  aboutDesc: [
    "I help businesses **grow smarter** by merging administrative expertise with automation and data-driven insights—streamlining operations, cutting inefficiencies, and unlocking opportunities.",
    "",
    "**Core Competencies:**",
    "▸ Executive Support & Tech-Driven Administration",
    "▸ Workflow Automation (JavaScript/ReactJS)", 
    "▸ Project & Product Management",
    "▸ Product Design & Digital Marketing",
    "",
    "Passionate about collaborating with **growth-minded entrepreneurs**. Let's build something remarkable!",
    "⚡ **Outside Work:** Football | Jazz | Anime"
  ]
};

// Skills & Tools
export const stacks = {
  title: "Tools & Tech Stack",
  description: "Modern toolkit for building efficient, user-friendly solutions:",
  categories: [
    {
      title: "Productivity & CRM",
      tools: ["Asana", "Zapier", "GoHighLevel", "Keap/Infusionsoft", "Hubspot", "QuickBooks"]
    },
    {
      title: "Design & Content",
      tools: ["Canva", "CapCut", "WordPress", "Tableau", "Alchemer", "Eventbrite"]
    },
    {
      title: "Development",
      tools: ["React", "JavaScript/Node.js", "HTML/XML", "CSS/Tailwind", "SQL"]
    },
    {
      title: "Social & AI",
      tools: ["ChatGPT", "LinkedIn", "Facebook", "Instagram", "YouTube", "Pinterest", "X (Twitter)"]
    }
  ]
};

// Professional Projects
export const projects = {
  title: "Professional Highlights",
  description: "Key projects demonstrating my operational and technical expertise:",
  items: [
    {
      id: "bni-1",
      title: "BNI Chapter Management",
      description: "Managed operations for 18 BNI chapters including financials, CRM automation, and member communications.",
      highlights: [
        "Implemented Keap automation for membership renewals",
        "Standardized financial reporting across all chapters",
        "Coordinated cross-chapter events and calendars"
      ],
      src: "/images/Quickbooks-dashboard.png"
    },
    {
      id: "automation-1",
      title: "Workflow Automation",
      description: "Built efficiency systems for multiple clients using GoHighLevel and Zapier.",
      src: "/images/Gohighlevel2.png"
    }
  ]
};

// Design Portfolio
export const designs = {
  title: "Design Portfolio",
  description: "Visual design projects showcasing branding and digital expertise:",
  items: [
    {
      id: "design-1",
      title: "Green Grub Branding",
      description: "Vegan restaurant identity with bold, playful aesthetic",
      src: "/images/Greencrub-1.png"
    },
    {
      id: "design-2",
      title: "Bozin Luxury Interiors",
      description: "Premium website for Dubai-based design firm",
      url: "https://bozindesign.ae/",
      src: "/images/BOZEN-1.png"
    }
  ]
};

// Other Sections
export const resume = {
  title: "Professional Background",
  description: "Detailed career progression showcasing my skills and achievements."
};

export const contact = {
  title: "Let's Connect",
  description: "Ready to streamline your operations? I'm available for new projects and collaborations."
};

// Social Links
export const socials = [
  { name: "whatsapp", url: "https://wa.me/+2348071895503" },
  { name: "github", url: "https://github.com/marvelcruz" },
  { name: "email", url: "mailto:Marvellousolabode@gmail.com" },
  { name: "linkedin", url: "https://linkedin.com/in/marvellousdolabode" }
];

// Support Services
export const supportServices = [
  {
    category: "Operational Support",
    items: [
      "Calendar & Email Management",
      "Project Coordination",
      "CRM Setup & Optimization"
    ]
  },
  {
    category: "Financial Management",
    items: [
      "QuickBooks Reconciliation",
      "Expense Tracking",
      "Invoice Processing"
    ]
  }
];

// Value Propositions
export const valueProps = [
  {
    title: "Tech-Savvy Solutions",
    icon: FaLaptopCode,
    description: "Leveraging modern tools to streamline your workflows"
  },
  {
    title: "Detail-Oriented",
    icon: FaHandshake,
    description: "Meticulous attention to every aspect of your operations"
  }
];