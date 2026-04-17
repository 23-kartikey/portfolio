import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="max-w-4xl mx-auto px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-6"
      >
        About
      </motion.h2>

        <div className="space-y-6 text-gray-400 leading-relaxed max-w-2xl">

            <p>
            I enjoy building things that actually work — not just in theory, but in real use.
            Whether it’s designing a backend system or shaping a frontend experience, I like understanding how everything fits together.
            </p>

            <p>
            I spend a lot of time thinking about structure, performance, and how to make systems simpler without losing capability.
            Lately, I’ve been exploring how AI can be integrated into applications in a practical way, not just as a feature but as something useful.
            </p>

            <p>
            For me, development isn’t just about finishing tasks — it’s about getting better at the craft and building things I can stand behind.
            </p>

        </div>
    </section>
  );
}