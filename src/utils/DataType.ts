// utils/DataType.ts
export interface Experience {
  companyName?: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface Education {
  schoolName?: string;
  degree?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  summary: string;
  experience: Experience[];
  education: Education[];
}
