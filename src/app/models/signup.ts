import { User } from "./user";

export interface Signup {
  user: User;
  token: string;
  refreshToken: string;
}

export interface SignupModel {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  gender: string;
  membership_type: string;
  password: string;
  date_of_birth: string;
  phone_number: string;
}
