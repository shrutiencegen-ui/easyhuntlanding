import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./demoModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DemoModal({ isOpen, onClose }: Props) {

  /* ESC key close */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  /* Prevent background scroll */
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-modal" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>✕</button>

        <h2 className="demo-title">Book a Demo</h2>
        <p className="demo-sub">
          Schedule a live walkthrough with our team.
        </p>

        <form className="demo-form">

          <div className="demo-row">
            <label>Name *</label>
            <input type="text" required placeholder="Enter your name"/>
          </div>

          <div className="demo-row">
            <label>Contact *</label>
            <input type="tel" required placeholder="+91 9876543210"/>
          </div>

          <div className="demo-row">
            <label>Email *</label>
            <input type="email" required placeholder="you@company.com"/>
          </div>

          <div className="demo-row">
            <label>Company Name</label>
            <input type="text" placeholder="Your company name"/>
          </div>

          <div className="demo-row">
            <label>Available Time Slot</label>
            <input type="datetime-local"/>
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