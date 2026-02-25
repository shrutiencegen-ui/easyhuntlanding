import { Mail, Phone, Send } from "lucide-react";
import "./contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT SIDE (INFO CARD) */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-sub">
            We’d love to hear from you. Reach out for support, demos, or any questions.
          </p>

          <div className="info-item">
            <div className="icon"><Phone size={18}/></div>
            <div>
              <h4>Phone</h4>
              <p>+91 7030555120</p>
              <p>+91 7030555126</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon"><Mail size={18}/></div>
            <div>
              <h4>Email</h4>
              <p>easyhunt@encegenailabs.com</p>
              <p>encegenailabs@gmail.com</p>
            </div>
          </div>

          <div className="hours">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 11:00 AM - 7:00 PM</p>
            <p>Saturday:11:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form className="contact-form">
          <div className="form-row">
            <label>Full Name *</label>
            <input type="text" placeholder="Enter your full name"/>
          </div>

          <div className="form-row">
            <label>Email Address *</label>
            <input type="email" placeholder="your.email@example.com"/>
          </div>

          <div className="form-row">
            <label>Phone Number *</label>
            <input type="tel" placeholder="+91 98765 43210"/>
          </div>

      

          <div className="form-row">
            <label>Message *</label>
            <textarea placeholder="Tell us about your requirements..."/>
          </div>

          <button className="send-btn">
            Send Message <Send size={16}/>
          </button>
        </form>

      </div>
    </section>
  );
}