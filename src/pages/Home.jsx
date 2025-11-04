import HeroSection from "../components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import TestimonialSection from "./TestimonialSection";
import FreeCourse from "../components/FreeCourse";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <FreeCourse />
      <TestimonialSection />
      <Faq />
      <Contact />
    </div>
  );
}
