import * as z from "zod";

export function getContactFormSchema(t?: (key: string) => string) {
  return z.object({
    name: z.string().min(2, {
      message: t ? t("validation.name.min") : "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: t ? t("validation.email.invalid") : "Please enter a valid email address.",
    }),
    phone: z
      .string()
      .optional()
      .refine(
        (value) => !value || /^\+?[\d\s-]{6,}$/.test(value),
        t ? t("validation.phone.invalid") : "Invalid phone number."
      ),
    message: z.string().min(10, {
      message: t ? t("validation.message.min") : "Message must be at least 10 characters.",
    }),
    agree: z.boolean().refine((val) => val, {
      message: t ? t("validation.agree.required") : "You must agree to the terms.",
    }),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof getContactFormSchema>>;