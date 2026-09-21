import type { ContactFormField } from "@/lib/types";

const controlStyles =
  "w-full rounded-lg border border-border-subtle bg-[#f7f9fc] p-3.5 text-body-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

interface FormFieldProps {
  readonly field: ContactFormField;
}

export function FormField({ field }: FormFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={field.id} className="text-body-sm font-semibold text-ink">
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          rows={4}
          className={controlStyles}
        />
      ) : (
        <input
          id={field.id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          className={controlStyles}
        />
      )}
    </div>
  );
}
