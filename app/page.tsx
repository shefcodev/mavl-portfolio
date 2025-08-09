import { Fragment } from "react";
import About from "@/components/About";
import Stacks from "@/components/Stacks";
import SolutionsAndResults from "@/components/SolutionsAndResults"; // Renamed
import Projects from "@/components/Projects";
import Designs from "@/components/Designs";
import Recognition from "@/components/Recognition";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import Stories from "@/components/Stories";
import WorkPlans from "@/components/WorkPlans";
import Services from "@/components/Services";

export default function Home() {
  return (
    <Fragment>
      <About />
      <Stacks />
      <SolutionsAndResults /> {/* Fixed component name */}
      <Projects />
      <Designs />
      <Recognition />
      <Work />
      <Stories />
      <WorkPlans />
      <Services />
      <Resume />
      <Contact />
    </Fragment>
  );
}