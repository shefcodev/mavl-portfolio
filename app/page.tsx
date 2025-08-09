import { Fragment } from "react";
import About from "@/components/About";
import Stacks from "@/components/Stacks";
import HowIHelpYou from "@/components/HowIHelpYou";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Services from "@/components/Services";
import Designs from "@/components/Designs";
import WorkPlans from "@/components/WorkPlans";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Fragment>
      <About />
      <Stacks />
      <HowIHelpYou />
      <Projects />
      <Recognition />
      <Services />
      <Designs />
      <WorkPlans />
      <Stories />
      <Contact />
    </Fragment>
  );
}