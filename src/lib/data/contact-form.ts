import type { ContactFormField } from "@/lib/types";

export const contactFormFields: readonly ContactFormField[] = [
  {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Work email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    placeholder: "Tell us about your network",
    type: "textarea",
  },
];
