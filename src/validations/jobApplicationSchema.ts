import { z } from 'zod';

export const jobApplicationSchema = z.object({
    name: z.string().min(2, { message: 'Name is required' }),
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, { message: 'Phone number is required' }),
    resume: z.string().min(1, { message: 'Resume is required' }),
    coverLetter: z.string().optional(),
});

export type ApplicationInputs = z.infer<typeof jobApplicationSchema>;
