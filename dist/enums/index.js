"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationTrigger = exports.CommunicationStatus = exports.ReminderTriggerType = exports.MessageType = exports.MessageChannel = exports.ActivityType = exports.PaymentStatus = exports.MembershipStatus = exports.TaskStatus = exports.TaskPriority = exports.FollowUpStatus = exports.LeadStatus = exports.TenantStatus = exports.IndustryCode = void 0;
var IndustryCode;
(function (IndustryCode) {
    IndustryCode["GYM"] = "gym";
    IndustryCode["SALON"] = "salon";
    IndustryCode["VEHICLE_SERVICE"] = "vehicle_service";
    IndustryCode["REAL_ESTATE"] = "real_estate";
    IndustryCode["COACHING"] = "coaching";
    IndustryCode["CLINIC"] = "clinic";
})(IndustryCode || (exports.IndustryCode = IndustryCode = {}));
var TenantStatus;
(function (TenantStatus) {
    TenantStatus["TRIAL"] = "trial";
    TenantStatus["ACTIVE"] = "active";
    TenantStatus["SUSPENDED"] = "suspended";
    TenantStatus["CANCELLED"] = "cancelled";
})(TenantStatus || (exports.TenantStatus = TenantStatus = {}));
var LeadStatus;
(function (LeadStatus) {
    LeadStatus["NEW"] = "new";
    LeadStatus["CONTACTED"] = "contacted";
    LeadStatus["QUALIFIED"] = "qualified";
    LeadStatus["TRIAL"] = "trial";
    LeadStatus["WON"] = "won";
    LeadStatus["LOST"] = "lost";
})(LeadStatus || (exports.LeadStatus = LeadStatus = {}));
var FollowUpStatus;
(function (FollowUpStatus) {
    FollowUpStatus["PENDING"] = "pending";
    FollowUpStatus["COMPLETED"] = "completed";
    FollowUpStatus["CANCELLED"] = "cancelled";
})(FollowUpStatus || (exports.FollowUpStatus = FollowUpStatus = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "low";
    TaskPriority["MEDIUM"] = "medium";
    TaskPriority["HIGH"] = "high";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["OPEN"] = "open";
    TaskStatus["IN_PROGRESS"] = "in_progress";
    TaskStatus["DONE"] = "done";
    TaskStatus["CANCELLED"] = "cancelled";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var MembershipStatus;
(function (MembershipStatus) {
    MembershipStatus["TRIAL"] = "trial";
    MembershipStatus["ACTIVE"] = "active";
    MembershipStatus["EXPIRED"] = "expired";
    MembershipStatus["CANCELLED"] = "cancelled";
})(MembershipStatus || (exports.MembershipStatus = MembershipStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["OVERDUE"] = "overdue";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType["NOTE"] = "note";
    ActivityType["STATUS_CHANGE"] = "status_change";
    ActivityType["ASSIGNMENT"] = "assignment";
    ActivityType["CALL"] = "call";
    ActivityType["EMAIL"] = "email";
    ActivityType["SYSTEM"] = "system";
})(ActivityType || (exports.ActivityType = ActivityType = {}));
var MessageChannel;
(function (MessageChannel) {
    MessageChannel["EMAIL"] = "email";
    MessageChannel["WHATSAPP"] = "whatsapp";
})(MessageChannel || (exports.MessageChannel = MessageChannel = {}));
var MessageType;
(function (MessageType) {
    MessageType["WELCOME"] = "welcome";
    MessageType["BIRTHDAY"] = "birthday";
    MessageType["EXPIRY"] = "expiry";
    MessageType["PAYMENT"] = "payment";
    MessageType["REMINDER"] = "reminder";
    MessageType["ANNOUNCEMENT"] = "announcement";
    MessageType["FOLLOW_UP"] = "follow_up";
    MessageType["CUSTOM"] = "custom";
})(MessageType || (exports.MessageType = MessageType = {}));
var ReminderTriggerType;
(function (ReminderTriggerType) {
    ReminderTriggerType["MEMBERSHIP_EXPIRY"] = "membership_expiry";
    ReminderTriggerType["BIRTHDAY"] = "birthday";
    ReminderTriggerType["PAYMENT_DUE"] = "payment_due";
    ReminderTriggerType["CUSTOM_DAYS"] = "custom_days";
    ReminderTriggerType["APPOINTMENT_REMINDER"] = "appointment_reminder";
    ReminderTriggerType["VISIT_REMINDER"] = "visit_reminder";
    ReminderTriggerType["SERVICE_REMINDER"] = "service_reminder";
    ReminderTriggerType["VEHICLE_DUE"] = "vehicle_due";
})(ReminderTriggerType || (exports.ReminderTriggerType = ReminderTriggerType = {}));
var CommunicationStatus;
(function (CommunicationStatus) {
    CommunicationStatus["SENT"] = "sent";
    CommunicationStatus["FAILED"] = "failed";
    CommunicationStatus["PENDING_WHATSAPP"] = "pending_whatsapp";
    CommunicationStatus["SKIPPED"] = "skipped";
})(CommunicationStatus || (exports.CommunicationStatus = CommunicationStatus = {}));
var CommunicationTrigger;
(function (CommunicationTrigger) {
    CommunicationTrigger["MANUAL"] = "manual";
    CommunicationTrigger["AUTOMATION"] = "automation";
})(CommunicationTrigger || (exports.CommunicationTrigger = CommunicationTrigger = {}));
