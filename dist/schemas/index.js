"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenSchema = exports.loginSchema = exports.updateTaskSchema = exports.createTaskSchema = exports.updateFollowUpSchema = exports.createFollowUpSchema = exports.updateLeadSchema = exports.createLeadSchema = exports.updateCustomerSchema = exports.createCustomerSchema = exports.paginationSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    search: zod_1.z.string().optional(),
    sortBy: zod_1.z.string().optional(),
    sortOrder: zod_1.z.enum(['asc', 'desc']).default('desc'),
});
exports.createCustomerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(200),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal('')),
    phone: zod_1.z.string().min(5).max(30).optional().or(zod_1.z.literal('')),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    notes: zod_1.z.string().max(5000).optional(),
});
exports.updateCustomerSchema = exports.createCustomerSchema.partial();
exports.createLeadSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(200),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal('')),
    phone: zod_1.z.string().optional().or(zod_1.z.literal('')),
    source: zod_1.z.string().max(100).optional(),
    status: zod_1.z.nativeEnum(enums_1.LeadStatus).default(enums_1.LeadStatus.NEW),
    assignedToUserId: zod_1.z.string().uuid().optional(),
    customerId: zod_1.z.string().uuid().optional(),
    notes: zod_1.z.string().max(5000).optional(),
});
exports.updateLeadSchema = exports.createLeadSchema.partial();
exports.createFollowUpSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).max(200),
    dueAt: zod_1.z.string().datetime(),
    customerId: zod_1.z.string().uuid().optional(),
    leadId: zod_1.z.string().uuid().optional(),
    assignedToUserId: zod_1.z.string().uuid().optional(),
    notes: zod_1.z.string().max(5000).optional(),
    status: zod_1.z.nativeEnum(enums_1.FollowUpStatus).default(enums_1.FollowUpStatus.PENDING),
});
exports.updateFollowUpSchema = exports.createFollowUpSchema.partial();
exports.createTaskSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).max(200),
    description: zod_1.z.string().max(5000).optional(),
    dueAt: zod_1.z.string().datetime().optional(),
    priority: zod_1.z.nativeEnum(enums_1.TaskPriority).default(enums_1.TaskPriority.MEDIUM),
    status: zod_1.z.nativeEnum(enums_1.TaskStatus).default(enums_1.TaskStatus.OPEN),
    assignedToUserId: zod_1.z.string().uuid().optional(),
    customerId: zod_1.z.string().uuid().optional(),
    leadId: zod_1.z.string().uuid().optional(),
});
exports.updateTaskSchema = exports.createTaskSchema.partial();
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.refreshTokenSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(10),
});
