import { FaLaptopCode, FaHandshake } from "react-icons/fa";
import { LuBrain, LuMessageCircle } from "react-icons/lu";

export const links = [
  { title: "About", href: "#about" },
  { title: "Stacks", href: "#stacks" },
  { title: "Projects", href: "#projects" },
  { title: "Designs", href: "#designs" },
  { title: "Resume", href: "#resume" },
  { title: "Contact", href: "#contact" },
];

export const details = {
  aboutTitle: "Hey, I’m Marvellous!",
  aboutSubtitle: "Virtual Operations Manager | Process Automation Specialist",
  aboutDesc: [
    "Offering a blend of administrative acumen, technological proficiency, and data-driven insight to propel businesses toward growth. As a virtual assistant and online business partner, I streamline operations, eliminate inefficiencies, and identify untapped opportunities for ethical, growth-oriented entrepreneurs.",
    "Going beyond traditional administrative support, I leverage automation and IT & Customer support to provide a comprehensive approach to business management. My broad skillset includes PROJECT & PRODUCT management, IT SUPPORT, and creative solutions such as GRAPHIC DESIGN and SOCIAL MEDIA MANAGEMENT. This versatility allows for seamless idea integration into diverse business needs, ensuring a tailored strategy for each client.",
    "his proactive approach fosters a collaborative environment, extends your business reach, and solidifies long-term success.", 
    "Let’s connect and build something truly remarkable together!",
    "When I’m not being all creatively administrative, I enjoy playing soccer and listening to Afrobeats, Amapiano & Jazz"
  ]
};

// My expertise lies in crafting clean, efficient code that not only meets but exceeds user expectations.

export const stacks = {
  title: "Tools & Softwares",
  description:
    "I use modern tools and technologies to build great website and web apps. My toolkit includes tools, programming languages and frameworks that help me create smooth, fast and user-friendly frontend solutions.",
  tools: [
    "Airtable",
"ActiveCampaign / Brevo / Klaviyo / MailChimp",
"Adobe After Effects",
"Adobe Illustrator",
"Adobe Photoshop",
"Adobe Premiere Pro",
"Ahrefs / SEMrush",
"Alchemer",
"Asana",
"AWS / Azure / Google Cloud Platform (GCP)",
"Basecamp",
"Buffer / Hootsuite",
"Canva",
"CapCut",
"ChatGPT / Gemini",
"Claude",
"ClickUp",
"Copy.ai / Jasper.ai",
"DALL-E / Midjourney",
"Docker",
"Eventbrite",
"Facebook",
"Figma",
"Freshsales",
"Gmail",
"Git / GitHub",
"GitHub Copilot",
"GoHighLevel",
"Google Ads",
"Google Analytics (GA4)",
"Google Cloud Platform (GCP)",
"Google Drive",
"Google Workspace (Chat & Meet)",
"Grammarly",
"HTML & XML",
"HTML / CSS",
"HubSpot",
"Instagram",
"Jira",
"Java",
"JavaScript & Node.js",
"Keap / Infusionsoft",
"LinkedIn",
"Meta Ads Manager",
"Meta Business Suite (Facebook / Instagram Ads Manager)",
"Microsoft Teams",
"Miro",
"Monday.com",
"Notion",
"Perplexity AI",
"Pinterest",
"Pipedrive",
"Python (Django / Flask)",
"QuickBooks",
"React",
"Reddit",
"Salesforce",
"Shopify",
"Slack",
"SQL",
"Tableau",
"TikTok Shop",
"Trello",
"WordPress",
"WordPress, .NET (C#)",
"X",
"YouTube",
"Zapier",
"Zoho CRM"

  ],
};


// add projects to the projects prop of the object below

