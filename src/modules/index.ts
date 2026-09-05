import { IndustryCode } from '../enums';

/** Universal CRM feature modules — toggled per tenant in Super Admin */
export const CORE_MODULES = {
  CORE_CRM: 'core_crm',
  LEADS: 'leads',
  FOLLOW_UPS: 'follow_ups',
  TASKS: 'tasks',
  REPORTS: 'reports',
  APPOINTMENTS: 'appointments',
  IMPORTS: 'imports',
  COMMUNICATIONS: 'communications',
} as const;

/** Industry-specific module codes */
export const INDUSTRY_MODULE_CODES = {
  GYM: 'gym',
  GYM_ATTENDANCE: 'gym_attendance',
  GYM_PAYMENTS: 'gym_payments',
  SALON: 'salon',
  SALON_APPOINTMENTS: 'salon_appointments',
  SALON_PACKAGES: 'salon_packages',
  CLINIC: 'clinic',
  CLINIC_APPOINTMENTS: 'clinic_appointments',
  CLINIC_PRESCRIPTIONS: 'clinic_prescriptions',
  COACHING: 'coaching',
  COACHING_BATCHES: 'coaching_batches',
  COACHING_FEES: 'coaching_fees',
  VEHICLE_SERVICE: 'vehicle_service',
  VEHICLE_JOBS: 'vehicle_jobs',
  VEHICLE_REMINDERS: 'vehicle_reminders',
  REAL_ESTATE: 'real_estate',
  REAL_ESTATE_PROPERTIES: 'real_estate_properties',
  REAL_ESTATE_VISITS: 'real_estate_visits',
  AGRI_WHOLESALE: 'agri_wholesale',
  AGRI_PRODUCTS: 'agri_products',
  AGRI_PROCUREMENT: 'agri_procurement',
  AGRI_INVENTORY: 'agri_inventory',
  AGRI_SALES: 'agri_sales',
  AGRI_RATES: 'agri_rates',
  AGRI_FINANCE: 'agri_finance',
  AGRI_REPORTS: 'agri_reports',
} as const;

export type CoreModuleCode = (typeof CORE_MODULES)[keyof typeof CORE_MODULES];
export type IndustryModuleCode =
  (typeof INDUSTRY_MODULE_CODES)[keyof typeof INDUSTRY_MODULE_CODES];
export type ModuleCode = CoreModuleCode | IndustryModuleCode | string;

/** Default modules enabled when provisioning a tenant for each industry */
export const INDUSTRY_DEFAULT_MODULES: Record<IndustryCode, string[]> = {
  [IndustryCode.GYM]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.GYM,
    INDUSTRY_MODULE_CODES.GYM_ATTENDANCE,
    INDUSTRY_MODULE_CODES.GYM_PAYMENTS,
  ],
  [IndustryCode.SALON]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.APPOINTMENTS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.SALON,
    INDUSTRY_MODULE_CODES.SALON_APPOINTMENTS,
    INDUSTRY_MODULE_CODES.SALON_PACKAGES,
  ],
  [IndustryCode.CLINIC]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.APPOINTMENTS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.CLINIC,
    INDUSTRY_MODULE_CODES.CLINIC_APPOINTMENTS,
    INDUSTRY_MODULE_CODES.CLINIC_PRESCRIPTIONS,
  ],
  [IndustryCode.COACHING]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.COACHING,
    INDUSTRY_MODULE_CODES.COACHING_BATCHES,
    INDUSTRY_MODULE_CODES.COACHING_FEES,
  ],
  [IndustryCode.VEHICLE_SERVICE]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.VEHICLE_SERVICE,
    INDUSTRY_MODULE_CODES.VEHICLE_JOBS,
    INDUSTRY_MODULE_CODES.VEHICLE_REMINDERS,
  ],
  [IndustryCode.REAL_ESTATE]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.REAL_ESTATE,
    INDUSTRY_MODULE_CODES.REAL_ESTATE_PROPERTIES,
    INDUSTRY_MODULE_CODES.REAL_ESTATE_VISITS,
  ],
  [IndustryCode.AGRI_WHOLESALE]: [
    CORE_MODULES.CORE_CRM,
    CORE_MODULES.LEADS,
    CORE_MODULES.FOLLOW_UPS,
    CORE_MODULES.TASKS,
    CORE_MODULES.REPORTS,
    CORE_MODULES.COMMUNICATIONS,
    INDUSTRY_MODULE_CODES.AGRI_WHOLESALE,
    INDUSTRY_MODULE_CODES.AGRI_PRODUCTS,
    INDUSTRY_MODULE_CODES.AGRI_PROCUREMENT,
    INDUSTRY_MODULE_CODES.AGRI_INVENTORY,
    INDUSTRY_MODULE_CODES.AGRI_SALES,
    INDUSTRY_MODULE_CODES.AGRI_RATES,
    INDUSTRY_MODULE_CODES.AGRI_FINANCE,
    INDUSTRY_MODULE_CODES.AGRI_REPORTS,
  ],
};

