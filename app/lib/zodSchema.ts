import { z } from "zod"
import validator from "validator"

const MAX_FILE_SIZE = 5000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const registerSchema = z.object({
    firstName: z.string({ required_error: "Input your first name" }),
    lastName: z.string({ required_error: "Input your last name" }),
    email: z.preprocess(
        (value) => (value === '' ? undefined : value),
        z.string({ required_error: 'Email is required' }).email('Email is invalid'),
    ),
    mobileNumber: z.
        string().
        min(10, { message: "Must be a valid phone number" }).
        max(14, { message: "Must be a valid phone number" }).
        refine(validator.isMobilePhone),
    frontOfId: z.any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 500KB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
    backOfId: z.any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image is 500KB`)
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 500KB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
})