export const projects = {
  title: "Projects and Certificates",
  description:
    "A collection of my work demonstrating expertise in operations, automation, and digital strategy. These projects highlight my ability to streamline processes, drive engagement, and deliver measurable results across 18 BNI chapters.",
  projects: [
    // Financial & Core Operations
    {
      id: "port1",
      title: "Full-Cycle Bookkeeping",
      description:
        "Handled financial reconciliations and payment processing for 18 BNI chapters using QuickBooks, ensuring 100% accuracy in reporting.",
      url: "",
      gitLink: "",
      src: "/images/Quickbooks1.png",
      stacks: ["QuickBooks"],
    },
    {
      id: "port2",
      title: "QuickBooks Certification",
      description:
        "Certified in QuickBooks for advanced bookkeeping and financial management.",
      url: "",
      gitLink: "",
      src: "/images/Image3a.png",
      stacks: ["QuickBooks"],
    },

    // Automation & Workflow
    {
      id: "port3",
      title: "Workflow Automation",
      description:
        "Automated repetitive tasks across chapters using Zapier, reducing manual workload by 40%.",
      url: "",
      gitLink: "",
      src: "/images/Zapier.png",
      stacks: ["Zapier"],
    },
    {
      id: "port4",
      title: "Membership Renewal Automation",
      description:
        "Built Keap (Infusionsoft) workflows to handle renewals, improving member retention by 25%.",
      url: "",
      gitLink: "",
      src: "/images/keap.png",
      stacks: ["Keap"],
    },
    {
      id: "port5",
      title: "Email Campaign Optimization",
      description:
        "Monitored and improved email open rates by 30% through automated Keap campaigns.",
      url: "",
      gitLink: "",
      src: "/images/keap 2.png",
      stacks: ["Keap"],
    },
    {
      id: "port6",
      title: "Asana Workflow Certification",
      description:
        "Certified in Asana for project management and team collaboration.",
      url: "",
      gitLink: "",
      src: "/images/Asana2.png",
      stacks: ["Asana"],
    },

    // CRM & Backend
    {
      id: "port7",
      title: "CRM Pipeline Development",
      description:
        "Built GoHighLevel CRM pipelines for lead tracking and membership follow-ups, boosting conversions by 15%.",
      url: "",
      gitLink: "",
      src: "/images/Gohighlevel1.png",
      stacks: ["GoHighLevel"],
    },
    {
      id: "port8",
      title: "Executive Backend Monitoring",
      description:
        "Managed backend systems for executive access, ensuring seamless operations across chapters.",
      url: "",
      gitLink: "",
      src: "/images/BNI Backend.png",
      stacks: ["BNI Systems"],
    },

    // Social Media & Engagement
    {
      id: "port9",
      title: "Facebook Content Strategy",
      description:
        "Led branding and engagement campaigns for 18 chapters, increasing follower growth by 50% year-over-year.",
      url: "",
      gitLink: "",
      src: "/images/Facebook.png",
      stacks: ["Facebook", "Content Strategy"],
    },
    {
      id: "port10",
      title: "LinkedIn Leadership Campaigns",
      description:
        "Developed LinkedIn strategies to highlight members and events, enhancing professional visibility.",
      url: "",
      gitLink: "",
      src: "/images/Linkedin social.png",
      stacks: ["LinkedIn", "B2B Marketing"],
    },

    // Data & Surveys
    {
      id: "port11",
      title: "Member Feedback Surveys",
      description:
        "Designed Alchemer surveys to gather insights, improving chapter satisfaction scores by 20%.",
      url: "",
      gitLink: "",
      src: "/images/Alchemer11.png",
      stacks: ["Alchemer", "Data Analysis"],
    },

    // Operations & Coordination
    {
      id: "port12",
      title: "Cross-Chapter Calendar Management",
      description:
        "Coordinated meetings and events for 18 chapters, ensuring 95% on-time execution.",
      url: "",
      gitLink: "",
      src: "/images/Calendar Management.png",
      stacks: ["Scheduling", "Operations"],
    },

    // Technical Project
    {
      id: "port13",
      title: "Portfolio Built with ReactJS",
      description:
        "Developed My portfolio using modern JavaScript (ES6+) and ReactJS.",
      url: "",
      gitLink: "",
      src: "/images/Marvel.png",
      stacks: ["React", "JavaScript"],
    },
  ],
};

// add projects to the projects prop of the object below

