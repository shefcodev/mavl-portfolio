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

          <motion.div {...motionValues}>
            {/* {aboutDesc.map((desc, idx) => <li key={idx}><p className="about-desc">{desc}</p></li>)} */}
            <p className="about-desc mb-2"><span className="font-bold"></span> </p>
            <p className="about-desc mb-2">With a powerful blend of administrative expertise, tech-savviness, and data-driven insight, I Reduced client operational costs by 30% and increased productivity by 40% for 15+ businesses in the past 5 years, eliminate inefficiencies, and unlock hidden opportunities. my mission is to help lean teams run like enterprise-grade machines.</p>
            <p className="about-desc mb-2">I go far beyond traditional admin work, integrating <span className="font-bold">automation, IT support, customer service,</span> and <span className="font-bold">creative problem-solving</span> into every aspect of your business. My diverse skill set spans:
            </p>
            <ul className="mb-2 list">
              <li className="about-desc font-bold">PROJECT & PRODUCT MANAGEMENT</li>
              <li className="about-desc font-bold">TECHNICAL & IT SUPPORT</li>
              <li className="about-desc font-bold">GRAPHIC DESIGN & SOCIAL MEDIA MANAGEMENT</li>
              <li className="about-desc font-bold">TYPEFORM PROGRAMMER / ALCHEMER SPECIALIST</li>
              <li className="about-desc font-bold">GOHIGHLEVEL SPECIALIST</li>
              <li className="about-desc font-bold">ZAPIER AUTOMATION EXPERT</li>
              <li className="about-desc font-bold">GOOGLE WORKSPACE CERTIFIED</li>
            </ul>
            <p className="about-desc mb-2">This versatility enables me to translate big ideas into actionable strategies tailored to your unique goals and challenges.</p>
            <p className="about-desc mb-2">My proactive, collaborative approach extends your reach, strengthens your systems, and lays the foundation for long-term, sustainable growth.</p>
            <p className="about-desc mb-2 italic">When I’m not creatively optimizing back-office systems, you’ll find me on the soccer field or vibing to Afrobeats, Amapiano, and Jazz.</p>
            <p className="about-desc mb-2">Let’s connect and build something remarkable together.</p>
            <p className="about-desc mb-2">
              <p className="about-desc mb-2"></p>
              <p className="about-desc mb-2"></p>
            </p>
            <p className="about-desc font-bold">PROVEN RESULTS:</p>
            <p className="about-desc font-bold"> • Helped BNI Alberta South achieve #1 REGION IN CANADA</p>
            <p className="about-desc font-bold"> • Supported 2 Executive Directors to #1 GLOBALLY (out of 157 worldwide) in 2024</p>
            <p className="about-desc font-bold"> • 45% reduction in manual processes through automation</p>
            <p className="about-desc font-bold"> • 85% client retention rate across 550+ accounts</p>
          </motion.div>
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
