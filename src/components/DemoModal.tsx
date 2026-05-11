import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./demoModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DemoModal({ isOpen, onClose }: Props) {

  /* Handle form submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    onClose(); // close modal after submit
  };

  /* ESC key close (only when open) */
  useEffect(() => {
    if (!isOpen) return;

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [isOpen, onClose]);

  /* Prevent background scroll */
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="demo-overlay" onClick={onClose}>
      
      <div
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <h2 className="demo-title">Book a Demo</h2>
        <p className="demo-sub">
          Schedule a live walkthrough with our team.
        </p>

        {/* Form */}
        <form className="demo-form" onSubmit={handleSubmit}>
          
          <div className="demo-row">
            <label>Name *</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              autoFocus
            />
          </div>

          <div className="demo-row">
            <label>Contact *</label>
            <input
              type="tel"
              required
              placeholder="+91 9876543210"
            />
          </div>

          <div className="demo-row">
            <label>Email *</label>
            <input
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>

          <div className="demo-row">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Your company name"
            />
          </div>

         

          <button type="submit" className="demo-submit">
            Schedule Demo
          </button>

        </form>
      </div>
    </div>,
    document.body
  );
}