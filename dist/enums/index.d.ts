export declare enum IndustryCode {
    GYM = "gym",
    SALON = "salon",
    VEHICLE_SERVICE = "vehicle_service",
    REAL_ESTATE = "real_estate",
    COACHING = "coaching",
    CLINIC = "clinic",
    AGRI_WHOLESALE = "agri_wholesale"
}
export declare enum TenantStatus {
    TRIAL = "trial",
    ACTIVE = "active",
    SUSPENDED = "suspended",
    CANCELLED = "cancelled"
}
export declare enum LeadStatus {
    NEW = "new",
    CONTACTED = "contacted",
    QUALIFIED = "qualified",
    TRIAL = "trial",
    WON = "won",
    LOST = "lost"
}
export declare enum FollowUpStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare enum TaskPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export declare enum TaskStatus {
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    DONE = "done",
    CANCELLED = "cancelled"
}
export declare enum MembershipStatus {
    TRIAL = "trial",
    ACTIVE = "active",
    EXPIRED = "expired",
    CANCELLED = "cancelled"
}
export declare enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid",
    OVERDUE = "overdue",
    REFUNDED = "refunded"
}
export declare enum ActivityType {
    NOTE = "note",
    STATUS_CHANGE = "status_change",
    ASSIGNMENT = "assignment",
    CALL = "call",
    EMAIL = "email",
    SYSTEM = "system"
}
export declare enum MessageChannel {
    EMAIL = "email",
    WHATSAPP = "whatsapp"
}
export declare enum MessageType {
    WELCOME = "welcome",
    BIRTHDAY = "birthday",
    EXPIRY = "expiry",
    PAYMENT = "payment",
    REMINDER = "reminder",
    ANNOUNCEMENT = "announcement",
    FOLLOW_UP = "follow_up",
    CUSTOM = "custom"
}
export declare enum ReminderTriggerType {
    MEMBERSHIP_EXPIRY = "membership_expiry",
    BIRTHDAY = "birthday",
    PAYMENT_DUE = "payment_due",
    CUSTOM_DAYS = "custom_days",
    APPOINTMENT_REMINDER = "appointment_reminder",
    VISIT_REMINDER = "visit_reminder",
    SERVICE_REMINDER = "service_reminder",
    VEHICLE_DUE = "vehicle_due"
}
export declare enum CommunicationStatus {
    SENT = "sent",
    FAILED = "failed",
    PENDING_WHATSAPP = "pending_whatsapp",
    SKIPPED = "skipped"
}
export declare enum CommunicationTrigger {
    MANUAL = "manual",
    AUTOMATION = "automation"
}
