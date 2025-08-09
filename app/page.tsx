import { Fragment } from "react";
import About from "@/components/About";
import Stacks from "@/components/Stacks"; // Technical foundation first
import SolutionsAndResults from "@/components/SolutionsAndResults"; // Solutions with established credibility
import Projects from "@/components/Projects"; // Applied examples
import Recognition from "@/components/Recognition"; // Early social proof
import Services from "@/components/Services"; // Offerings breakdown
import Designs from "@/components/Designs"; // Visual proof
import WorkPlans from "@/components/WorkPlans"; // Process depth
import Stories from "@/components/Stories"; // Narrative context
import Resume from "@/components/Resume"; // Detailed background
import Contact from "@/components/Contact"; // Conversion

export default function Home() {
  return (
    <Fragment>
      <About /> {/* Hero introduction */}
      <Stacks /> {/* Show technical prowess first */}
      <SolutionsAndResults /> {/* Present solutions with credibility established */}
      <Projects /> {/* Concrete implementations */}
      <Recognition /> {/* Awards/testimonials - builds trust */}
      <Services /> {/* Structured offerings */}
      <Designs /> {/* Visual craftsmanship */}
      <WorkPlans /> {/* Methodology transparency */}
      <Stories /> {/* Human context */}
      <Resume /> {/* Comprehensive background */}
      <Contact /> {/* Clear call-to-action */}
    </Fragment>
  );
}