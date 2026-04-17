import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

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

        {/* EMAIL CARD */}
        <div className="mt-10 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur inline-block">

          <p className="text-sm text-gray-500 mb-2">Email</p>

          <a
            href="mailto:kaarrttiikkeey@gmail.com"
            className="text-lg text-white font-medium hover:text-purple-400 transition"
          >
            kaarrttiikkeey@gmail.com
          </a>

        </div>

        {/* SOCIALS */}
        <div className="mt-8 flex justify-center gap-6">

          <a
            href="https://github.com/23-kartikey"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:text-white hover:border-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/23-kartikey"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:text-white hover:border-purple-400 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}