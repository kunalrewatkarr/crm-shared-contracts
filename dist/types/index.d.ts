import type { PermissionName } from '../permissions';
import type { FollowUpStatus, IndustryCode, LeadStatus, MembershipStatus, PaymentStatus, TaskPriority, TaskStatus, TenantStatus } from '../enums';
export interface ApiErrorBody {
    statusCode: number;
    message: string | string[];
    error?: string;
    path?: string;
    timestamp?: string;
}
export interface PaginatedResult<T> {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
export interface AuthUserDto {
    id: string;
    tenantId: string;
    email: string;
    name: string;
    roles: string[];
    permissions: PermissionName[];
}
export interface TenantDto {
    id: string;
    name: string;
    slug: string;
    status: TenantStatus;
    industry: IndustryCode;
    enabledModules: string[];
}
export interface CustomerDto {
    id: string;
    tenantId: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    tags: string[];
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
}
export interface LeadDto {
    id: string;
    tenantId: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    source?: string | null;
    status: LeadStatus;
    assignedToUserId?: string | null;
    customerId?: string | null;
    notes?: string | null;
    createdAt: string;
    updatedAt: string;
}
export interface FollowUpDto {
    id: string;
    tenantId: string;
    title: string;
    dueAt: string;
    status: FollowUpStatus;
    customerId?: string | null;
    leadId?: string | null;
    assignedToUserId?: string | null;
    notes?: string | null;
}
export interface TaskDto {
    id: string;
    tenantId: string;
    title: string;
    description?: string | null;
    dueAt?: string | null;
    priority: TaskPriority;
    status: TaskStatus;
    assignedToUserId?: string | null;
    customerId?: string | null;
    leadId?: string | null;
}
export interface GymMembershipDto {
    id: string;
    tenantId: string;
    memberId: string;
    planId: string;
    status: MembershipStatus;
    startsAt: string;
    endsAt: string;
}
export interface GymPaymentDto {
    id: string;
    tenantId: string;
    membershipId: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    paidAt?: string | null;
}
