import { useState, useRef } from "react";
import { Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import "./contact.css";

type Errors = {
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  message?: string;
};

export default function ContactSection() {

  const formRef =
    useRef<HTMLFormElement | null>(
      null
    );

  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [errors, setErrors] =
    useState<Errors>({});

  /* =========================
     VALIDATION
  ========================= */

  const validateField = (
    name: string,
    value: string
  ) => {

    let error = "";

    const trimmedValue =
      value.trim();

    switch (name) {

      /* =========================
         NAME
      ========================= */

      case "user_name":

        if (!trimmedValue) {

          error =
            "Name is required";
        }

        else if (
          trimmedValue.length < 3
        ) {

          error =
            "Minimum 3 characters required";
        }

        else if (
          trimmedValue.length > 32
        ) {

          error =
            "Maximum 32 characters allowed";
        }

        else if (
          !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(
            trimmedValue
          )
        ) {

          error =
            "Only alphabets allowed";
        }

      break;

      /* =========================
         EMAIL
      ========================= */

      case "user_email":

        if (!trimmedValue) {

          error =
            "Email is required";
        }

        else if (
          /[A-Z]/.test(
            trimmedValue
          )
        ) {

          error =
            "Capital letters not allowed";
        }

        else if (
          /^\d/.test(
            trimmedValue
          )
        ) {

          error =
            "Email cannot start with number";
        }

        else if (
          trimmedValue.length > 60
        ) {

          error =
            "Maximum 60 characters allowed";
        }

        else if (
          !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
            trimmedValue
          )
        ) {

          error =
            "Enter valid email address";
        }

      break;

      /* =========================
         PHONE
      ========================= */

      case "user_phone":

        if (!trimmedValue) {

          error =
            "Phone number is required";
        }

        else if (
          !/^\d+$/.test(
            trimmedValue
          )
        ) {

          error =
            "Only numbers allowed";
        }

        else if (
          trimmedValue.length !== 10
        ) {

          error =
            "Enter valid 10 digit number";
        }

      break;

      /* =========================
         MESSAGE
      ========================= */

      case "message":

        if (!trimmedValue) {

          error =
            "Message is required";
        }

        else if (
          trimmedValue.length < 15
        ) {

          error =
            "Minimum 15 characters required";
        }

        else if (
          trimmedValue.length > 500
        ) {

          error =
            "Maximum 500 characters allowed";
        }

      break;
    }

    return error;
  };

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (
    e:
      React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement
      >
  ) => {

    const {
      name,
      value
    } = e.target;

    let cleanedValue = value;

    /* =========================
       NAME
    ========================= */

    if (
      name === "user_name"
    ) {

      cleanedValue =
        value.replace(
          /^\s+/,
          ""
        );

      if (
        !/^[A-Za-z\s]*$/.test(
          cleanedValue
        )
      ) {

        setErrors(prev => ({
          ...prev,
          user_name:
            "Special characters & numbers not allowed",
        }));

        return;
      }
    }

    /* =========================
       EMAIL
    ========================= */

    if (
      name === "user_email"
    ) {

      cleanedValue =
        value
          .replace(/\s/g, "");

      if (
        /[A-Z]/.test(
          cleanedValue
        )
      ) {

        setErrors(prev => ({
          ...prev,
          user_email:
            "Capital letters not allowed",
        }));

        return;
      }
    }

    /* =========================
       PHONE
    ========================= */

    if (
      name === "user_phone"
    ) {

      cleanedValue =
        value.replace(
          /\D/g,
          ""
        );
    }

    /* =========================
       MESSAGE LIMIT
    ========================= */

    if (
      name === "message" &&
      cleanedValue.length > 500
    ) {

      setErrors(prev => ({
        ...prev,
        message:
          "Maximum 500 characters allowed",
      }));

      return;
    }

    /* =========================
       UPDATE FIELD
    ========================= */

    e.target.value =
      cleanedValue;

    setErrors(prev => ({
      ...prev,
      [name]:
        validateField(
          name,
          cleanedValue
        ),
    }));
  };

  /* =========================
     SUBMIT
  ========================= */
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  /* =========================
     PREVENT DUPLICATE CLICK
  ========================= */

  if (loading) return;

  setLoading(true);

  const form =
    formRef.current;

  if (!form) {

    setLoading(false);
    return;
  }

  const formData =
    new FormData(form);

  const fields = {

    user_name:
      formData
        .get("user_name")
        ?.toString() || "",

    user_email:
      formData
        .get("user_email")
        ?.toString() || "",

    user_phone:
      formData
        .get("user_phone")
        ?.toString() || "",

    message:
      formData
        .get("message")
        ?.toString() || "",
  };

  /* =========================
     VALIDATE
  ========================= */

  const newErrors: Errors =
    {};

  Object.entries(fields).forEach(
    ([key, value]) => {

      const error =
        validateField(
          key,
          value
        );

      if (error) {

        newErrors[
          key as keyof Errors
        ] = error;
      }
    }
  );

  setErrors(newErrors);

  /* =========================
     IF ERROR
  ========================= */

  if (
    Object.keys(newErrors)
      .length > 0
  ) {

    toast.error(
      "Please fill all fields correctly ❌"
    );

    setLoading(false);

    return;
  }

  /* =========================
     SEND EMAIL
  ========================= */

  try {

    await emailjs.sendForm(

      import.meta.env
        .VITE_EMAILJS_SERVICE_ID,

      import.meta.env
        .VITE_EMAILJS_CONTACT_TEMPLATE_ID,

      form,

      import.meta.env
        .VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success(
      "Message sent successfully 🚀"
    );

    /* RESET FORM */

    form.reset();

    setErrors({});

  } catch (error) {

    console.error(
      "FAILED...",
      error
    );

    toast.error(
      "Failed to send message ❌"
    );

  } finally {

    /* BUTTON ENABLE AGAIN */

    setLoading(false);
  }
};

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-wrapper">

        {/* LEFT */}

        <div className="contact-info">

          <h2>
            Get in Touch
          </h2>

          <p className="contact-sub">

            We’d love to hear from you.
            Reach out for support,
            demos, or any questions.

          </p>

          {/* PHONE */}

          <div className="info-item">

            <div className="icon">

              <Phone size={18} />

            </div>

            <div>

              <h4>
                Phone
              </h4>

              <p>
                +91 7030555126
              </p>

            </div>

          </div>

          {/* EMAIL */}

          <div className="info-item">

            <div className="icon">

              <Mail size={18} />

            </div>

            <div>

              <h4>
                Email
              </h4>

              <p>
                easyhunt@encegenailabs.com
              </p>

            </div>

          </div>

        </div>

        {/* FORM */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* NAME */}

          <div className="form-row">

            <label>
              Full Name *
            </label>

            <input
              name="user_name"
              type="text"
              maxLength={32}
              placeholder="Enter your full name"
              onChange={
                handleChange
              }
            />

            {errors.user_name && (

              <span className="error">
                {errors.user_name}
              </span>
            )}

          </div>

          {/* EMAIL */}

          <div className="form-row">

            <label>
              Email Address *
            </label>

            <input
              name="user_email"
              type="email"
              maxLength={60}
              placeholder="your.email@example.com"
              onChange={
                handleChange
              }
            />

            {errors.user_email && (

              <span className="error">
                {errors.user_email}
              </span>
            )}

          </div>

          {/* PHONE */}

          <div className="form-row">

            <label>
              Phone Number *
            </label>

            <input
              name="user_phone"
              type="tel"
              maxLength={10}
              inputMode="numeric"
              placeholder="10 digit number"
              onChange={
                handleChange
              }
            />

            {errors.user_phone && (

              <span className="error">
                {errors.user_phone}
              </span>
            )}

          </div>

          {/* MESSAGE */}

          <div className="form-row">

            <label>
              Message *
            </label>

            <textarea
              name="message"
              maxLength={500}
              placeholder="Tell us about your requirements..."
              onChange={
                handleChange
              }
            />

            {errors.message && (

              <span className="error">
                {errors.message}
              </span>
            )}

          </div>

          {/* BUTTON */}

         <button
  type="submit"
  className={`send-btn ${
    loading
      ? "disabled-btn"
      : ""
  }`}
  disabled={loading}
>
  {loading ? (
    <span>
      Sending...
    </span>
  ) : (
    <span className="flex items-center gap-2">
      Send Message
      <Send size={16} />
    </span>
  )}
</button>
        </form>

      </div>

    </section>
  );
}