export const INDUSTRY_PRIMARY_MODULE: Record<IndustryCode, string> = {
  [IndustryCode.GYM]: INDUSTRY_MODULE_CODES.GYM,
  [IndustryCode.SALON]: INDUSTRY_MODULE_CODES.SALON,
  [IndustryCode.CLINIC]: INDUSTRY_MODULE_CODES.CLINIC,
  [IndustryCode.COACHING]: INDUSTRY_MODULE_CODES.COACHING,
  [IndustryCode.VEHICLE_SERVICE]: INDUSTRY_MODULE_CODES.VEHICLE_SERVICE,
  [IndustryCode.REAL_ESTATE]: INDUSTRY_MODULE_CODES.REAL_ESTATE,
  [IndustryCode.AGRI_WHOLESALE]: INDUSTRY_MODULE_CODES.AGRI_WHOLESALE,
};

export const INDUSTRY_LABELS: Record<IndustryCode, string> = {
  [IndustryCode.GYM]: 'Gym / Fitness',
  [IndustryCode.SALON]: 'Salon & Spa',
  [IndustryCode.CLINIC]: 'Clinic',
  [IndustryCode.COACHING]: 'Coaching / Tuition',
  [IndustryCode.VEHICLE_SERVICE]: 'Vehicle Service',
  [IndustryCode.REAL_ESTATE]: 'Real Estate',
  [IndustryCode.AGRI_WHOLESALE]: 'Agri Wholesale / Mandi',
};

/** Demo tenants — fixed IDs keep platform DB and CRM DB in sync */
export const DEMO_TENANTS = [
  {
    id: '11111111-1111-4111-8111-111111111101',
    name: 'Fight 4 Fitness',
    slug: 'fight-4-fitness',
    industry: IndustryCode.GYM,
    adminEmail: 'admin@gym.nexhub.local',
    adminName: 'Gym Admin',
  },
  {
    id: '11111111-1111-4111-8111-111111111102',
    name: 'Glow Salon & Spa',
    slug: 'glow-salon',
    industry: IndustryCode.SALON,
    adminEmail: 'admin@salon.nexhub.local',
    adminName: 'Salon Admin',
  },
  {
    id: '11111111-1111-4111-8111-111111111103',
    name: 'CityCare Clinic',
    slug: 'citycare-clinic',
    industry: IndustryCode.CLINIC,
    adminEmail: 'admin@clinic.nexhub.local',
    adminName: 'Clinic Admin',
  },
  {
    id: '11111111-1111-4111-8111-111111111104',
    name: 'Excel Coaching Academy',
    slug: 'excel-coaching',
    industry: IndustryCode.COACHING,
    adminEmail: 'admin@coaching.nexhub.local',
    adminName: 'Coaching Admin',
  },
  {
    id: '11111111-1111-4111-8111-111111111105',
    name: 'AutoFix Garage',
    slug: 'autofix-garage',
    industry: IndustryCode.VEHICLE_SERVICE,
    adminEmail: 'admin@vehicle.nexhub.local',
    adminName: 'Garage Admin',
  },
  {
    id: '11111111-1111-4111-8111-111111111106',
    name: 'PropDeal Realty',
    slug: 'propdeal-realty',
    industry: IndustryCode.REAL_ESTATE,
    adminEmail: 'admin@realestate.nexhub.local',
    adminName: 'Realty Admin',
  },
  {
    id: '11111111-1111-4111-8111-111111111107',
    name: 'AgriLink Mandi',
    slug: 'agrilink-mandi',
    industry: IndustryCode.AGRI_WHOLESALE,
    adminEmail: 'admin@agri.nexhub.local',
    adminName: 'Agri Admin',
  },
] as const;

export const DEMO_TENANT_PASSWORD = 'Password123!';
