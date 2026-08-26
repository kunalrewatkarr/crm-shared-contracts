export enum IndustryCode {
  GYM = 'gym',
  SALON = 'salon',
  VEHICLE_SERVICE = 'vehicle_service',
  REAL_ESTATE = 'real_estate',
  COACHING = 'coaching',
  CLINIC = 'clinic',
}

export enum TenantStatus {
  TRIAL = 'trial',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  CANCELLED = 'cancelled',
}

export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  TRIAL = 'trial',
  WON = 'won',
  LOST = 'lost',
}

export enum FollowUpStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum TaskStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
  CANCELLED = 'cancelled',
}

export enum MembershipStatus {
  TRIAL = 'trial',
  ACTIVE = 'active',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  OVERDUE = 'overdue',
  REFUNDED = 'refunded',
}

export enum ActivityType {
  NOTE = 'note',
  STATUS_CHANGE = 'status_change',
  ASSIGNMENT = 'assignment',
  CALL = 'call',
  EMAIL = 'email',
  SYSTEM = 'system',
}
