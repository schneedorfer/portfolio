import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Hero } from "@/components/site/hero";
import { Metrics } from "@/components/site/metrics";
import { Nav } from "@/components/site/nav";
import { Skills } from "@/components/site/skills";
import { Work } from "@/components/site/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
