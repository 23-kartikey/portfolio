import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("projects");

  useEffect(() => {
    const sections = ["projects", "about", "contact"];

    const handleScroll = () => {
      let current = "projects";

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = sections[i];
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[150px] animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[150px] animate-pulse bottom-[-100px] right-[-100px]" />
      </div>

      <Navbar active={active} />

      <Hero />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      <About />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      <Projects />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      <Contact />

      <footer className="text-center py-10 text-gray-500 text-sm">
        “All we have to decide is what to do with the time that is given us.”
— J.R.R. Tolkien
      </footer>

    </div>
  );
}