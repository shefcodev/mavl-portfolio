"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const Provenresults = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Lessons Learned & My Process",
      // ... (keep all existing content from previous case study 1)
    },
    {
      id: 2,
      title: "Proven Leadership Results",
      problem: {
        icon: "🏆",
        header: "LEADERSHIP IMPACT",
        statement: "Demonstrated Operational Excellence",
        description: "Tangible results from my leadership in operational strategy and team management"
      },
      solution: {
        icon: "🛠️",
        header: "LEADERSHIP APPROACH",
        approach: "Results-Driven Operational Leadership",
        description: "My leadership methodology combines strategic vision with hands-on execution to deliver measurable results",
        services: [
          "Operational Strategy Development & Execution",
          "Team Training & Performance Management",
          "Financial Oversight & Budget Optimization",
          "Crisis Management & System Recovery",
          "Process Automation & Efficiency Gains",
          "Client Retention & Success Strategies"
        ]
      },
      result: {
        icon: "📈",
        header: "KEY ACHIEVEMENTS",
        outcome: "Quantifiable Leadership Results",
        details: [
          "Led operational strategy that drove BNI Alberta South to #1 REGION IN CANADA",
          "Direct contractor to 2 Executive Directors who achieved #1 GLOBALLY (out of 157 worldwide) in 2024",
          "Team Leadership: Managed and trained 18+ chapter administrators across the region",
          "Budget Oversight: $2.3M+ annual revenue management across multi-chapter network",
          "Crisis Response: Led 6 major system recovery operations with 100% uptime restoration",
          "Process Excellence: 45% reduction in manual processes through automation leadership",
          "Client Success: 85% retention rate across 550+ accounts under my operational oversight",
          "Decision Authority: Autonomous approval rights up to $25K for operational improvements"
        ]
      }
    }
  ];

  return (
    <section id="SolutionsAndResults" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (keep existing header content) ... */}
        
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
                {caseStudy.problem && (
                  <div className="mb-10 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center mb-3">
                      <span className="text-xl mr-2">{caseStudy.problem.icon}</span>
                      <h4 className="font-bold text-red-700 dark:text-red-300">{caseStudy.problem.header}</h4>
                    </div>
                    <h5 className="text-lg font-semibold mb-2">{caseStudy.problem.statement}</h5>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.problem.description}</p>
                    
                    {caseStudy.failures && (
                      <div className="space-y-4">
                        {caseStudy.failures.map((failure, index) => (
                          <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            <h6 className="font-bold text-red-600 dark:text-red-400">{failure.title}</h6>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">{failure.description}</p>
                            <p className="text-gray-700 dark:text-gray-300 font-semibold">
                              <span className="font-bold">{failure.lesson.split(':')[0]}:</span> {failure.lesson.split(':')[1].trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Solution Section */}
                {caseStudy.solution && (
                  <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-xl mr-2">{caseStudy.solution.icon}</span>
                      <h4 className="font-bold text-blue-700 dark:text-blue-300">{caseStudy.solution.header}</h4>
                    </div>
                    <h5 className="text-lg font-semibold mb-2">{caseStudy.solution.approach}</h5>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.solution.description}</p>
                    <div>
                      <h6 className="font-medium mb-2">Key Leadership Areas:</h6>
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
                )}

                {/* Result Section */}
                {caseStudy.result && (
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
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Provenresults;