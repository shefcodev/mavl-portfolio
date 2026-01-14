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
      className="section section_px mt-[90px] h-fit lg:h-hero text-white"
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
            <span>{"[ "}</span>
            {aboutSubtitle}
            <span>{" ]"}</span>
          </motion.h2>

          <motion.div {...motionValues}>
            <p className="about-desc mb-2">I'm passionate about turning operational chaos into high-ROI marketing machines. With 5+ years supporting regional leadership and scaling massive networks, I now pivot fully into digital marketing—blending systems thinking with performance strategies to help businesses attract, engage, and convert at scale.</p>
            <p className="about-desc mb-2">I've partnered with lean teams and, most notably, supported the Canadian Region plus 18 chapters of BNI® (the world's largest referral networking organization), contributing to the team that propelled it to #1 globally from 2020–2025. Through smart automation, process optimization, and targeted marketing support, I helped cut operational costs by 30%, boost productivity by 40%, and drive massive community/engagement growth. </p>
            <p className="about-desc mb-2 font-semibold">My expertise spans:</p>
            <ul className="about-desc mb-2 ml-6 list-disc space-y-1"></ul>
            <li>Digital marketing strategy & performance marketing</li>
            <li>Social media marketing & management (LinkedIn, Telegram, etc.)</li>
            <li>Paid ads (Google Ads, Meta, PPC, display)</li>
            <li>SEO/SEM, content & influencer marketing</li>
            <li>Marketing automation (GoHighLevel, Zapier, HubSpot-style tools)</li>
            <li>Email campaigns, GTM launches, lead generation</li>
            <li>Data-driven funnel optimization & A/B testing</li>
            <li>Creative support (graphic design, Typeform programming)</li>
            <p className="about-desc mb-2">This mix lets me build customer-centric campaigns and systems that run efficiently—no enterprise bloat required.</p>
            <p className="about-desc mb-2 italic">My approach: Identify bottlenecks, automate smarter, deliver value-first marketing that solves real problems and fuels sustainable growth.</p>
            <p className="about-desc mb-2">When I'm not crafting marketing magic, catch me on the soccer field or lost in Afrobeats and Jazz vibes.</p>
            <p className="about-desc mb-2">When I'm not crafting operational magic, you'll find me on the soccer field or vibing to Afrobeats and Jazz.</p>
            <p className="about-desc mb-2">Let's connect and build something remarkable together.</p>
            <p className="about-desc mb-2">MARVEL IS YOU GUY!!!!</p>
          </motion.div>
        </div>

        <div className="flex-center h-full w-full">
          <motion.div className="img-container" {...motionValues}>
            <Image
              src="/images/profile.png"
              alt="developer image"
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

