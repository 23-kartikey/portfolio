import { motion } from "framer-motion";
import geminiImg from "../assets/gemini.png";
import tacoImg from "../assets/taco.png";
import notesImg from "../assets/notes.png";

const projects = [
  {
    title: "Gemini Orbit",
    desc: "AI-powered knowledge graph generator using Gemini API.",
    tech: "React • Spring Boot • PostgreSQL",
    link: "https://github.com/23-kartikey/gemini-orbit-ai-backend",
    image: tacoImg
  },
  {
    title: "Taco Cloud",
    desc: "Full-stack food ordering system with MVC architecture.",
    tech: "Spring Boot • MySQL",
    link: "https://github.com/23-kartikey/taco-cloud",
    image: geminiImg
  },
  {
    title: "Secure Notes API",
    desc: "JWT authentication system with Spring Security.",
    tech: "Spring Boot • JWT • MySQL",
    link: "https://github.com/23-kartikey/secure-notes-api",
    image: notesImg
  }
];

export default function Projects() {
  return (
    <section id="Projects" className="max-w-6xl mx-auto px-6 py-32">
        <div className="mb-12 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur">
            <p className="text-sm text-purple-400 mb-2">Featured Project</p>
            <h3 className="text-xl font-semibold">Gemini Orbit</h3>
            <p className="text-gray-400 mt-2">
                AI-powered knowledge graph generator using Gemini API.
            </p>
        </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.a
  key={i}
  href={p.link}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.03 }}
  className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
>
  {/*Background hover gradient */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

  {/* WRAPPED CONTENT */}
  <div className="relative z-10">

    {/* Preview */}
    <div className="h-40 overflow-hidden relative">

  <img
    src={p.image}
    alt={p.title}
    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
  />

  {/* overlay for readability */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

</div>

    {/* Text */}
    <div className="p-6">
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="text-gray-400 mt-2">{p.desc}</p>
      <p className="text-sm text-gray-500 mt-3">{p.tech}</p>
    </div>

  </div>
</motion.a>
        ))}
      </div>
    </section>
  );
}