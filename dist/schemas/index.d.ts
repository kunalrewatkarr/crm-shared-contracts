import { z } from 'zod';
import { FollowUpStatus, LeadStatus, TaskPriority, TaskStatus } from '../enums';
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    sortOrder: "asc" | "desc";
    search?: string | undefined;
    sortBy?: string | undefined;
}, {
    page?: number | undefined;
    limit?: number | undefined;
    search?: string | undefined;
    sortBy?: string | undefined;
    sortOrder?: "asc" | "desc" | undefined;
}>;
export declare const createCustomerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email?: string | undefined;
    phone?: string | undefined;
    tags?: string[] | undefined;
    notes?: string | undefined;
}, {
    name: string;
    email?: string | undefined;
    phone?: string | undefined;
    tags?: string[] | undefined;
    notes?: string | undefined;
}>;
export declare const updateCustomerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    phone: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    tags: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    tags?: string[] | undefined;
    notes?: string | undefined;
}, {
    email?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    tags?: string[] | undefined;
    notes?: string | undefined;
}>;
export declare const createLeadSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    source: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof LeadStatus>>;
    assignedToUserId: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: LeadStatus;
    name: string;
    email?: string | undefined;
    phone?: string | undefined;
    notes?: string | undefined;
    source?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
}, {
    name: string;
    email?: string | undefined;
    status?: LeadStatus | undefined;
    phone?: string | undefined;
    notes?: string | undefined;
    source?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
}>;
export declare const updateLeadSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    phone: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    source: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodNativeEnum<typeof LeadStatus>>>;
    assignedToUserId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    status?: LeadStatus | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    notes?: string | undefined;
    source?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
}, {
    email?: string | undefined;
    status?: LeadStatus | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    notes?: string | undefined;
    source?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
}>;
export declare const createFollowUpSchema: z.ZodObject<{
    title: z.ZodString;
    dueAt: z.ZodString;
    customerId: z.ZodOptional<z.ZodString>;
    leadId: z.ZodOptional<z.ZodString>;
    assignedToUserId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof FollowUpStatus>>;
}, "strip", z.ZodTypeAny, {
    status: FollowUpStatus;
    title: string;
    dueAt: string;
    notes?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    leadId?: string | undefined;
}, {
    title: string;
    dueAt: string;
    status?: FollowUpStatus | undefined;
    notes?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    leadId?: string | undefined;
}>;
export declare const updateFollowUpSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    dueAt: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    leadId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    assignedToUserId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodNativeEnum<typeof FollowUpStatus>>>;
}, "strip", z.ZodTypeAny, {
    status?: FollowUpStatus | undefined;
    notes?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    title?: string | undefined;
    dueAt?: string | undefined;
    leadId?: string | undefined;
}, {
    status?: FollowUpStatus | undefined;
    notes?: string | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    title?: string | undefined;
    dueAt?: string | undefined;
    leadId?: string | undefined;
}>;
export declare const createTaskSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    dueAt: z.ZodOptional<z.ZodString>;
    priority: z.ZodDefault<z.ZodNativeEnum<typeof TaskPriority>>;
    status: z.ZodDefault<z.ZodNativeEnum<typeof TaskStatus>>;
    assignedToUserId: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    leadId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: TaskStatus;
    title: string;
    priority: TaskPriority;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    dueAt?: string | undefined;
    leadId?: string | undefined;
    description?: string | undefined;
}, {
    title: string;
    status?: TaskStatus | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    dueAt?: string | undefined;
    leadId?: string | undefined;
    description?: string | undefined;
    priority?: TaskPriority | undefined;
}>;
export declare const updateTaskSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    dueAt: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    priority: z.ZodOptional<z.ZodDefault<z.ZodNativeEnum<typeof TaskPriority>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodNativeEnum<typeof TaskStatus>>>;
    assignedToUserId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    customerId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    leadId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status?: TaskStatus | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    title?: string | undefined;
    dueAt?: string | undefined;
    leadId?: string | undefined;
    description?: string | undefined;
    priority?: TaskPriority | undefined;
}, {
    status?: TaskStatus | undefined;
    assignedToUserId?: string | undefined;
    customerId?: string | undefined;
    title?: string | undefined;
    dueAt?: string | undefined;
    leadId?: string | undefined;
    description?: string | undefined;
    priority?: TaskPriority | undefined;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const refreshTokenSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    refreshToken: string;
}, {
    refreshToken: string;
}>;
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
