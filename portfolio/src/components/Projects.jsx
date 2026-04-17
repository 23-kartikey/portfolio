import { motion } from "framer-motion";

const projects = [
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
];

export default function Projects() {
  return (
    <section id="Projects" className="max-w-6xl mx-auto px-6 py-24">
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
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition block"
          >
            <div className="h-40 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-400">
              Preview
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <p className="text-sm text-gray-500 mt-3">{p.tech}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}