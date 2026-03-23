import { useState, useRef } from "react";
import { Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./contact.css";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    // 1. FORM DATA
    const formData = new FormData(form);
    const name = formData.get("user_name")?.toString().trim();
    const email = formData.get("user_email")?.toString().trim();
    const phone = formData.get("user_phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // 2. VALIDATIONS
    if (!name || !email || !phone || !message) {
      toast.error("All fields are required! ❌");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address! 📧");
      setLoading(false);
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      toast.error("Phone number must be exactly 10 digits! 📞");
      setLoading(false);
      return;
    }

    // 3. EMAILJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          form.reset(); // ✅ safe
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Something went wrong. Check console.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact-section">
      <Toaster position="top-center" containerStyle={{ zIndex: 99999 }} />

      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-sub">
            We’d love to hear from you. Reach out for support, demos, or any questions.
          </p>

          <div className="info-item">
            <div className="icon"><Phone size={18} /></div>
            <div>
              <h4>Phone</h4>
              <p>+91 7030555120</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon"><Mail size={18} /></div>
            <div>
              <h4>Email</h4>
              <p>easyhunt@encegenailabs.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <label>Full Name *</label>
            <input
              name="user_name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-row">
            <label>Email Address *</label>
            <input
              name="user_email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label>Phone Number *</label>
            <input
              name="user_phone"
              type="tel"
              placeholder="10 digit number"
              required
            />
          </div>

          <div className="form-row">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Tell us about your requirements..."
              required
            />
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">Sending...</span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message <Send size={16} />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}