export const Recognition = {
  title: "Recognition",
  description:
    "Here, you'll find a collection of key works that highlight my expertise. These Recognitions represent the culmination of my skills, creativity, and passion for creating exceptional experiences.",
  projects: [
    {
      id: "port1",
      title: "Detail",
      description:
        "Contributed to the operational and member engagement strategies that led to BNI Alberta South receiving Executive Directors of the Year (2024) at the BNI Canada USA Conference; personally recognized by regional leadership for behind-the-scenes support.",
      url: "",
      gitLink: "",
      src: "/images/Moji.png",
      stacks: [""],
    },
    {
      id: "port2",
      title: "Detail",
      description:
        "Contributed to the operational and member engagement strategies that led to BNI Alberta South receiving Executive Directors of the Year (2024) at the BNI Canada USA Conference; personally recognized by regional leadership for behind-the-scenes support.",
      url: "",
      gitLink: "",
      src: "/images/Asana111.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Detail",
      description:
        "Received a congratulatory message from Aarti (ARTHY) Ahluwalia, Founder of BizStartup Inc., recognizing my 5-year anniversary at BNI Alberta South — part of the world's leading referral marketing organization. This acknowledgment reflects my consistent presence, collaboration, and impact within my professional network.",
      url: "",
      gitLink: "",
      src: "/images/arti.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Detail",
      description:
        "",
      url: "",
      gitLink: "",
      src: "/images/Arthy333.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Detail",
      description:
        "",
      url: "",
      gitLink: "",
      src: "/images/Arthy22.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Detail",
      description:
        "",
      url: "",
      gitLink: "",
      src: "/images/Megan.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Detail",
      description:
        "",
      url: "",
      gitLink: "",
      src: "/images/Sarah.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Detail",
      description:
        "",
      url: "",
      gitLink: "",
      src: "/images/Arthy44.png",
      stacks: [""],
    },
     ],
};

// add projects to the projects prop of the object below

