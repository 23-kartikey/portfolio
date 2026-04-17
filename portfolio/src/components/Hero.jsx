import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative pt-28">

      {/* GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[150px] top-1/2 -translate-y-1/2"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-7xl font-bold tracking-tight relative z-10"
      >
        Kartikey Chauhan
      </motion.h1>

      <p className="mt-3 text-sm text-purple-400 tracking-wide uppercase relative z-10">
        Full Stack Developer • React • Spring Boot • AI
      </p>

      <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed relative z-10">
        I build systems that are meant to last — combining clean backend architecture, thoughtful frontend design, and practical AI integration.
      </p>

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
  );
}