import { Link } from "react-router-dom"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer id="footer" className="bg-gray-900 text-foreground py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-[18px] font-medium mb-6 text-foreground">
              Easy Hunt
            </h3>
            <p className="text-body text-gray-300">
              Search smarter. Not harder.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[18px] font-medium mb-6 text-foreground">
              Quick Links
            </h4>

            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Features
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  FAQs
                </button>
              </li>

              <li>
                <Link
                  to="/articles"
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[18px] font-medium mb-6 text-foreground">
              Contact
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:easyhunt@encegenailabs.com"
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                 Call us at :- +917030555126 <br />
                   +917030555120 <br />

                </a>
                <a
                  href="mailto:easyhunt@encegenailabs.com"
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Email :- easyhunt@encegenailabs.com

                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Easy Hunt. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
