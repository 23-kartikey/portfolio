import { useEffect, useState } from "react";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-zinc-800 py-3"
          : "bg-transparent py-5"}
      `}
    >

      {/* SCROLL PROGRESS BAR */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="font-semibold text-lg tracking-wide text-white">
          Kartikey
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-10">

          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative group text-sm font-medium tracking-wide transition
                ${active === item ? "text-white" : "text-gray-400 hover:text-white"}
              `}
            >
              {item}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-300
                  ${active === item ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </a>
          ))}

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg text-sm font-medium border border-zinc-700 text-gray-300 hover:text-white hover:border-purple-400 transition"
        >
          Work Together
        </a>

      </div>
    </nav>
  );
}