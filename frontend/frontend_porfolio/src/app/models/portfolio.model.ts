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
