"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { details } from "@/constants";
import { motionValues } from "@/lib/utils";

const About = () => {
  const { aboutTitle, aboutSubtitle, aboutDesc } = details;

  return (
    <section
      id="about"
      className="section section_px mt-[90px] h-fit lg:h-hero"
    >
      <main className="about">
        <div className="flex flex-col gap-5 sm:gap-7">
          <motion.h1 className="about-title" {...motionValues}>
            {aboutTitle.split("").map((char, index) => (
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

          <motion.h2 className="about-subtitle" {...motionValues}>
            <span className="text-white font-black">{"[ "}</span>
            {`${aboutSubtitle}`}
            <span className="text-white font-black">{" ]"}</span>
          </motion.h2>

          <motion.p className="about-desc" {...motionValues}>
            {aboutDesc}
          </motion.p>
        </div>

        <div className="flex-center h-full w-full">
          <motion.div className="img-container" {...motionValues}>
            <Image
              src="/images/profile.png"
              alt="develper image"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default About;
