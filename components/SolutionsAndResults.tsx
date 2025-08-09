"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { details } from "@/constants";
import { motionValues } from "@/lib/utils";

const SolutionsAndResults = () => {
  return (
    <section
      id="solutions"
      className="section section_px mt-[90px] h-fit lg:h-hero"
    >
      <main className="about"> {/* Keep same class as About */}
        <div className="flex flex-col gap-5 sm:gap-7">
          {/* Title with same animation */}
          <motion.h1 className="about-title" {...motionValues}>
            {"Problems I Solve & Results I Deliver".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with brackets */}
          <motion.h2 className="about-subtitle" {...motionValues}>
            <span className="text-white font-black">{"[ "}</span>
            {"Transforming Business Challenges into Measurable Success"}
            <span className="text-white font-black">{" ]"}</span>
          </motion.h2>

          {/* Content with identical styling */}
          <motion.div {...motionValues}>
            <p className="about-desc mb-2">
              I specialize in solving these critical business challenges:
            </p>
            
            <ul className="mb-2 list">
              <li className="about-desc font-bold">• Problems I Solve & Results I Deliver</li>
              <li className="about-desc font-bold">• TECH STACK COMPLEXITY slowing productivity by 40%+</li>
              <li className="about-desc font-bold">• GROWTH BOTTLENECKS from manual processes</li>
              <li className="about-desc font-bold">• TEAM BANDWIDTH LIMITATIONS preventing scaling</li>
            </ul>

            <p className="about-desc mb-2 mt-6">
              And deliver these measurable results:
            </p>

            <ul className="mb-2 list">
              <li className="about-desc font-bold">✓ 30-45% OPERATIONAL COST REDUCTION</li>
              <li className="about-desc font-bold">✓ 40%+ PRODUCTIVITY GAINS</li>
              <li className="about-desc font-bold">✓ 85% CLIENT RETENTION RATE</li>
              <li className="about-desc font-bold">✓ #1 GLOBAL RANKINGS for teams I support</li>
            </ul>

            <p className="about-desc font-bold mt-6">PROVEN IMPACT:</p>
            <p className="about-desc font-bold"> • Helped BNI Alberta South become #1 Region in Canada</p>
            <p className="about-desc font-bold"> • Supported 2 Directors to #1 Globally (out of 157)</p>
            <p className="about-desc font-bold"> • 45% reduction in manual processes</p>
            <p className="about-desc font-bold"> • 85% retention across 550+ accounts</p>
          </motion.div>
        </div>

        {/* Keep same image container structure */}
        <div className="flex-center h-full w-full">
          <motion.div className="img-container" {...motionValues}>
            <Image
              src="/images/solutions-results.png" // Different image
              alt="Business solutions graphic"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default SolutionsAndResults;