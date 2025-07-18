"use client";

import { useState } from "react";
import { contactSchema } from "../schemas";
import { z } from "zod";
import FormError from "../components/FormError";
import toast from "react-hot-toast";

const defaultFormVals = {
  name: "",
  email: "",
  message: "",
};

type FormError = {
  name?: string[];
  email?: string[];
  message?: string[];
};

function Contact() {
  const [formData, setFormData] = useState(defaultFormVals);
  const [errors, setErrors] = useState<FormError>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrors({});

    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      setErrors(z.flattenError(parsed.error).fieldErrors);
      return;
    }

    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    const result = await res.json();

    // Check if error
    if (result.error) {
      const { error } = result;

      // if from inputs
      if (result.code === 333) {
        setErrors(error);
      } else {
        // If from rate limit or email opts
        return toast.error(error);
      }
    }

    if (result.success) toast.success(result.message);
  }

  return (
    <section id="contact" className="py-28 md:py-32">
      <div className="lg-container border border-white/20 py-10 rounded-xl bg-white/5 px-8">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle mt-2">
          Have an idea? Let&apos;s turn it into reality.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-start md:justify-between">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-geist text-white mb-1"
              >
                Name
              </label>
              <input
                className="border border-white/20 rounded-sm px-3 py-0.5 min-w-[400px] focus:outline-white/20 focus:outline-2 focus:outline-offset-3"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
              />

              {errors?.name && (
                <FormError>
                  <span>{errors.name}</span>
                </FormError>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-geist text-white mb-1"
              >
                Email
              </label>
              <input
                required
                className="border border-white/20 rounded-sm px-3 py-0.5 min-w-[400px] focus:outline-white/20 focus:outline-2 focus:outline-offset-3"
                id="email"
                name="email"
                onChange={handleChange}
              />

              {errors?.email && (
                <FormError>
                  <span>{errors.email}</span>
                </FormError>
              )}
            </div>
          </div>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="message"
              className="block text-sm font-geist text-white mb-1 text-left"
            >
              Message
            </label>
            <textarea
              required
              className="border border-white/20 rounded-sm px-3 py-0.5 min-w-[400px] focus:outline-white/20 focus:outline-2 focus:outline-offset-3"
              id="message"
              name="message"
              onChange={handleChange}
            />

            {errors?.message && (
              <FormError>
                <span>{errors.message}</span>
              </FormError>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 hover:bg-white hover:text-gray-950 border-2 border-white/50 font-medium cursor-pointer rounded-lg mt-4 transition-colors duration-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
