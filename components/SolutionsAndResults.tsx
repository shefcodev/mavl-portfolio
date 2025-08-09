"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { details } from "@/constants";
import { motionValues } from "@/lib/utils";

const SolutionsAndResults = () => {
  const { solutionsTitle, solutionsSubtitle } = details;

  return (
    <section
      id="solutions"
      className="section section_px py-20 h-fit bg-gray-100 dark:bg-gray-900"
    >
      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 sm:gap-7">
          <motion.h1 className="text-4xl font-bold mb-6" {...motionValues}>
            Problems I Solve & Results I Deliver
          </motion.h1>

          <motion.h2 className="text-xl font-semibold mb-8" {...motionValues}>
            <span className="text-primary font-black">{"[ "}</span>
            How I create measurable impact for your business
            <span className="text-primary font-black">{" ]"}</span>
          </motion.h2>

          <motion.div {...motionValues} className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Problems I Solve:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>Operational inefficiencies:</strong> Streamlining processes that waste time and money</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>Tech overwhelm:</strong> Implementing the right tools without the learning curve</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>Growth bottlenecks:</strong> Removing barriers that prevent scaling</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>Team limitations:</strong> Extending your capabilities without full-time hires</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Results I Deliver:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>30-45% cost reduction</strong> through process optimization</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>40%+ productivity gains</strong> via automation</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>85% client retention</strong> through superior systems</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><strong>#1 rankings</strong> for teams I support (proven track record)</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...motionValues} className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">My Approach:</h3>
            <p className="mb-4">I combine technical expertise with business acumen to create solutions that:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Solve immediate pain points while building long-term resilience</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Integrate seamlessly with your existing workflows</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Deliver measurable ROI within the first 90 days</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default SolutionsAndResults;