import { z } from 'zod';
import {
    emailSchema,
    phoneSchema,
    SelectSchema,
    passwordSchema,
} from '@/validations/schema';

export const SignUpSchema = z.object({
    jobTitle: z.string().min(1, { message: 'Job title is required' }),
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    password: passwordSchema,
    bio: z.string().optional(),
    gender: SelectSchema,
    phone: phoneSchema,
    email: emailSchema,
    address: z.object({
        country: z.string().min(1, { message: 'Country is required' }),
        city: z.string().min(1, { message: 'City is required' }),
        state: z.string().min(1, { message: 'State is required' }),
        addressLine: z.string().min(1, { message: 'Address line is required' }),
    }),
    experience: z
        .array(
            z.object({
                companyName: z
                    .string()
                    .min(1, { message: 'Company name is required' }),
                jobTitle: z
                    .string()
                    .min(1, { message: 'Job title is required' }),
                description: z.string().optional(),
                startDate: z
                    .date({ required_error: 'Start date is required' })
                    .transform((date) => date.toISOString().split('T')[0])
                    .refine((str) => str.length === 10, {
                        message: 'Start date must be a valid date',
                    }),
                endDate: z
                    .date({ required_error: 'End date is required' })
                    .transform((date) => date.toISOString().split('T')[0])
                    .refine((str) => str.length === 10, {
                        message: 'End date must be a valid date',
                    }),
            })
        )
        .optional(),

    education: z
        .array(
            z.object({
                school: z
                    .string()
                    .min(1, { message: 'School name is required' }),
                degree: z.string().min(1, { message: 'Degree is required' }),
                fieldOfStudy: z
                    .string()
                    .min(1, { message: 'Field of study is required' }),
            })
        )
        .optional(),
    portfolio: z
        .array(
            z.object({
                link: z
                    .string()
                    .min(1, { message: 'Portfolio link is required' }),
                description: z
                    .string()
                    .min(1, { message: 'Portfolio description is required' })
                    .max(100, {
                        message:
                            'Description should be less than 100 characters',
                    }),
            })
        )
        .optional(),
    certification: z
        .array(
            z.object({
                title: z
                    .string()
                    .min(1, { message: 'Certificate name is required' }),
                link: z.string().min(1, {
                    message: 'Provide verifiable link for certificate',
                }),
                date: z
                    .date({ required_error: 'Date received is required' })
                    .transform((date) => date.toISOString().split('T')[0])
                    .refine((str) => str.length === 10, {
                        message: 'Date received must be a valid date',
                    }),
            })
        )
        .optional(),
    skills: z.array(z.object({ value: z.string(), label: z.string() })),
});

export type SignUpInputs = z.infer<typeof SignUpSchema>;