export const designs = {
  title: "Design Portfolio",
  description:
    "A showcase of branding, web design, and visual identity projects. Each piece reflects my approach to combining strategy, aesthetics, and user experience to create memorable brands.",
  projects: [
    // Green Grub (Complete Project)
    {
      id: "design1",
      title: "Green Grub - Brand Identity",
      description:
        "Vegan restaurant branding that breaks stereotypes with bold colors and playful energy. Replaced earthy vegan clichés with vibrant greens and punchy pinks to attract a broader audience.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 1.png",
      stacks: ["Branding", "Visual Identity"],
    },
    {
      id: "design2",
      title: "Green Grub - Color Strategy",
      description:
        "High-contrast palette: fresh green for health, unexpected pink for fun. Designed to communicate that plant-based eating is diverse and exciting.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 2.png",
      stacks: ["Color Theory"],
    },
    {
      id: "design3",
      title: "Green Grub - Tone of Voice",
      description:
        "Developed a witty, inviting brand voice to make veganism accessible. Copywriting balances humor and inclusivity to appeal to vegans and flexitarians alike.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 3.png",
      stacks: ["Copywriting"],
    },
    {
      id: "design4",
      title: "Green Grub - Brand Philosophy",
      description:
        "Every meal is framed as a bold, joyful statement. Packaging and collateral reinforce the idea that veganism is a celebration, not a sacrifice.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 4.png",
      stacks: ["Packaging Design"],
    },

    // Bozin Design (Complete Project)
    {
      id: "design5",
      title: "Bozin Design - Luxury Web Experience",
      description:
        "Designed a premium website for Dubai-based interior design studio Bozin. Clean layouts, elegant typography, and smooth transitions mirror their high-end aesthetic.",
      url: "https://bozindesign.ae/",
      gitLink: "",
      src: "/images/BOZEN 1.png",
      stacks: ["Web Design", "UX/UI"],
    },
    {
      id: "design6",
      title: "Bozin Design - Project Showcase",
      description:
        "Curated portfolio section to highlight luxury renovations and bespoke styling work. Imagery-driven design puts focus on their craftsmanship.",
      url: "https://bozindesign.ae/",
      gitLink: "",
      src: "/images/BOZEN 2.png",
      stacks: ["Art Direction"],
    },
    {
      id: "design7",
      title: "Bozin Design - Responsive Framework",
      description:
        "Fully responsive site with intentional white space and device-optimized interactions. Ensures a polished experience across all platforms.",
      url: "https://bozindesign.ae/",
      gitLink: "",
      src: "/images/BOZEN 3.png",
      stacks: ["Responsive Design"],
    },

    // Neat n Nailed (Complete Project)
    {
      id: "design8",
      title: "Neat n Nailed - Nail Studio Branding",
      description:
        "Modern nail studio identity blending minimalism with bold accents. Clean lines meet vibrant colors to reflect creative self-expression.",
      url: "",
      gitLink: "",
      src: "/images/Neat and Nailed.png",
      stacks: ["Branding", "Print Design"],
    },
    {
      id: "design9",
      title: "Neat n Nailed - Visual Language",
      description:
        "Edgy yet sleek design system using white space and striking details. Proves simplicity can make a powerful statement.",
      url: "",
      gitLink: "",
      src: "/images/Neat and Nailed 2.png",
      stacks: ["Visual Systems"],
    },
    {
      id: "design10",
      title: "Neat n Nailed - Brand Voice",
      description:
        "Confident, playful tone mirroring their nail art philosophy. Marketing materials balance precision with personality.",
      url: "",
      gitLink: "",
      src: "/images/Neat and Nail 3.png",
      stacks: ["Content Strategy"],
    },

    // Revo Spot (Complete Project)
    {
      id: "design11",
      title: "Revo Spot - Grill Kitchen Branding",
      description:
        "High-energy identity for a shawarma and grill spot. Bold reds and urban vibes evoke heat, passion, and community.",
      url: "",
      gitLink: "",
      src: "/images/Revol.png",
      stacks: ["Branding", "Illustration"],
    },
    {
      id: "design12",
      title: "Revo Spot - Mascot Design",
      description:
        "Custom rebellious mascot embodying the brand’s cheeky spirit. Adds memorability to packaging and merch.",
      url: "",
      gitLink: "",
      src: "/images/Revol 2.png",
      stacks: ["Character Design"],
    },
    {
      id: "design13",
      title: "Revo Spot - Streetwise Aesthetic",
      description:
        "Typography and graphics inspired by street culture. Positions Revo Spot as a revolution in fast-casual dining.",
      url: "",
      gitLink: "",
      src: "/images/Revol 3.png",
      stacks: ["Typography"],
    },

    // Vyrux (Complete Project)
    {
      id: "design14",
      title: "Vyrux - Cybersecurity Branding",
      description:
        "Trust-driven identity for an IT security firm. Logo’s hidden shield symbolizes invisible protection.",
      url: "",
      gitLink: "",
      src: "/images/Cybersecurity 1.png",
      stacks: ["B2B Branding"],
    },
    {
      id: "design15",
      title: "Vyrux - Visual System",
      description:
        "Tech-forward design reflecting precision and reliability. Supports services from risk audits to agrotech solutions.",
      url: "",
      gitLink: "",
      src: "/images/Cybersecurity.png",
      stacks: ["Visual Identity"],
    },

    // Additional Projects (Single Images)
    {
      id: "design16",
      title: "Vivace - Fashion Branding",
      description:
        "Sophisticated identity for a contemporary fashion label. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/10.png",
      stacks: ["Fashion Branding"],
    },
    {
      id: "design17",
      title: "Fuse - Tech Startup",
      description:
        "Dynamic branding for a SaaS platform. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/Fuse.png",
      stacks: ["Tech Branding"],
    },
    {
      id: "design18",
      title: "Solbase - Minimalist Logos",
      description:
        "Geometric logo series for a design studio. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/15.png",
      stacks: ["Logo Design"],
    },
    {
      id: "design19",
      title: "ArcTri - Architecture Branding",
      description:
        "Structural identity for a boutique architecture firm. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/19.png",
      stacks: ["Architecture Branding"],
    },
  ],
};

export const resume = {
  title: "Resume",
  description:
    "My professional journey is captured in the resume you're about to view, highlighting my skills, experience and achievements. In the resume, you'll find a detailed roadmap of my career progression and the value I bring to projects.",
};

export const contact = {
  title: "Contact",
  description:
    "Looking for someone reliable, smart, and ready to take administrative stress off your plate?I'm available and ready to support your team. Let's start transforming your operations today!",
};

export const socials = [
  {
    name: "whatsapp",
    url: "https://wa.me/+2348071895503",
  },
  {
    name: "github",
    url: "https://www.github.com/marvelcruz",
  },
  {
    name: "email",
    url: "mailto:Marvellousolabode@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/marvellousolabode/",
  },
];

