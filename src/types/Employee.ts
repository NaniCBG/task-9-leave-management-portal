export interface FamilyMember {
  name: string;
  relationship: string;
}

export interface Employee {
  id: number;

  // Employee List
  name: string;
  department: string;
  jobTitle: string;
  startDate: string;
  category: string;
  gender: string;

  // Personal Details
  employeeName: string;
  employeeId: string;
  nationality: string;
  dateOfBirth: string;
  maritalStatus: string;

  // Contact Details
  phoneNumber1: string;
  phoneNumber2: string;
  email: string;
  cityOfResidence: string;
  residentialAddress: string;

  // Next of Kin
  nextOfKinName: string;
  nextOfKinRelationship: string;
  nextOfKinPhone: string;
  nextOfKinAddress: string;

  // Education
  institution: string;
  educationDepartment: string;
  course: string;
  educationLocation: string;
  educationStartDate: string;
  educationEndDate: string;

  // Guarantor
  guarantors: string[];

  // Family
  familyMembers: FamilyMember[];

  // Job
  jobRole: string;
  jobDescription: string[];

  // Financial
  bankName: string;
  accountNumber: string;
  accountName: string;
}