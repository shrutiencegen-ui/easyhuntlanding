import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  openDemo: () => void;
};

export default function Navbar({ openDemo }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "How it works", id: "how-it-works" },
    { name: "Features", id: "product" },
    { name: "Platform", id: "platform" },
    { name: "FAQs", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  /* Navbar background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 50 && location.pathname === "/") {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  /* Active section detection */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isScrolling) {
  setActive(entry.target.id);
}
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  /* Smooth scroll function */
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = 85;

      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  /* Nav click */
const scrollToSection = (id: string) => {
  setOpen(false);

  // immediately active set
  setActive(id);

  // observer temporarily stop
  setIsScrolling(true);

  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        const offset = 85;

        const top =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }

      // re-enable observer
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }, 500);

    return;
  }

  const section = document.getElementById(id);

  if (section) {
    const offset = 85;

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  // re-enable observer after scroll
  setTimeout(() => {
    setIsScrolling(false);
  }, 1000);
};

  /* Handle hash navigation */
  useEffect(() => {
    if (location.pathname === "/") {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        setTimeout(() => {
          smoothScroll(hash);
          setActive(hash);
        }, 200);
      }
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 bg-[#0b0f25] border-b border-white/5 ${
          scrolled ? "py-3 shadow-2xl shadow-black" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer shrink-0"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-[14px] lg:text-[15px] font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {active === link.id && (
                  <motion.div
                    layoutId="pill-active"
                    className="absolute inset-0 bg-white/10 rounded-xl border border-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.name}
                </span>
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() =>
                window.open(
                  "https://easyhunt.in/login",
                  "_self"
                )
              }
              className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition"
            >
              Login
            </button>

            <button
              onClick={openDemo}
              className="px-6 py-2.5 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/20 active:scale-95 transition-all"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0b0f25] border-b border-white/10 p-6 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl ${
                  active === link.id
                    ? "bg-white/10 text-white"
                    : "text-gray-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}