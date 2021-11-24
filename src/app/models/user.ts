export interface User {
  user: unknown;
  id: number;
  username: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  full_name: string;
  middle_name: string;
  gender: string;
  date_of_birth: string;
  membership_type: 'user' | 'ngo' | 'mentor' | 'admin';
  verified: number;
  socket_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  isOnline?: boolean;
  address: string;
  dob_visible: string;
  website: string;
  profile?: Profile;
  subscription: string;
}

export interface UserProfile {
  education: Education;
  experience: Experience;
  profile: Profile;
  skills_and_endorsement: SkillsEndorsment;
}
export interface Profile {
  relationship_status: any;
  highest_education: any;
  current_education: any;
  occupation: any;
  current_position: any;
  id: number;
  profession: string;
  profile_picture_url: string;
  bio: string;
  location: string;
  facebook_url: string;
  website_url: string;
  twitter_url: string;
  instagram_url: string;
  snapchat_id: string;
  user_about: string;
  user_about_img: object;
  country_region: string;
  country_code: string;
  industry: string;
  headline: string;
  about: string;
  website: string;
}

export interface Education {
  // type any is used to prevent error on validation level
  id: number;
  degree: any;
  field_of_study: any;
  start_date: any;
  end_date: any;
  grade: any;
  activities: any;
  description: any;
  schoolId: any;
  school_name: any;
  location: any;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export interface Experience {
  // type any is used to prevent error on validation level
  id: number;
  title: any;
  employment_type: any;
  company_name: any;
  location: any;
  start_date: any;
  end_date: any;
  currently_working: any;
  description: any;
  viewId?: any;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export interface SkillsEndorsment {
  // type any is used to prevent error on validation level
  id: number;
  skills_endorsment?: any;
  top_skills?: any;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}
