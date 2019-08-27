export type CVData = {
  experience: ExperienceItem[];
  skills: SkillsData[];
  langs: LangItem[];
  education: EducationItem[];
};

export type ExperienceItem = {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  list: ListItem[];
  link?: string;
};

export type ListItem = {
  text: string;
  title?: string;
  technologies?: string;
  link?: string;
};

export type EducationItem = {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  addition?: string;
};

export type SkillsData = {
  title: string;
  list: SkillListItem[];
};

export type SkillListItem = {
  name: string;
  important?: boolean;
};

export type LangItem = {
  title: string;
  level: string;
};