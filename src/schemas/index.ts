import { z } from 'zod';
import { FollowUpStatus, LeadStatus, TaskPriority, TaskStatus } from '../enums';

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

export const createCustomerSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().min(5).max(30).optional().or(z.literal('')),
  tags: z.array(z.string()).optional(),
  notes: z.string().max(5000).optional(),
});

export const updateCustomerSchema = createCustomerSchema.partial();

export const createLeadSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  source: z.string().max(100).optional(),
  status: z.nativeEnum(LeadStatus).default(LeadStatus.NEW),
  assignedToUserId: z.string().uuid().optional(),
  customerId: z.string().uuid().optional(),
  notes: z.string().max(5000).optional(),
});

export const updateLeadSchema = createLeadSchema.partial();

export const createFollowUpSchema = z.object({
  title: z.string().min(1).max(200),
  dueAt: z.string().datetime(),
  customerId: z.string().uuid().optional(),
  leadId: z.string().uuid().optional(),
  assignedToUserId: z.string().uuid().optional(),
  notes: z.string().max(5000).optional(),
  status: z.nativeEnum(FollowUpStatus).default(FollowUpStatus.PENDING),
});

export const updateFollowUpSchema = createFollowUpSchema.partial();

export const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(5000).optional(),
  dueAt: z.string().datetime().optional(),
  priority: z.nativeEnum(TaskPriority).default(TaskPriority.MEDIUM),
  status: z.nativeEnum(TaskStatus).default(TaskStatus.OPEN),
  assignedToUserId: z.string().uuid().optional(),
  customerId: z.string().uuid().optional(),
  leadId: z.string().uuid().optional(),
});

export const updateTaskSchema = createTaskSchema.partial();

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(10),
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
export type CreateLeadInput = z.infer<typeof createLeadSchema>;
export type UpdateLeadInput = z.infer<typeof updateLeadSchema>;
export type CreateFollowUpInput = z.infer<typeof createFollowUpSchema>;
export type UpdateFollowUpInput = z.infer<typeof updateFollowUpSchema>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
