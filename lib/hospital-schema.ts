import * as z from "zod";

export const hospitalProfileSchema = z.object({
  hospitalNumber: z
    .string()
    .min(3, { message: "Hospital Number must be at least 3 characters" }),
  hospitalName: z
    .string()
    .min(3, { message: "Hospital Name must be at least 3 characters" }),
  location: z
    .string()
    .min(3, { message: "Location must be at least 3 characters" }),
  contactInfo: z
    .string()
    .min(3, { message: "Contact Information must be at least 3 characters" }),
  email: z.string().email({ message: "Email must be valid" }),
  type: z.string().min(3, { message: "Type must be at least 3 characters" }),
  ownership: z
    .string()
    .min(3, { message: "Ownership must be at least 3 characters" }),
  services: z.array(z.string()),
  specializedDepartments: z.array(z.string()),
  facilities: z.array(z.string()),
  medicalEquipment: z.array(z.string()),
  staffing: z.object({
    doctors: z.number(),
    nurses: z.number(),
    otherStaff: z.number(),
  }),
  accreditations: z.array(z.string()),
  insuranceAccepted: z.array(z.string()),
  paymentOptions: z.array(z.string()),
  policies: z.string(),
});

export type HospitalProfileFormValues = z.infer<typeof hospitalProfileSchema>;
