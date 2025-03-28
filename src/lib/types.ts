
export enum CountryCode {
  DE = "DE", // Germany
  IT = "IT", // Italy
}

export enum Country {
  Germany = "Germany",
  Italy = "Italy",
}

export enum PurposeOfVisit {
  Tourism = "Tourism",
  Business = "Business",
  Family = "Family",
  Study = "Study",
  Work = "Work",
  Medical = "Medical",
  Other = "Other"
}

export enum ApplicationCenterCity {
  Istanbul = "Istanbul",
  Ankara = "Ankara",
  Izmir = "Izmir",
  Antalya = "Antalya",
  Bodrum = "Bodrum",
  Gaziantep = "Gaziantep",
}

export enum VisaResultStatus {
  Approved = "Approved",
  Rejected = "Rejected",
  Pending = "Pending"
}

export enum EntryType {
  Single = "Single",
  Multiple = "Multiple"
}

export type Language = "tr" | "en" | "de";

export type VisaApplication = {
  id: string;
  country: Country;
  city: ApplicationCenterCity;
  durationOfVisit: string; // In days or months
  purposeOfVisit: PurposeOfVisit;
  applicationSubmitDate: Date;
  idataReplyDate: Date | null;
  appointmentDate: Date | null;
  passportReturnDate: Date | null;
  result: VisaResult | null;
  createdAt: Date;
};

export type VisaResult = {
  status: VisaResultStatus;
  validity?: string; // e.g. "90 days", "6 months"
  entryType?: EntryType;
};

export type ApplicationStats = {
  totalApplications: number;
  byCountry: Record<Country, number>;
  averageProcessingDays: number;
  approvalRate: number;
  // New stats
  citiesProcessingTime: Array<{city: string, days: number}>;
  trendsLastThreeMonths: Array<{month: string, averageDays: number}>;
  totalAnnualApplications: number;
  totalAnnualCost: number; // in Euros
  worstCities: Array<{city: string, days: number}>;
};

// Table translations
export interface TableTranslations {
  country: string;
  city: string;
  purpose: string;
  submissionDate: string;
  appointmentDate: string;
  returnDate: string;
  processingTime: string;
  result: string;
  days: string;
  approved: string;
  rejected: string;
  pending: string;
  caption: string;
}

// Review page translations
export interface ReviewTranslations {
  title: string;
  subtitle: string;
  search: string;
  searchPlaceholder: string;
  filterCountry: string;
  selectCountry: string;
  allCountries: string;
  sortBy: string;
  newestFirst: string;
  oldestFirst: string;
  noResults: string;
  tryAdjusting: string;
  clearFilters: string;
  cards: string;
  table: string;
}
