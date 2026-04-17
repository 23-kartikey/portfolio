import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="Contact" className="py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold"
        >
          Contact
        </motion.h2>

        {/* HUMAN TEXT */}
        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
          If you want to build something meaningful, collaborate on an idea,
          or just talk about systems and tech — feel free to reach out.
        </p>

        <div className="mt-12 flex flex-col items-center gap-8">

  {/* EMAIL (PRIMARY CTA) */}
  <div className="relative group">

    {/* glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

    <a
      href="mailto:kaarrttiikkeey@gmail.com"
      className="relative z-10 px-10 py-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur text-center block transition hover:border-pink-200 max-w-md w-full"
    >
      <p className="text-sm text-gray-500 mb-2">Email</p>

      <p className="text-xl font-semibold text-white tracking-wide">
        kaarrttiikkeey@gmail.com
      </p>
    </a>

  </div>

  {/* SOCIAL BUTTONS (INLINE, CLEAN) */}
  <div className="flex gap-4">

    <a
      href="https://github.com/23-kartikey"
      target="_blank"
      className="px-6 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:text-white hover:border-purple-400 hover:scale-105 transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/23-kartikey"
      target="_blank"
      className="px-6 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:text-white hover:border-blue-400 hover:scale-105 transition"
    >
      LinkedIn
    </a>

  </div>

</div>

      </div>

    </section>
  );
}