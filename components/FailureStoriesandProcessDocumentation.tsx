"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const FailureStoriesandProcessDocumentation = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Lessons Learned & My Process",
      problem: {
        icon: "🔥",
        header: "WHAT DIDN'T WORK",
        statement: "Valuable Failures That Shaped My Approach",
        description: "These are the hard-earned lessons from initiatives that didn't go as planned, each teaching me crucial improvements to my methodology."
      },
      solution: {
        icon: "💡",
        header: "MY DIAGNOSTIC METHODOLOGY",
        approach: "4-Week Transformation Process",
        description: "A structured approach to identifying and solving operational challenges that I've refined through years of trial and error.",
        services: [
          "Week 1: Shadow & Observe - Follow actual workflows to identify pain points",
          "Week 2: Map Current Reality - Interview stakeholders and visualize processes",
          "Week 3: Design With User Input - Co-create solutions with end users",
          "Week 4: Phased Implementation - Roll out changes with training and support"
        ]
      },
      result: {
        icon: "🎯",
        header: "TEAM INTEGRATION EXAMPLES",
        outcome: "Proven Collaboration Frameworks",
        details: [
          "Cross-Chapter Training: Achieved 92% adoption through cascade training",
          "SOP Development: Reduced new chapter setup from 6 weeks to 2 weeks",
          "Mentorship: Trained junior admins to independently manage 4-6 chapters each",
          "Emergency Response: Cut system downtime from 4 hours to 45 minutes",
          "Campaign Collaboration: Improved performance by 25% through weekly creative reviews"
        ]
      },
      failures: [
        {
          title: "The Multi-Chapter Social Media Disaster (2022)",
          description: "Launched unified social media strategy across 18 chapters without testing first. Three chapters saw engagement drop 20% due to local audience differences. Lesson: Now always pilot with 2-3 chapters first."
        },
        {
          title: "The GoHighLevel Integration That Broke Everything (2021)",
          description: "Built complex automation over weekend without team involvement. Resulted in 200+ misdirected welcome emails and locked-out assistants. Lesson: Never implement automation without testing and training."
        },
        {
          title: "The Web3 Community That Went Silent (MusCatonsol, 2024)",
          description: "Focused on growing Telegram numbers (56% growth) but neglected conversation quality. Hit 1,000 members but engagement plummeted. Lesson: Prioritize genuine connection over member count."
        },
        {
          title: "The Financial Dashboard Nobody Used (2020)",
          description: "Created comprehensive QuickBooks dashboards with 15+ metrics. Too overwhelming - executives never used them. Lesson: Focus on 3-4 action-critical metrics only."
        }
      ]
    }
  ];

  return (
    <section id="SolutionsAndResults" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...motionValues} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Failure Stories & Process Documentation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transparent lessons from what didn't work and how I systematically improve operations
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((caseStudy) => (
            <motion.div 
              key={caseStudy.id}
              {...motionValues}
              className="relative group"
            >
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
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.problem.description}</p>
                  
                  <div className="space-y-4">
                    {caseStudy.failures.map((failure, index) => (
                      <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h6 className="font-bold text-red-600 dark:text-red-400">{failure.title}</h6>
                        <p className="text-gray-700 dark:text-gray-300">{failure.description}</p>
                      </div>
                    ))}
                  </div>
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
                    <h6 className="font-medium mb-2">Process Breakdown:</h6>
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

export default FailureStoriesandProcessDocumentation;