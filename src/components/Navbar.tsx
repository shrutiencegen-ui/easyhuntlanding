import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"

type Props = {
  openDemo: () => void;
};

export default function Navbar({ openDemo }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  const navigate = useNavigate()
  const location = useLocation()

  /* ✅ Navbar background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ✅ PERFECT ACTIVE TAB (Intersection Observer) */
  useEffect(() => {
    const sections = [
      "home",
      "how-it-works",
      "product",
      "platform",
      "faq",
      "contact",
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])
  useEffect(() => {
  const handleScrollEnd = () => {
    const bottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    if (bottom) {
      setActive("contact");
    }
  };

  window.addEventListener("scroll", handleScrollEnd);
  return () => window.removeEventListener("scroll", handleScrollEnd);
}, []);

  /* ✅ Route change handling */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("")
    }
  }, [location.pathname])

  /* ✅ Smooth navigation */
  const scrollToSection = (id: string) => {
    setOpen(false)
    setActive(id)

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Progress Line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: scrolled ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
      />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-700/20 via-indigo-600/10 to-purple-700/20 blur-2xl" />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#0b0f25]/80 backdrop-blur-xl shadow-lg shadow-purple-900/10"
            : "bg-[#0b0f25]/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-[72px] flex items-center justify-between gap-4">

          {/* ✅ LOGO FIXED */}
  <div
  onClick={() => scrollToSection("home")}
  className="flex items-center gap-1 cursor-pointer select-none"
>
 <img
  src="/logo.png"
  alt="Easy Hunt Logo"
  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
/>


</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-[14px] lg:text-[15px]">
            <NavLink active={active === "home"} onClick={() => scrollToSection("home")}>Home</NavLink>
            <NavLink active={active === "how-it-works"} onClick={() => scrollToSection("how-it-works")}>How it works</NavLink>
            <NavLink active={active === "product"} onClick={() => scrollToSection("product")}>Features</NavLink>
            <NavLink active={active === "platform"} onClick={() => scrollToSection("platform")}>Platform</NavLink>
            <NavLink active={active === "faq"} onClick={() => scrollToSection("faq")}>FAQs</NavLink>
            <NavLink active={active === "contact"} onClick={() => scrollToSection("contact")}>Contact</NavLink>
          </nav>

          {/* CTA */}
        {/* CTA BUTTONS */}
<div className="hidden md:flex items-center gap-3">

            {/* LOGIN BUTTON */}
            <button
  onClick={() => window.open("https://easyhunt.in/login", "_self")}
  className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
    bg-gradient-to-r from-purple-500 to-pink-500
    hover:from-purple-400 hover:to-pink-400
    shadow-[0_0_20px_rgba(168,85,247,0.4)]
    hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
    hover:scale-105 transition-all duration-300"
>
  Login
</button>

              {/* BOOK DEMO BUTTON */}
                <button
                  onClick={openDemo}
                  className="relative px-4 py-2.5 md:px-5 md:py-2.5 lg:px-7 lg:py-3 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-700/30 hover:shadow-purple-700/60 transition-all overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10">
                    Book a Demo
                  </span>

                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
                </button>

              </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden mx-6 mt-3 rounded-2xl bg-[#0b0f25]/95 backdrop-blur-xl border border-white/10 p-6 space-y-5 text-gray-300"
          >
            <MobileLink onClick={() => scrollToSection("home")}>Home</MobileLink>
            <MobileLink onClick={() => scrollToSection("how-it-works")}>How it works</MobileLink>
            <MobileLink onClick={() => scrollToSection("product")}>Features</MobileLink>
            <MobileLink onClick={() => scrollToSection("platform")}>Platform</MobileLink>
            <MobileLink onClick={() => scrollToSection("faq")}>FAQs</MobileLink>
            <MobileLink onClick={() => scrollToSection("contact")}>Contact</MobileLink>

            <button
              onClick={openDemo}
              className="w-full mt-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-700/30"
            >
              Book a Demo
            </button>
                        <MobileLink
              onClick={() =>
                window.open(
                  "https://easyhunt.in/login",
                  "_self"
                )
              }
            >
              Login
            </MobileLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* Desktop Link */
function NavLink({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode
  onClick: () => void
  active: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 transition ${
        active ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md border border-white/10"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

/* Mobile Link */
function MobileLink({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="text-base hover:text-white transition-colors cursor-pointer"
    >
      {children}
    </div>
  )
}