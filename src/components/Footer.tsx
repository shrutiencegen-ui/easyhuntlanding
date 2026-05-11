import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

type Props = {
  openDemo: () => void;
};

export default function Footer({ openDemo }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0f0a1f] via-[#140a2a] to-[#1a0f35] text-white pt-24 pb-12 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

          {/* Logo */}
         <div className="flex flex-col gap-5">
  <div className="flex items-center gap-2">
   <img
  src="/logo.png"
  alt="Easy Hunt Logo"
  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
/>
  </div>

  <p className="max-w-sm text-base md:text-lg leading-relaxed text-gray-200 font-medium">
  Smart way to search Maharashtra property records.
  <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
    {" "}
    Save hours with fast and accurate results.
  </span>
</p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">

              {[
                { name: "Home", id: "home" },
                { name: "How it works", id: "how-it-works" },
                { name: "Features", id: "product" },
                { name: "Platform", id: "platform" },
                { name: "FAQs", id: "faq" },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </li>
              ))}

            <li>
              <button
                onClick={() => {
                  navigate("/articles");

                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 50);
                }}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                Articles

                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </li>

              {/* Contact moved to the end */}
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  Contact
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                </button>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  +91  7030555126 <br />
                  +91 7030555123   <br />
                  +91 7030555120
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:easyhunt@encegenailabs.com">
                  easyhunt@encegenailabs.com
                </a>
              </li>

              <li>
               <button
                onClick={openDemo}
                className="mt-3 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all duration-300 hover:scale-105"
              >
                Request a Demo
                <ArrowUpRight className="w-4 h-4" />
              </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} EasyHunt. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.encegenailabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              EncegenAI Labs
            </a>
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}