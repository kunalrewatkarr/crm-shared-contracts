export enum IndustryCode {
  GYM = 'gym',
  SALON = 'salon',
  VEHICLE_SERVICE = 'vehicle_service',
  REAL_ESTATE = 'real_estate',
  COACHING = 'coaching',
  CLINIC = 'clinic',
  AGRI_WHOLESALE = 'agri_wholesale',
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

export enum MessageChannel {
  EMAIL = 'email',
  WHATSAPP = 'whatsapp',
}

export enum MessageType {
  WELCOME = 'welcome',
  BIRTHDAY = 'birthday',
  EXPIRY = 'expiry',
  PAYMENT = 'payment',
  REMINDER = 'reminder',
  ANNOUNCEMENT = 'announcement',
  FOLLOW_UP = 'follow_up',
  CUSTOM = 'custom',
}

export enum ReminderTriggerType {
  MEMBERSHIP_EXPIRY = 'membership_expiry',
  BIRTHDAY = 'birthday',
  PAYMENT_DUE = 'payment_due',
  CUSTOM_DAYS = 'custom_days',
  APPOINTMENT_REMINDER = 'appointment_reminder',
  VISIT_REMINDER = 'visit_reminder',
  SERVICE_REMINDER = 'service_reminder',
  VEHICLE_DUE = 'vehicle_due',
}

export enum CommunicationStatus {
  SENT = 'sent',
  FAILED = 'failed',
  PENDING_WHATSAPP = 'pending_whatsapp',
  SKIPPED = 'skipped',
}

export enum CommunicationTrigger {
  MANUAL = 'manual',
  AUTOMATION = 'automation',
}
