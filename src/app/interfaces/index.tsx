export interface ExperienceItem {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  list: string[];
  link?: string;
}

export interface EducationItem {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  addition?: string;
}

export interface SkillsData {
  title: string;
  list: SkillListItem[];
}

export interface SkillListItem {
  name: string;
  important?: boolean;
}

export interface LangItem {
  title: string;
  level: string;
}