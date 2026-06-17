"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "sending" | "sent" | "error";

const projectTypes = ["MVP", "Custom Software", "AI", "Design", "Cloud", "SaaS", "Other"];
const budgets = ["Under $10k", "$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+", "Not sure yet"];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(payload.message ?? "Message was not sent. Check the required fields and send again.");
        return;
      }

      setState("sent");
      setMessage(payload.message ?? "Message sent. Tora will reply with next steps.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Message was not sent. Check your connection and send again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Project type" name="projectType" options={projectTypes} required />
        <SelectField label="Budget range" name="budget" options={budgets} required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full resize-y rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink transition focus:border-indigo focus:outline-none"
          placeholder="Tell us what you want to build, what exists today, and what needs to happen next."
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={state === "sending"} className="disabled:cursor-wait disabled:opacity-70">
          {state === "sending" ? "Sending message" : "Send message"}
        </Button>
        {message && (
          <p
            className={`text-sm leading-6 ${state === "sent" ? "text-ink" : "text-muted"}`}
            role={state === "error" ? "alert" : "status"}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", autoComplete, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink transition focus:border-indigo focus:outline-none"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink transition focus:border-indigo focus:outline-none"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
