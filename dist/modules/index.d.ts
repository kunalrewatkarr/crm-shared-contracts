import { IndustryCode } from '../enums';
/** Universal CRM feature modules — toggled per tenant in Super Admin */
export declare const CORE_MODULES: {
    readonly CORE_CRM: "core_crm";
    readonly LEADS: "leads";
    readonly FOLLOW_UPS: "follow_ups";
    readonly TASKS: "tasks";
    readonly REPORTS: "reports";
    readonly APPOINTMENTS: "appointments";
    readonly IMPORTS: "imports";
    readonly COMMUNICATIONS: "communications";
};
/** Industry-specific module codes */
export declare const INDUSTRY_MODULE_CODES: {
    readonly GYM: "gym";
    readonly GYM_ATTENDANCE: "gym_attendance";
    readonly GYM_PAYMENTS: "gym_payments";
    readonly SALON: "salon";
    readonly SALON_APPOINTMENTS: "salon_appointments";
    readonly SALON_PACKAGES: "salon_packages";
    readonly CLINIC: "clinic";
    readonly CLINIC_APPOINTMENTS: "clinic_appointments";
    readonly CLINIC_PRESCRIPTIONS: "clinic_prescriptions";
    readonly COACHING: "coaching";
    readonly COACHING_BATCHES: "coaching_batches";
    readonly COACHING_FEES: "coaching_fees";
    readonly VEHICLE_SERVICE: "vehicle_service";
    readonly VEHICLE_JOBS: "vehicle_jobs";
    readonly VEHICLE_REMINDERS: "vehicle_reminders";
    readonly REAL_ESTATE: "real_estate";
    readonly REAL_ESTATE_PROPERTIES: "real_estate_properties";
    readonly REAL_ESTATE_VISITS: "real_estate_visits";
};
export type CoreModuleCode = (typeof CORE_MODULES)[keyof typeof CORE_MODULES];
export type IndustryModuleCode = (typeof INDUSTRY_MODULE_CODES)[keyof typeof INDUSTRY_MODULE_CODES];
export type ModuleCode = CoreModuleCode | IndustryModuleCode | string;
/** Default modules enabled when provisioning a tenant for each industry */
export declare const INDUSTRY_DEFAULT_MODULES: Record<IndustryCode, string[]>;
export declare const INDUSTRY_PRIMARY_MODULE: Record<IndustryCode, string>;
export declare const INDUSTRY_LABELS: Record<IndustryCode, string>;
/** Demo tenants — fixed IDs keep platform DB and CRM DB in sync */
export declare const DEMO_TENANTS: readonly [{
    readonly id: "11111111-1111-4111-8111-111111111101";
    readonly name: "Fight 4 Fitness";
    readonly slug: "fight-4-fitness";
    readonly industry: IndustryCode.GYM;
    readonly adminEmail: "admin@gym.nexhub.local";
    readonly adminName: "Gym Admin";
}, {
    readonly id: "11111111-1111-4111-8111-111111111102";
    readonly name: "Glow Salon & Spa";
    readonly slug: "glow-salon";
    readonly industry: IndustryCode.SALON;
    readonly adminEmail: "admin@salon.nexhub.local";
    readonly adminName: "Salon Admin";
}, {
    readonly id: "11111111-1111-4111-8111-111111111103";
    readonly name: "CityCare Clinic";
    readonly slug: "citycare-clinic";
    readonly industry: IndustryCode.CLINIC;
    readonly adminEmail: "admin@clinic.nexhub.local";
    readonly adminName: "Clinic Admin";
}, {
    readonly id: "11111111-1111-4111-8111-111111111104";
    readonly name: "Excel Coaching Academy";
    readonly slug: "excel-coaching";
    readonly industry: IndustryCode.COACHING;
    readonly adminEmail: "admin@coaching.nexhub.local";
    readonly adminName: "Coaching Admin";
}, {
    readonly id: "11111111-1111-4111-8111-111111111105";
    readonly name: "AutoFix Garage";
    readonly slug: "autofix-garage";
    readonly industry: IndustryCode.VEHICLE_SERVICE;
    readonly adminEmail: "admin@vehicle.nexhub.local";
    readonly adminName: "Garage Admin";
}, {
    readonly id: "11111111-1111-4111-8111-111111111106";
    readonly name: "PropDeal Realty";
    readonly slug: "propdeal-realty";
    readonly industry: IndustryCode.REAL_ESTATE;
    readonly adminEmail: "admin@realestate.nexhub.local";
    readonly adminName: "Realty Admin";
}];
export declare const DEMO_TENANT_PASSWORD = "Password123!";
