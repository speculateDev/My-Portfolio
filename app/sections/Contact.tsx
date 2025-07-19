"use client";

import { useState } from "react";
import { contactSchema } from "../schemas";
import { z } from "zod";
import FormError from "../components/FormError";
import toast from "react-hot-toast";
import SubmitBtn from "../components/SubmitBtn";

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
  const [isPending, setIsPending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrors({});
    setIsPending(true);

    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      setErrors(z.flattenError(parsed.error).fieldErrors);
      setIsPending(false);
      return;
    }

    try {
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
          toast.error(error);
        }
      }

      if (result.success) toast.success(result.message);
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setFormData(defaultFormVals);
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="py-28 md:py-32 px-4">
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
                className="form-inpt"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
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
                className="form-inpt"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
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
              className="form-inpt"
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
            />

            {errors?.message && (
              <FormError>
                <span>{errors.message}</span>
              </FormError>
            )}
          </div>
          <SubmitBtn
            pendingLabel="Sending..."
            label="Send Message"
            isPending={isPending}
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
