import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {

  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["Projects", "About", "Contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen scroll-smooth relative">

      {/* BACKGROUND GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
       <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] top-[-100px] left-[-100px]" />
       <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>
      
  {/* NAVBAR */}
  <nav className="relative text-sm font-medium text-gray-300">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-zinc-800"></div>

  <div className="relative max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

    {/* LEFT */}
    <h1 className="font-semibold text-lg tracking-wide text-white">
      Kartikey
    </h1>

    {/* CENTER LINKS */}
    <div className="flex items-center gap-10 text-sm text-gray-400">

      {["Projects", "About", "Contact"].map((item) => (
        <a
    key={item}
    href={`#${item}`}
    className={`relative group text-sm font-medium tracking-wide transition
      ${active === item ? "text-white" : "text-gray-400 hover:text-white"}
    `}
  >
    {item}

    {/* underline */}
    <span
      className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-300
        ${active === item ? "w-full" : "w-0 group-hover:w-full"}
      `}
    ></span>
  </a>
))}

    </div>

    {/* RIGHT CTA */}
    <a
      href="#contact"
      className="px-5 py-2 rounded-lg text-sm font-medium border border-zinc-700 text-gray-300 hover:text-white hover:border-purple-400 transition"
    >
      Work Together
    </a>

  </div>

</nav>

  {/* HERO */}
  <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">

  {/* HERO GLOW */}
  <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[150px] top-1/2 -translate-y-1/2"></div>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-6xl md:text-7xl font-bold tracking-tight relative z-10"
  >
    Kartikey Chauhan
  </motion.h1>

  {/* ROLE / TAG */}
  <p className="mt-3 text-sm text-purple-400 tracking-wide uppercase relative z-10">
    Full Stack Developer • React • Spring Boot • AI
  </p>

  {/* MAIN DESCRIPTION */}
  <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed relative z-10">
    I build scalable, production-ready systems that combine strong backend architecture,
    modern frontend design, and AI-powered functionality.
  </p>

  {/* BUTTONS */}
  <div className="mt-10 flex gap-5 relative z-10">

      <a
        href="https://github.com/23-kartikey"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:scale-105 transition"
      >
        View GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/23-kartikey"
        className="px-6 py-3 rounded-xl border border-zinc-600 hover:bg-white hover:text-black transition"
      >
      LinkedIn
      </a>

    </div>

  </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      {/* ABOUT */}
      <section id="About" className="max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold mb-6"
        >
          About
        </motion.h2>

        <p className="text-gray-400 leading-relaxed">
          I design and build full-stack applications with a strong focus on backend systems,
          scalability, and real-world performance. My work combines React frontends,
          Spring Boot backends, and AI integrations to create systems that are both usable and robust.
        </p>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      {/* PROJECTS */}
      <section id="Projects" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "Gemini Orbit",
              desc: "AI-powered knowledge graph generator using Gemini API.",
              tech: "React • Spring Boot • PostgreSQL",
              link: "https://github.com/23-kartikey/gemini-orbit"
            },
            {
              title: "Taco Cloud",
              desc: "Full-stack food ordering system with MVC architecture.",
              tech: "Spring Boot • MySQL",
              link: "https://github.com/23-kartikey/taco-cloud"
            },
            {
              title: "Secure Notes API",
              desc: "JWT authentication system with Spring Security.",
              tech: "Spring Boot • JWT • MySQL",
              link: "https://github.com/23-kartikey/secure-notes-api"
            }
            ].map((p, i) => (
              <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition block"
            >

    {/* IMAGE / PREVIEW SECTION */}
    <div className="h-40 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-400">
      Preview
    </div>

    {/* TEXT CONTENT */}
    <div className="p-6">
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="text-gray-400 mt-2">{p.desc}</p>
      <p className="text-sm text-gray-500 mt-3">{p.tech}</p>
    </div>

  </motion.a>
))}

        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      {/* CONTACT */}
      <section id="Contact" className="text-center py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold"
        >
          Contact
        </motion.h2>

        <p className="text-gray-400 mt-4">kaarrttiikkeey@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        “Program testing can be used to show the presence of bugs, but never to show their absence.”  
        — Edsger W. Dijkstra
      </footer>

    </div>
  );
}