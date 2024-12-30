"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  // State for form fields
  const [formData, setFormData] = useState({
    subject: "Connecting from portfolio site",
    message: "",
    from: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // Handle change for form inputs
  interface FormData {
    subject: string;
    message: string;
    from: string;
  }

  interface HandleChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission

  interface ApiResponse {
    ok: boolean;
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ from: "", subject: "Connecting from portfolio site", message: "" }); // Reset form fields
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch {
      setStatus("Error sending email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          contact2tayib@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="from"
          type="email"
          value={formData.from}
          onChange={handleChange}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          
          className="mt-4 bg-gray-900 rounded-full hover:bg-gray-700 transition text-white py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="mt-4 text-center text-lg">{status}</p>}
    </motion.section>
  );
}
