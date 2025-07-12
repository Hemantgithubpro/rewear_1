import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const itemSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  category: z.enum(['TOPS', 'BOTTOMS', 'DRESSES', 'OUTERWEAR', 'ACCESSORIES', 'SHOES']),
  type: z.string().min(2, 'Type is required'),
  size: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  condition: z.enum(['NEW', 'EXCELLENT', 'GOOD', 'FAIR']),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  pointsValue: z.number().min(1, 'Points value must be at least 1'),
})

export const swapRequestSchema = z.object({
  ownerItemId: z.string(),
  requesterItemId: z.string().optional(),
  swapType: z.enum(['DIRECT_SWAP', 'POINTS_REDEMPTION']),
  pointsUsed: z.number().optional(),
})

export const profileUpdateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  image: z.string().url().optional(),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type ItemInput = z.infer<typeof itemSchema>
export type SwapRequestInput = z.infer<typeof swapRequestSchema>
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>
