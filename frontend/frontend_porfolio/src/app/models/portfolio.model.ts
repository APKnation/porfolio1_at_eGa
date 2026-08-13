export interface Profile {
  id?: number;
  full_name?: string;
  name?: string;
  image?: string | null;
  title?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  educations?: Education[];
}

export interface Experience {
  id: number;
  profile?: number;
  title: string;
  organization: string;
  description: string;
  exp_type: string;
  start_date: string;
  end_date?: string | null;
  is_current: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  url?: string;
  technologies?: string[];
}

export interface Skill {
  id?: number;
  name: string;
  level?: string;
}

export interface Education {
  id?: number;
  profile?: number;

  // Primary School
  primary_school_name?: string;
  primary_start_year?: string;
  primary_end_year?: string;

  // Secondary School (O-Level)
  secondary_school_name?: string;
  secondary_start_year?: string;
  secondary_end_year?: string;

  // Advanced Secondary (A-Level)
  advanced_secondary_school_name?: string;
  advanced_secondary_start_year?: string;
  advanced_secondary_end_year?: string;

  // University / College
  university_name?: string;
  university_degree?: string;
  university_field?: string;
  university_start_year?: string;
  university_end_year?: string;
  university_is_current?: boolean;
}

