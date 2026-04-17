import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen scroll-smooth relative">

      {/* BACKGROUND GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
       <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] top-[-100px] left-[-100px]" />
       <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold">Kartikey</h1>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Kartikey Chauhan
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
          I design and build full-stack systems that combine clean frontend interfaces,
          scalable backend architecture, and AI-driven functionality.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="https://github.com/23-kartikey" className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/23-kartikey" className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition">
            LinkedIn
          </a>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-10"></div>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24">
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
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
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
      <section id="contact" className="text-center py-24">
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