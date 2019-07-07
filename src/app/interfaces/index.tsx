export interface ExperienceItem {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  list: string[];
  link?: string;
}

export interface SkillsData {
  title: string;
  list: SkillListItem[];
}

export interface SkillListItem {
  name: string;
  important?: boolean;
}