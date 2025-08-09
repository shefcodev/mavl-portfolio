"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const HowIHelpYou = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Operational Chaos Resolution",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Your Operations Are Complete Chaos",
        description: "You're the bottleneck in every decision. Emails pile up faster than you can respond, important tasks slip through cracks, and your team is constantly waiting for direction. Growth feels like punishment instead of success."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Operational Command Center",
        description: "I become your operational command center—implementing bulletproof systems for calendar management, cross-department project coordination, and client relationship management that run without your constant oversight.",
        services: [
          "Strategic Calendar & Email Management for Executives",
          "Cross-Department Project Coordination & Process Optimization",
          "Client Relationship Management & Stakeholder Follow-ups",
          "Data-Driven Decision Making via Surveys & Feedback Analysis"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "Operations run smoothly whether you're there or not",
        details: [
          "You reclaim 15+ hours per week for strategic work",
          "Your team operates with clarity and urgency",
          "Recent client result: 50% reduction in 'urgent' interruptions"
        ]
      }
    },
    {
      id: 2,
      title: "Financial Management Transformation",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Money Management Gives You Nightmares",
        description: "Your books are a mess, you're not sure if you're profitable this month, and tax season gives you anxiety attacks. You're making critical business decisions with outdated or missing financial data."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Bulletproof Financial Systems",
        description: "I implement bulletproof financial systems using QuickBooks—reconciling accounts monthly, creating real-time profit/loss dashboards, and building automated invoicing that gets you paid 40% faster.",
        services: [
          "End-to-End Financial Operations (QuickBooks Reconciliation, Reporting)",
          "Cost Control: Budgeting, Expense Tracking & Cash Flow Management",
          "Scalable Invoice/Payment Systems for Multi-Chapter Organizations",
          "Crypto & Web3 Payment Gateway Integration (Stripe, Coinbase Commerce)"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "Complete financial clarity and control",
        details: [
          "You always know your exact financial position",
          "Make data-driven decisions with confidence",
          "Average result: 30% improvement in cash flow within 90 days"
        ]
      }
    },
    // Continue with all other case studies in the same format...
    {
      id: 3,
      title: "Technology Stack Optimization",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Technology Overwhelms Instead of Helps",
        description: "You have 12 different software tools that don't talk to each other. Your team enters the same data three times, automation attempts have failed, and you're drowning in manual processes that should be automatic."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Seamless Tech Stack Integration",
        description: "I audit your tech stack, eliminate redundancies, and build seamless integrations using Zapier, GoHighLevel, and custom APIs that make your tools work together like a symphony.",
        services: [
          "Business Intelligence: Advanced Analytics (Excel, Tableau, Power BI)",
          "CRM Strategy: HubSpot/Salesforce/Keap/GoHighLevel Implementation & Training",
          "Workflow Automation: Zapier/Alchemer Integration & Optimization",
          "Smart Contract Integration for Membership NFTs (ERC-721, ERC-1155)"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "Technology that works for you, not against you",
        details: [
          "One-click reporting and automatic follow-ups",
          "Systems that scale with your growth",
          "Typical result: 40% reduction in manual tasks within 60 days"
        ]
      }
    },
    {
      id: 4,
      title: "Growth Acceleration",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Growth Stalls Despite Your Best Efforts",
        description: "You're working harder than ever but revenue has plateaued. Your marketing feels scattered, lead generation is inconsistent, and you're not sure which activities actually drive results."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Data-Driven Growth Engines",
        description: "I build data-driven growth engines—creating lead generation funnels, optimizing email campaigns, and implementing performance tracking systems that show exactly what's working and what's not.",
        services: [
          "Lead Generation Funnels & Email Campaigns (25% Retention Boost)",
          "Competitive Market Analysis for Strategic Positioning",
          "Performance Metrics: Tracked KPIs to Drive Revenue Growth",
          "Web3 Community Growth: Discord/Telegram Moderation & Token-Gated Engagement"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "Predictable, measurable growth",
        details: [
          "Clear visibility into your growth metrics",
          "Consistent lead flow and marketing that actually converts",
          "Client average: 25% increase in lead-to-customer conversion"
        ]
      }
    },
    {
      id: 5,
      title: "Website Transformation",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Your Website Looks Amateur and Loads Slowly",
        description: "Your website embarrasses you instead of impressing prospects. It takes forever to load, looks outdated on mobile, and potential clients bounce before seeing what you offer."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "High-Performance Web Presence",
        description: "I design and build user-centric websites using ReactJS and Tailwind CSS—from wireframing to final deployment. Every interface is optimized for speed, conversions, and mobile experience.",
        services: [
          "Built Scalable Web Apps with ReactJS & Tailwind CSS",
          "User-Centric Design: Wireframing to Prototyping",
          "Optimized Interfaces for Speed and Conversions",
          "Web3 Frontends: Wallet Integration (MetaMask, WalletConnect) & DApp UIs"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "A web presence that converts",
        details: [
          "Professional design that impresses prospects",
          "Fast loading times and intuitive navigation",
          "Average result: 30% faster load times and improved user engagement"
        ]
      }
    },
    {
      id: 6,
      title: "Brand Differentiation",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Your Brand Looks Generic and Forgettable",
        description: "Your brand blends into the crowd. Your marketing materials look like everyone else's, your social media gets ignored, and prospects can't remember what makes you different."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Memorable Brand Identity",
        description: "I create memorable brand identities and marketing campaigns that cut through the noise—from logo design to social media strategies that increase engagement by 50%.",
        services: [
          "Social Media Campaigns (50% Engagement Increase)",
          "High-Impact Marketing Collateral (Pitch Decks, Brochures)",
          "Full Brand Identities: Logo to Style Guides",
          "DAO & Web3 Branding: Tokenomics Visuals, NFT Project Identities"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "A brand that stands out and gets remembered",
        details: [
          "Professional marketing materials that convert",
          "Social media that actually engages your audience",
          "Recent client: 50% increase in social media engagement within 3 months"
        ]
      }
    },
    {
      id: 7,
      title: "Community Building",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When Building Community Feels Impossible",
        description: "Your Discord server is a ghost town, community engagement is nonexistent, and building an active, loyal following feels like pushing water uphill."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Thriving Community Architecture",
        description: "I architect thriving Discord communities with strategic role systems, engaging bots, token-gated channels, and onboarding sequences that turn newcomers into active community champions.",
        services: [
          "Discord Community Architecture: Roles, Bots, & Token-Gated Channels",
          "Onboarding Systems for Web3 Projects (Guides, AMAs, Collab Tools)",
          "DAO Governance Support: Snapshot Voting, Proposal Templates",
          "NFT Project Management: Whitepapers, Roadmaps, Holder Engagement"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "A vibrant, self-sustaining community",
        details: [
          "Active daily engagement and successful community events",
          "Members who become your biggest advocates",
          "Typical result: 300% increase in community activity within 90 days"
        ]
      }
    }
  ];

  return (
    <section id="SolutionsAndResults" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...motionValues} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Problems | Solutions | Delivery </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transforming business challenges into measurable success stories
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((caseStudy) => (
            <motion.div 
              key={caseStudy.id}
              {...motionValues}
              className="relative group"
            >
              {/* Vertical connector line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-4 group-first:top-12 group-last:h-1/2" />

              <div className="relative pl-24">
                {/* Number indicator */}
                <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold">
                  {caseStudy.id}
                </div>

                <h3 className="text-2xl font-bold mb-8">{caseStudy.title}</h3>

                {/* Problem Section */}
                <div className="mb-10 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.problem.icon}</span>
                    <h4 className="font-bold text-red-700 dark:text-red-300">{caseStudy.problem.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.problem.statement}</h5>
                  <p className="text-gray-700 dark:text-gray-300">{caseStudy.problem.description}</p>
                </div>

                {/* Solution Section */}
                <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.solution.icon}</span>
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">{caseStudy.solution.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.solution.approach}</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.solution.description}</p>
                  <div>
                    <h6 className="font-medium mb-2">Key Services:</h6>
                    <ul className="space-y-2">
                      {caseStudy.solution.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Result Section */}
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.result.icon}</span>
                    <h4 className="font-bold text-green-700 dark:text-green-300">{caseStudy.result.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.result.outcome}</h5>
                  <ul className="space-y-2">
                    {caseStudy.result.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIHelpYou;