"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { resume } from "@/constants";
import { motionValues } from "@/lib/utils";

const Resume = () => {
  const { title, description } = resume;

  return (
    <section id="resume" className="section section_px section-gap">
      <main className="flex-center flex-col gap-8">
        <div className="flex-center flex-col">
          <motion.h2 className="section-h2" {...motionValues}>
            {title}
          </motion.h2>
        </div>

        <div className="w-full flex-between flex-col lg:flex-row gap-8 lg:gap-0">
          <motion.h3 className="section-h3_resume" {...motionValues}>
            {description}
          </motion.h3>

          <motion.div className="w-full" {...motionValues}>
            <Link
              href="/resume/OlabodeMarvellous.pdf"
              className="w-full flex-center lg:flex-end"
            >
              <Card className="resume-card">
                <p className="resume-p">View Resume Here</p>
                <BsArrowDownRightCircle className="text-white size-6" />
              </Card>
            </Link>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Resume;