export const supports = [
  {
    title: "Operational Leadership & Efficiency",
    values: [
      "Strategic Calendar & Email Management for Executives",
      "Cross-Department Project Coordination & Process Optimization",
      "Client Relationship Management & Stakeholder Follow-ups",
      "Data-Driven Decision Making via Surveys & Feedback Analysis"
    ],
  },
  {
    title: "Financial Stewardship",
    values: [
      "End-to-End Financial Operations (QuickBooks Reconciliation, Reporting)",
      "Cost Control: Budgeting, Expense Tracking & Cash Flow Management",
      "Scalable Invoice/Payment Systems for Multi-Chapter Organizations",
      "Crypto & Web3 Payment Gateway Integration (Stripe, Coinbase Commerce)"
    ],
  },
  {
    title: "Technology & Automation Leadership",
    values: [
      "Business Intelligence: Advanced Analytics (Excel, Tableau, Power BI)",
      "CRM Strategy: HubSpot/Salesforce/Keap/GoHighLevel Implementation & Training",
      "Workflow Automation: Reduced Manual Tasks by 40% via Zapier/Alchemer",
      "Smart Contract Integration for Membership NFTs (ERC-721, ERC-1155)"
    ],
  },
  {
    title: "Growth & Revenue Acceleration",
    values: [
      "Lead Generation Funnels & Email Campaigns (25% Retention Boost)",
      "Competitive Market Analysis for Strategic Positioning",
      "Performance Metrics: Tracked KPIs to Drive Revenue Growth",
      "Web3 Community Growth: Discord/Telegram Moderation & Token-Gated Engagement"
    ],
  },
  {
    title: "Technical Execution (UI/UX & Development)",
    values: [
      "Built Scalable Web Apps with ReactJS & Tailwind CSS",
      "User-Centric Design: Wireframing to Prototyping",
      "Optimized Interfaces for 30% Faster Load Times",
      "Web3 Frontends: Wallet Integration (MetaMask, WalletConnect) & DApp UIs"
    ],
  },
  {
    title: "Brand Strategy & Visual Storytelling",
    values: [
      "Social Media Campaigns (50% Engagement Increase)",
      "High-Impact Marketing Collateral (Pitch Decks, Brochures)",
      "Full Brand Identities: Logo to Style Guides",
      "DAO & Web3 Branding: Tokenomics Visuals, NFT Project Identities"
    ],
  },
  {
    title: "Web3 & Community Building",
    values: [
      "Discord Community Architecture: Roles, Bots, & Token-Gated Channels",
      "Onboarding Systems for Web3 Projects (Guides, AMAs, Collab Tools)",
      "DAO Governance Support: Snapshot Voting, Proposal Templates",
      "NFT Project Management: Whitepapers, Roadmaps, Holder Engagement"
    ],
  }
];

export const works = {
  title: "Why Hire Me?",
  subtitle: "I don’t just complete tasks—I solve problems, drive efficiency, and deliver measurable impact.",
  values: [
    {
      title: "Operational Efficiency Expert",
      desc: "I automate and optimize workflows using tools like QuickBooks, Zapier, and Keap—cutting manual processes by 40% for 18 BNI chapters while maintaining 100% accuracy. Your business will run smoother, faster, and with fewer errors.",
      icon: FaLaptopCode, // Replace with FiZap/FiTrendingUp if preferred
    },
    {
      title: "Strategic Systems Builder",
      desc: "I don’t just learn your tools—I master them and propose improvements. Example: Built CRM pipelines in GoHighLevel that increased member retention by 25% through automated follow-ups.",
      icon: LuBrain, // Or FiLayers for systems thinking
    },
    {
      title: "Trusted Financial & Operational Partner",
      desc: "Managed $2M+ in chapter finances with zero discrepancies. Hiring managers sleep easier knowing I handle details like reconciling 50+ monthly transactions without oversight.",
      icon: FaHandshake, // Or FiDollarSign for finance focus
    },
    {
      title: "Clear Communicator & Force Multiplier",
      desc: "My clients and teams praise my responsiveness (avg. 1-hour email turnaround) and ability to distill complexity into actionable updates—freeing leadership to focus on growth.",
      icon: LuMessageCircle, // Or FiClock for speed
    },
  ],
};

