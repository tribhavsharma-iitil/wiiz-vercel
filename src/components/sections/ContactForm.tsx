"use client";

import { useState, type FormEvent } from "react";
import { FormField, SubmitButton } from "@/components/ui";
import { contactFormFields } from "@/lib/data/contact-form";

type SubmissionStatus = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    // Placeholder until a real lead-capture endpoint or CRM webhook is wired up.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-1 flex-col gap-6 rounded-card border border-border-subtle bg-white p-8"
      noValidate
    >
      {contactFormFields.map((field) => (
        <FormField key={field.id} field={field} />
      ))}

      <SubmitButton className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Start the Conversation →"}
      </SubmitButton>

      {status === "success" ? (
        <p role="status" className="text-body-sm font-medium text-brand">
          Message sent — thanks for reaching out, we&rsquo;ll be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
