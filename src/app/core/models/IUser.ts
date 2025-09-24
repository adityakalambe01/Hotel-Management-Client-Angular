export interface IUser {
  name: string;
  email: string;
  phone: string;
  aadhaarNumber?: string;
  panCardNumber?: string;
  isEmailVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
