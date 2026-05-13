import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DatePicker from "react-datepicker";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";
import "./demoModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  countryCode: string;
  contact: string;
  email: string;
  company: string;
  date: Date | null;
  time: Date | null;
  duration: number;
};

type Errors = {
  name?: string;
  contact?: string;
  email?: string;
  company?: string;
  date?: string;
  time?: string;
};

const initialFormData: FormData = {
  name: "",
  countryCode: "+91",
  contact: "",
  email: "",
  company: "",
  date: null,
  time: null,
  duration: 60,
};

export default function DemoModal({
  isOpen,
  onClose,
}: Props) {

  const [formData, setFormData] =
    useState<FormData>(
      initialFormData
    );

  const [errors, setErrors] =
    useState<Errors>({});

  const [submitting, setSubmitting] =
    useState(false);

  /* =========================
     VALIDATION
  ========================= */

  const validateField = (
    name: keyof FormData,
    value: any
  ) => {

    let error = "";

    const trimmedValue =
      typeof value === "string"
        ? value.trim()
        : value;

    switch (name) {

      /* NAME */

      case "name":

        if (!trimmedValue) {

          error = "Name is required";

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
            "Special characters not supported";
        }

      break;

      /* CONTACT */

      case "contact":

        if (!trimmedValue) {

          error = "Contact is required";

        }

        else if (
          !/^\d+$/.test(trimmedValue)
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

      /* EMAIL */

      case "email":

        if (!trimmedValue) {

          error = "Email is required";

        }

        else if (
          !/^\S+@\S+\.\S+$/.test(
            trimmedValue
          )
        ) {

          error =
            "Enter valid email";
        }

      break;

      /* COMPANY */

      case "company":

        if (trimmedValue) {

          if (
            trimmedValue.length > 32
          ) {

            error =
              "Maximum 32 characters allowed";
          }

          else if (
            !/^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/.test(
              trimmedValue
            )
          ) {

            error =
              "Special characters not supported";
          }
        }

      break;

      /* DATE */

      case "date":

        if (!value) {

          error = "Select date";
        }

      break;

      /* TIME */

      case "time":

        if (!value) {

          error = "Select time";
        }

      break;
    }

    return error;
  };

  /* =========================
     HANDLE INPUTS
  ========================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement
    >
  ) => {

    const { name, value } =
      e.target;

    const cleanedValue =
      value.startsWith(" ")
        ? value.trimStart()
        : value;

    setFormData(prev => ({
      ...prev,
      [name]:
        name === "duration"
          ? Number(cleanedValue)
          : cleanedValue,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: validateField(
        name as keyof FormData,
        cleanedValue
      ),
    }));
  };

  /* =========================
     DATE
  ========================= */

  const handleDateChange = (
    date: Date | null
  ) => {

    setFormData(prev => ({
      ...prev,
      date,
    }));

    setErrors(prev => ({
      ...prev,
      date: validateField(
        "date",
        date
      ),
    }));
  };

  /* =========================
     TIME
  ========================= */

  const handleTimeChange = (
    time: Date | null
  ) => {

    setFormData(prev => ({
      ...prev,
      time,
    }));

    setErrors(prev => ({
      ...prev,
      time: validateField(
        "time",
        time
      ),
    }));
  };

  /* =========================
     FORMAT TIME
  ========================= */

  const formatTime = (
    date: Date | null
  ) => {

    if (!date) return "";

    return date.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };

  const calculateEndTime = () => {

    if (!formData.time) return "";

    const end = new Date(
      formData.time.getTime() +
      formData.duration * 60000
    );

    return end.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    // prevent multiple submits
    if (submitting) return;

    const newErrors: Errors = {};

    Object.keys(formData).forEach(
      (key) => {

        const error =
          validateField(
            key as keyof FormData,
            formData[
              key as keyof FormData
            ]
          );

        if (error) {

          newErrors[
            key as keyof Errors
          ] = error;
        }
      }
    );

    setErrors(newErrors);

    if (
      Object.keys(newErrors)
        .length > 0
    ) {

      toast.error(
        "Please fill all required fields correctly"
      );

      return;
    }

    try {

      setSubmitting(true);

      const templateParams = {

        /* CUSTOMER DETAILS */

        name:
          formData.name || "N/A",

        countryCode:
          formData.countryCode || "",

        contact:
          formData.contact || "N/A",

        email:
          formData.email || "N/A",

        company:
          formData.company || "N/A",

        /* DEMO DETAILS */

        date:
          formData.date
            ?.toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            ) || "N/A",

        time:
          formatTime(
            formData.time
          ) || "N/A",

        duration:
          `${formData.duration} Minutes`,

        slot:
          `${formatTime(
            formData.time
          )} to ${calculateEndTime()}`
      };

      await emailjs.send(

        import.meta.env
          .VITE_EMAILJS_SERVICE_ID,

        import.meta.env
          .VITE_EMAILJS_TEMPLATE_ID,

        templateParams,

        import.meta.env
          .VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        "Demo scheduled successfully 🚀",
          {
    duration: 4000,
  }
      );

      console.log(
        "EMAIL SENT",
        templateParams
      );

      // RESET FORM

      setFormData(
        initialFormData
      );

      // RESET ERRORS

      setErrors({});

      // CLOSE MODAL

      setTimeout(() => {

        onClose();

      }, 1200);

    } catch (error) {

      console.error(
        "EMAIL ERROR",
        error
      );

      toast.error(
        "Failed to schedule demo",
          {
    duration: 4000,
  }
      );

    } finally {

      setSubmitting(false);
    }
  };

  /* =========================
     BODY SCROLL LOCK
  ========================= */

  useEffect(() => {

    if (!isOpen) return;

    document.body.style.overflow =
      "hidden";

    return () => {

      document.body.style.overflow =
        "auto";
    };

  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(

    <div
      className="demo-overlay"
      onClick={onClose}
    >

      <div
        className="demo-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* CLOSE */}

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        {/* TITLE */}

        <h2 className="demo-title">
          Book a Demo
        </h2>

        <p className="demo-sub">
          Schedule your live product walkthrough
        </p>

        {/* FORM */}

        <form
          className="demo-form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <div className="demo-row">

            <label>
              Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              maxLength={40}
              placeholder="Enter name"
              onChange={(e) => {

                let value =
                  e.target.value.replace(
                    /^\s+/,
                    ""
                  );

                if (
                  !/^[A-Za-z\s]*$/.test(
                    value
                  )
                ) {

                  setErrors(prev => ({
                    ...prev,
                    name:
                      "Special characters not supported",
                  }));

                  return;
                }

                setFormData(prev => ({
                  ...prev,
                  name: value,
                }));

                setErrors(prev => ({
                  ...prev,
                  name:
                    validateField(
                      "name",
                      value
                    ),
                }));
              }}
            />

            {errors.name && (

              <span className="error">
                {errors.name}
              </span>
            )}

          </div>

          {/* CONTACT */}

          <div className="demo-row">

            <label>
              Contact *
            </label>

            <div className="contact-row">

              <select
                name="countryCode"
                value={
                  formData.countryCode
                }
                onChange={handleChange}
                className="country-code"
              >

                <option value="+91">
                  +91
                </option>

                <option value="+1">
                  +1
                </option>

                <option value="+44">
                  +44
                </option>

              </select>

              <input
                type="tel"
                name="contact"
                value={formData.contact}
                placeholder="9876543210"
                maxLength={10}
                inputMode="numeric"
                onChange={(e) => {

                  const onlyNumbers =
                    e.target.value.replace(
                      /\D/g,
                      ""
                    );

                  setFormData(prev => ({
                    ...prev,
                    contact:
                      onlyNumbers,
                  }));

                  setErrors(prev => ({
                    ...prev,
                    contact:
                      validateField(
                        "contact",
                        onlyNumbers
                      ),
                  }));
                }}
              />

            </div>

            {errors.contact && (

              <span className="error">
                {errors.contact}
              </span>
            )}

          </div>

          {/* EMAIL */}

          <div className="demo-row">

            <label>
              Email *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@gmail.com"
            />

            {errors.email && (

              <span className="error">
                {errors.email}
              </span>
            )}

          </div>

          {/* COMPANY */}

          <div className="demo-row">

            <label>
              Company
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              maxLength={40}
              placeholder="Company name"
              onChange={(e) => {

                let value =
                  e.target.value.replace(
                    /^\s+/,
                    ""
                  );

                if (
                  !/^[A-Za-z0-9\s]*$/.test(
                    value
                  )
                ) {

                  setErrors(prev => ({
                    ...prev,
                    company:
                      "Special characters not supported",
                  }));

                  return;
                }

                setFormData(prev => ({
                  ...prev,
                  company: value,
                }));

                setErrors(prev => ({
                  ...prev,
                  company:
                    validateField(
                      "company",
                      value
                    ),
                }));
              }}
            />

            {errors.company && (

              <span className="error">
                {errors.company}
              </span>
            )}

          </div>

          {/* DATE */}

          <div className="demo-row">

            <label>
              Select Date *
            </label>

            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              placeholderText="Choose date"
              className="date-picker"
            />

            {errors.date && (

              <span className="error">
                {errors.date}
              </span>
            )}

          </div>

          {/* TIME */}

          <div className="demo-row">

            <label>
              Select Time *
            </label>

            <DatePicker
              selected={formData.time}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="hh:mm aa"
              placeholderText="Select time"
              className="date-picker"
            />

            {errors.time && (

              <span className="error">
                {errors.time}
              </span>
            )}

          </div>

          {/* DURATION */}

          <div className="demo-row">

            <label>
              Duration
            </label>

            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="duration-select"
            >

              <option value={30}>
                30 Minutes
              </option>

              <option value={60}>
                1 Hour
              </option>

              <option value={90}>
                1.5 Hours
              </option>

              <option value={120}>
                2 Hours
              </option>

            </select>

          </div>

          {/* TIME SLOT */}

          <div className="demo-row">

            <label>
              Time Slot
            </label>

            <div className="time-slot">

              <input
                type="text"
                readOnly
                value={formatTime(
                  formData.time
                )}
              />

              <span className="time-separator">
                to
              </span>

              <input
                type="text"
                readOnly
                value={calculateEndTime()}
                className="end-time"
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className={`demo-submit ${
              submitting
                ? "disabled-btn"
                : ""
            }`}
            disabled={submitting}
          >

            {submitting
              ? "Scheduling..."
              : "Schedule Demo"}

          </button>

        </form>

      </div>

    </div>,

    document.body
  );
}