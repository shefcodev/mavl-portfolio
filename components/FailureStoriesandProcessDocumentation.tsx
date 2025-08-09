"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const FailureStoriesandProcessDocumentation = () => {
  const caseStudies = [
    // ... (keep all existing case studies from previous implementation)
  ];

  const failureStories = [
    {
      title: "The Multi-Chapter Social Media Disaster (2022)",
      description: "I launched a unified social media strategy across all 18 BNI chapters simultaneously without testing first. Three chapters saw engagement drop 20% because their local audiences responded differently than expected.",
      lesson: "Now I always pilot new strategies with 2-3 chapters, gather feedback, and adapt before full rollout."
    },
    {
      title: "The GoHighLevel Integration That Broke Everything (2021)",
      description: "Eager to automate our member onboarding, I built a complex Zapier-GoHighLevel integration over a weekend without involving the team. Monday morning, 200+ welcome emails went to the wrong people.",
      lesson: "Learned that automation without proper testing and team training creates more chaos than it solves."
    },
    {
      title: "The Web3 Community That Went Silent (MusCatonsol, 2024)",
      description: "I focused heavily on growing our Telegram numbers (got that 56% growth) but neglected nurturing quality conversations. We hit 1,000 members but daily engagement plummeted.",
      lesson: "Realized that community size means nothing without genuine connection - now I prioritize active participation over member count."
    },
    {
      title: "The Financial Dashboard Nobody Used (2020)",
      description: "Built beautiful QuickBooks dashboards with 15+ metrics, thinking more data meant better decisions. The executive team glanced at it once and never again - too overwhelming.",
      lesson: "Now I create simple, action-focused reports showing only the 3-4 metrics that directly impact decision-making."
    }
  ];

  const methodology = [
    {
      week: "Week 1",
      title: "Shadow & Observe",
      activities: [
        "Follow team through actual daily workflows (not what they think they do)",
        "Identify where time gets lost, frustration peaks, and workarounds happen",
        "Track how information flows (or gets stuck) between departments",
        "Document the 'tribal knowledge' that only certain people know"
      ]
    },
    {
      week: "Week 2",
      title: "Map Current Reality",
      activities: [
        "Interview stakeholders individually (people speak more freely 1-on-1)",
        "Create visual workflow maps showing current process vs. intended process",
        "Identify bottlenecks, redundancies, and missing handoffs",
        "Benchmark current performance metrics"
      ]
    },
    {
      week: "Week 3",
      title: "Design With User Input",
      activities: [
        "Present findings back to team for validation and additional insights",
        "Co-create new workflows with the people who'll actually use them",
        "Build in feedback loops and escape hatches for when things go wrong",
        "Create simple prototypes or test scenarios"
      ]
    },
    {
      week: "Week 4",
      title: "Phased Implementation",
      activities: [
        "Start with least risky, highest impact changes first",
        "Train power users who can help support broader team adoption",
        "Monitor daily for first two weeks, weekly for next month",
        "Document what's working and adjust based on real usage patterns"
      ]
    }
  ];

  const teamIntegrationExamples = [
    {
      title: "Cross-Chapter Training Success",
      description: "When we implemented new CRM workflows across 18 BNI chapters, I trained chapter leaders first, who then trained their teams.",
      result: "92% adoption within 30 days and reduced my ongoing support requests by 60%."
    },
    {
      title: "Standard Operating Procedure Development",
      description: "Created step-by-step SOPs for member onboarding, event management, and financial reporting that became the template used across all 18 chapters.",
      result: "These procedures reduced new chapter setup time from 6 weeks to 2 weeks."
    },
    {
      title: "Mentorship & Knowledge Transfer",
      description: "Trained 2 junior administrators on advanced QuickBooks reconciliation and social media management.",
      result: "Both now independently manage 4-6 chapters each, allowing me to focus on higher-level automation and strategic projects."
    },
    {
      title: "Emergency Response Coordination",
      description: "When system crashes reduced our uptime by 40%, I established a rapid response protocol involving chapter leaders, IT support, and member communication.",
      result: "This team-based approach reduced average downtime from 4 hours to 45 minutes."
    },
    {
      title: "Campaign Collaboration Success (keeK Marketing)",
      description: "Rather than working in isolation, I established weekly creative reviews with client teams.",
      result: "This collaborative approach improved campaign performance by 25% and reduced revision cycles from 3-4 rounds to 1-2 rounds per project."
    }
  ];

  return (
    <section id="SolutionsAndResults" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case Studies Section */}
        <motion.div {...motionValues} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Problems | Solutions | Delivery</h2>
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

        {/* Failure Stories Section */}
        <motion.div {...motionValues} className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">What Didn't Work (And What I Learned)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {failureStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-3 text-yellow-600 dark:text-yellow-400">{story.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{story.description}</p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                  <p className="font-semibold text-yellow-700 dark:text-yellow-300">Key Lesson:</p>
                  <p className="text-gray-700 dark:text-gray-300">{story.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Section */}
        <motion.div {...motionValues} className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">My Diagnostic Methodology</h2>
          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <div key={index} className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-2">{phase.week}:</span>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Integration Examples */}
        <motion.div {...motionValues} className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">Team Integration Examples</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamIntegrationExamples.map((example, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">{example.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{example.description}</p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <p className="font-semibold text-green-700 dark:text-green-300">Result:</p>
                  <p className="text-gray-700 dark:text-gray-300">{example.result}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FailureStoriesandProcessDocumentation;