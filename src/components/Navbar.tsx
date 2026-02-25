import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import DemoModal from "./DemoModal";
type Props = {
  openDemo: () => void;
};
export default function Navbar({ openDemo }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [demoOpen, setDemoOpen] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  // Detect scroll background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = [
        "home",
        "platform",
        "how-it-works",
        "product",
        "showcase",
        "faq",
        "footer",
      ]

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
            break
          }
        }
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 200)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">

      {/* Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: scrolled ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
      />

      {/* Glow Strip */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-700/20 via-indigo-600/10 to-purple-700/20 blur-2xl" />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#0b0f25]/80 backdrop-blur-xl shadow-lg shadow-purple-900/10"
            : "bg-[#0b0f25]/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 lg:px-16 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div
  onClick={() => scrollToSection("home")}
  className="flex items-center gap-3 cursor-pointer select-none"
>
  <img
    src="/easyhunt.png"
    alt="Easy Hunt Logo"
    className="h-12 w-auto object-contain"

  />
 
</div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px]">
            <NavLink active={active === "home"} onClick={() => scrollToSection("home")}>Home</NavLink>
            <NavLink active={active === "how-it-works"} onClick={() => scrollToSection("how-it-works")}>How it works</NavLink>
            <NavLink active={active === "product"} onClick={() => scrollToSection("product")}>Features</NavLink>
            <NavLink active={active === "platform"} onClick={() => scrollToSection("platform")}>Platform</NavLink>
            <NavLink active={active === "faq"} onClick={() => scrollToSection("faq")}>FAQs</NavLink>
            <NavLink active={active === "footer"} onClick={() => scrollToSection("footer")}>Contact</NavLink>
            
          </nav>

          {/* Premium CTA */}
    
<button
  onClick={openDemo}
  className="relative px-7 py-3 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-700/30 hover:shadow-purple-700/60 transition-all overflow-hidden"
>
  <span className="relative z-10">Book a Demo</span>
  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
</button>

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
            <MobileLink onClick={() => scrollToSection("footer")}>Contact</MobileLink>

            <button className="w-full mt-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-700/30">
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* Desktop Link */
function NavLink({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 text-gray-300 hover:text-white transition"
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
function MobileLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <div onClick={onClick} className="text-base hover:text-white transition-colors cursor-pointer">
      {children}
    </div>
  )
}
