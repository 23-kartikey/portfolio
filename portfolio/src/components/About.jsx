import { motion } from "framer-motion";

export default function About() {
  return (
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
  );
}