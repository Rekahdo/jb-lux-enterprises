import { MimeTypes } from "@/lib/utils";
import z from "zod";

export const imageValidator = z.object({
  src: z
    .instanceof(File, { message: "Please select a valid image" })
    .refine((file) => file.size <= 10 * 1024 * 1024, "Max file size is 10MB")
    .refine(
      (file) =>
        ([MimeTypes.PNG, MimeTypes.JPEG] as string[]).includes(file.type),
      "PNG, or JPEG allowed",
    ),
  alt: z.string(),
});

export const fileValidator = z.object({
  name: z.string().nonempty().max(50),
  type: z.enum(["bank-receipt", "order-receipt"]),
  file: z
    .instanceof(File, { message: "Please select a valid file" })
    .refine((file) => file.size <= 5 * 1024 * 1024, "Max file size is 5MB")
    .refine(
      (file) =>
        (
          [
            MimeTypes.PDF,
            MimeTypes.JPEG,
            MimeTypes.PNG,
            MimeTypes.SVG,
          ] as string[]
        ).includes(file.type),
      "Only PDF, PNG, JPEG, or SVG allowed",
    ),
});

export const tagValidator = z.object({
  title: z.string(),
  description: z.optional(z.string()),
});

export const nameValidator = z
  .string()
  .trim()
  .min(2, "Full name is required")
  .max(20, "Full name is too long");

export const phoneValidator = z.object({
  code: z
    .string()
    .trim()
    .min(1, "Country code is required")
    .regex(/^\+\d{1,4}$/, "Invalid country code (e.g., +234)"),

  number: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s+/g, ""))
    .refine((val) => /^\d{7,15}$/.test(val), {
      message: "Phone number must be between 7 and 15 digits",
    }),
});

export const addressValidator = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(10, "Name is too long")
    .optional(),

  houseNumber: z
    .string()
    .trim()
    .min(1, "House number is required")
    .max(10, "House number is too long"),

  street: z
    .string()
    .trim()
    .min(3, "Street name must be at least 3 characters")
    .max(100, "Street name is too long"),

  city: z
    .string()
    .trim()
    .min(2, "City must be at least 2 characters")
    .max(50, "City name is too long"),

  state: z
    .string()
    .trim()
    .min(2, "State is required")
    .max(50, "State name is too long"),

  country: z
    .string()
    .trim()
    .min(2, "Country is required")
    .max(56, "Country name is too long"),

  postalCode: z.string().trim().max(10, "Postal code is too long").optional(),

  closestBusStop: z
    .string()
    .trim()
    .max(100, "Bus stop description is too long")
    .optional(),
});

const wholesaleTierValidator = z.object({
  minQuantity: z.number().int().positive(),
  discountPercentage: z.number().min(0).max(100),
});

const storeFeatureValidator = z.object({
  title: z.string().min(2, "Title is required").max(50, "Title is too long"),
  description: z
    .string()
    .min(10, "Description is required")
    .max(250, "Description is too long"),
});

// SCHEMAS
export const signUpSchema = z.object({
  name: z.string().min(3).max(30),
  email: z.email(),
  password: z.string().min(8).max(30),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().nonempty(),
});

export const roleSchema = z.object({
  userId: z.string(),
  role: z.enum(["admin", "sales", "manager"]),
});

export const announcementSchema = z.object({
  messages: z.array(
    z.object({
      startTime: z.date(),
      endTime: z.date(),
      text: z.string(),
    }),
  ),
  phoneNumber: phoneValidator,
  address: addressValidator,
});

export const headerSchema = z.object({
  logo: imageValidator,
});

export const heroSchema = z.object({
  badge: z.optional(z.string()),
  headline: z.string(),
  description: z.string(),
  images: z.array(imageValidator),
  tags: z.optional(z.array(tagValidator)),
});

export const storeFeatureSchema = z.object({
  discount: storeFeatureValidator,
  trust: storeFeatureValidator,
  logistics: storeFeatureValidator,
});

export const visitStoreSchema = z.object({
  badge: z.string(),
  images: z.array(imageValidator).min(1),
  overline: z.string(),
  headline: z.string(),
  description: z.string().min(10),
  address: addressValidator,
  addressNote: z.string(),
  phoneNumber: z.string(),
  phoneNote: z.string(),
});

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Product name is required"),
  badge: z.string().optional(),
  category: z.string().min(2, "Category is required"),
  type: z.string().min(2, "Type is required"),
  gender: z.enum(["male", "female", "unisex"]),
  description: z.string().min(10, "Description is required"),
  unitPrice: z.number().positive("Price must be greater than 0"),
  stock: z.number().int().nonnegative("Stock cannot be negative"),
  sizes: z.array(z.string()).min(1, "At least one size is required"),
  colors: z
    .array(
      z.object({
        name: z.string(),
        hex: z.string().optional(),
        image: imageValidator,
      }),
    )
    .min(1, "At least one color is required"),
  wholesaleTiers: z.array(wholesaleTierValidator).optional(),

  details: z.object({
    fabric: z.string(),
    provenance: z.string(),
    fullDescription: z.string(),
  }),

  isBespokeAvailable: z.boolean().default(false),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
});

export const checkoutDetails = z.object({
  firstName: nameValidator,
  lastName: nameValidator,
  email: z.email("Invalid email address"),
  phone: phoneValidator,
  address: addressValidator,
  bankReceipt: fileValidator,
  orderItems: z
    .array(
      z.object({
        productId: z.string(),
        discountPercentage: z.number().min(0).max(100),
        size: z.string(),
        color: z.string(),
        quantity: z.number().min(1),
      }),
    )
    .min(1),
  notes: z
    .string()
    .trim()
    .max(500, "Notes cannot exceed 500 characters")
    .optional(),
});

const storeHoursSchema = z
  .object({
    day: z.enum([
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ]),
    openHour: z
      .string()
      .regex(
        /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        "Time must be in HH:MM format (e.g., 09:00)",
      ),
    closeHour: z
      .string()
      .regex(
        /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        "Time must be in HH:MM format (e.g., 18:00)",
      ),
  })
  .refine(
    (data) => {
      if (data.openHour && data.closeHour) {
        return data.openHour < data.closeHour;
      }
      return true;
    },
    {
      message: "Closing time must be after opening time",
      path: ["closeHour"],
    },
  );

export const storeSettingsSchema = z.object({
  brandName: z.string(),
  bankName: z.string().trim().min(2, "Bank name is required"),
  accountName: z.string().trim().min(2, "Account name is required"),
  accountNumber: z.string(),
  phoneNumber: phoneValidator,
  address: addressValidator,
  hours: z
    .array(storeHoursSchema)
    .min(1, "At least one store hour must be provided"),
});

export const sendMessageSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  subject: z.string().min(2),
  message: z.string().nonempty(),
});

export const footerSchema = z.object({
  description: z.string(),
});