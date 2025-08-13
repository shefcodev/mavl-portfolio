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
      className="section section_px mt-[90px] h-fit lg:h-hero text-white relative overflow-hidden"
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] -z-10" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-10" style={{
        backgroundImage: 'linear-gradient(to right, #f9a828 1px, transparent 1px), linear-gradient(to bottom, #f9a828 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <main className="about">
        <div className="flex flex-col gap-5 sm:gap-7 relative">
          {/* Animated Title with Gradient Text */}
          <motion.h1 
            className="about-title text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#f9a828] to-[#fce043]"
            {...motionValues}
          >
            {aboutTitle.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.7 }}
                transition={{
                  delay: index * 0.05,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Enhanced Subtitle with Brackets */}
          <motion.h2 
            className="about-subtitle text-xl sm:text-2xl font-medium"
            {...motionValues}
          >
            <span className="text-[#f9a828]">{"[ "}</span>
            <span className="text-white/90">{aboutSubtitle}</span>
            <span className="text-[#f9a828]">{" ]"}</span>
          </motion.h2>

          {/* Content with Improved Typography */}
          <motion.div 
            className="max-w-3xl space-y-4"
            {...motionValues}
          >
            <p className="about-desc text-white/90 leading-relaxed">
              I'm passionate about transforming how businesses operate behind the scenes. Through my work, I help lean teams unlock their full potential with smart automation, streamlined processes, and strategic systems that make everything flow effortlessly.
            </p>
            
            <p className="about-desc text-white/90 leading-relaxed">
              Over the past 5 years, I've partnered with 3 businesses and, most significantly, supported 1 Canadian Region and 18 chapters of the world's largest and most successful referral networking organization BNI®, being part of the team that grew it to #1 from 2020 to 2025. Through this work, I helped slash operational costs by 30% and boost productivity by 40%. My diverse expertise spans <span className="font-bold text-[#f9a828]">Executive administration, Process automation, Financial Operations Support,</span> and <span className="font-bold text-[#f9a828]">technical coordination, </span> plus specialized skills in GoHighLevel, Zapier automation, Typeform programming, and graphic design.
            </p>
            
            <p className="about-desc text-white/90 leading-relaxed">
              This versatility means I can tackle everything from complex workflow automation and project management to creative marketing support and systems coordination.
            </p>
            
            <p className="about-desc text-white/90 leading-relaxed">
              I love building solutions that make ambitious teams run like enterprise-grade machines without the enterprise overhead.
            </p>
            
            <p className="about-desc text-[#f9a828]/90 leading-relaxed italic">
              My approach is simple: identify what's slowing you down, create systems that work smarter, and build sustainable foundations that grow with your vision.
            </p>
            
            <p className="about-desc text-white/90 leading-relaxed">
              When I'm not crafting operational magic, you'll find me on the soccer field or vibing to Afrobeats and Jazz.
            </p>
            
            <p className="about-desc text-white/90 leading-relaxed">
              Let's connect and build something remarkable together.
            </p>
            
            <p className="about-desc text-[#f9a828] font-bold leading-relaxed">
              MARVEL IS YOU GUY!!!
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <button className="bg-gradient-to-r from-[#f9a828] to-[#fce043] text-[#16213e] font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl shadow-[#f9a828]/30">
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* Profile Image with Glow Effect */}
        <div className="flex-center h-full w-full relative">
          <motion.div 
            className="img-container relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-full bg-[#f9a828] blur-xl opacity-20 animate-pulse" />
            <Image
              src="/images/profile.png"
              alt="developer image"
              width={500}
              height={500}
              className="relative z-10 rounded-full border-4 border-[#f9a828]/30"
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default About;