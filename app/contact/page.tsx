"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_ofh2xlv",
        "template_k779zdv",
        form,
        "kHF76lVuHfckxlsGp"
      );
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccess("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact | Shankar Pradhan</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-6">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">Contact Me</h1>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl">
          {/* Google Map */}
          <div className="w-full md:w-1/2 h-72 md:h-96">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=cm luxury gents pg 18 th cross road&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-center text-sm mt-3">{success}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
