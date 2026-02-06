import Hero from "./sections/Hero/Hero";
import Navbar from "../components/Navbar";
import About from "./sections/About/About";
import Problem from "./sections/Problem/Problem";
import Cost from "./sections/Cost/Cost";
import Story from "./sections/Story/Story";
import Solution from "./sections/Solution/Solution";
import Contact from "./sections/Contact/Contact";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="problem">
        <Problem />
      </section>
      <section id="cost">
        <Cost />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="solution">
        <Solution />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}