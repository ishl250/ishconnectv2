export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type District = 
  | 'Gasabo' 
  | 'Kicukiro' 
  | 'Nyarugenge' 
  | 'Huye' 
  | 'Musanze' 
  | 'Rubavu' 
  | 'Rwamagana';

export type UserRole = 'donor' | 'admin' | 'user';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  district: District;
  bloodGroup: BloodGroup;
  role: UserRole;
  isAvailable?: boolean;
  lastDonationDate?: string;
  createdAt: string;
}

export interface Donor extends User {
  role: 'donor';
  isAvailable: boolean;
  lastDonationDate: string;
  totalDonations: number;
}

export interface BloodStock {
  id: string;
  bloodGroup: BloodGroup;
  units: number;
  hospital: string;
  storedDate: string;
  expiryDate: string;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  hospital: string;
  bloodGroup: BloodGroup;
  unitsNeeded: number;
  urgency: 'normal' | 'emergency';
  status: 'pending' | 'fulfilled' | 'cancelled';
  requestedAt: string;
  district: District;
  contactPhone: string;
}

export interface DonationHistory {
  id: string;
  donorId: string;
  date: string;
  hospital: string;
  units: number;
  status: 'completed' | 'scheduled' | 'cancelled';
}