export const stories = {
  title: "Client Success Stories",
  desc: "Appreciation & Thank You Messages from Clients and Team Members",
  values: [
    {
      title: "Chris Calon",
      desc: "Thank you Marvellous.",
    },
    {
      title: "Arthy (Aarti), BizStartup.ca",
      desc: "Hi Marvel! Thank you – it works!!!!\nThank you, Marv!!! You’re the best!\nThank you, Marvellous, for all you do – I so totally appreciate you!",
    },
    {
      title: "Natoya",
      desc: "Hi Marvel! Thank you! I knew you would have the answer – you are amazing!!!!",
    },
    {
      title: "Sarah Moss (CEO, Cornerstone of Hope)",
      desc: "Thank you, Marvellous. I can confirm we received the e-transfer donation from BNI South. I enjoy being a member of BNI.",
    },
    {
      title: "Internal Team Member (BNI LET Loop)",
      desc: "Thank you, GregT and Marvellous! I have looped the LET into this conversation so they can make the necessary decisions.",
    },
    {
      title: "Greg T (BNI Alberta South)",
      desc: "Thank you Marvellous. Appreciate the quick turn over to resolve it. Have a great rest of your day.",
    },
  ],
};

export const workPlans = {
  title: "My Approach to Your Business",
  desc: "I focus on understanding your unique needs. Then I deliver tailored solutions.",
  values: [
    {
      title: "We Know How You Work. And Wha's In Your Way",
      desc: "You didn’t start your business to chase paperwork. You started it to build, create, and provide. We understand the rhythm of your day and the chaos that admin tasks can cause. That’s why we tailor our support to fit your flow—so you stay focused on the job, not the paperwork.",
    },
    {
      title: "Real Systems Built for Real Life",
      desc: "Forget overcomplicated software and corporate fluff. We bring the kind of streamlined systems and workflows that actually work for busy trades businesses. Simple, effective tools that keep your jobs organized, your team informed, and your business moving forward.",
    },
    {
      title: "A Reliable Partner, Not Just Another Contractor",
      desc: "When you work with Joines Administration, you’re not getting a nameless assistant—you’re gaining a committed partner. We show up consistently, communicate clearly, and treat your business with the same care and attention as you do. No ghosting, no dropped balls—just real support, every time.",
    },
    {
      title: "Built to Help You Grow (Without the Burnout)",
      desc: "Whether you’re running a one-man show or leading a small crew, we’re here to help you grow at a pace that makes sense for you. From getting your processes dialed in to scaling your operations, we help you build a business that’s sustainable and profitable—without sacrificing your family time or your sanity.",
    },
    {
      title: "We Speak Your Language",
      desc: "We don’t need a crash course on your industry. We’ve worked with contractors, electricians, builders, and more. So we understand your lingo, your deadlines, and your client expectations. No need to explain the difference between a quote and an estimate, we’re already on the same page.",
    },
    {
      title: "We Understand the Trade Life",
      desc: " Early mornings, tight timelines, and last-minute changes—your day never goes exactly as planned. We understand the hustle because we’ve worked alongside trades business owners long enough to know what throws a wrench in your schedule. Our support is designed to flex with your day, not complicate it.",
    },
  ],
};

export const services = {
  title: "Specialized Services Spotlight",
  desc: "I focus on understanding your unique needs. Then I deliver tailored solutions.",
  values: [
    {
      title: "Fractional Business Management",
      desc: "High-level operational leadership without the commitment of a full-time hire. I manage your backend operations, streamline your systems, and lead your team, keeping everything aligned while you focus on growth.",
    },
    {
      title: "Remote Administration",
      desc: "Reliable, day-to-day administrative support that keeps your business moving. From managing inboxes and documents to handling quotes, invoicing, and follow-ups, I take care of the details behind the scenes.",
    },
    {
      title: "Power Project Days",
      desc: "Need fast, focused support? In just one day, I help clear your backlog or tackle high-priority tasks like vendor research, purchase order management, inbox cleanups, and system updates, giving your operations a quick, impactful boost.",
    },
    {
      title: "Customer Support Excellence",
      desc: "Deliver top-tier client service with prompt, professional handling of emails, live chats, and ticket systems, ensuring customer satisfaction and loyalty.",
    },
    {
      title: "Workflow Automation Wizardry",
      desc: "Automate repetitive tasks, integrate cloud software, and streamline your workflows, boosting efficiency and minimizing manual errors.",
    },
    {
      title: "Financial Management Simplified",
      desc: "Keep a clear view of your business finances with cash flow optimization, accurate reporting, and QuickBooks reconciliation, helping you make informed decisions with confidence.",
    },
  ],
};