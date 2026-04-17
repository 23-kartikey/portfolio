import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="Contact" className="text-center py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold"
      >
        Contact
      </motion.h2>

      <p className="text-gray-400 mt-4">
        kaarrttiikkeey@gmail.com
      </p>
    </section>
  );
}