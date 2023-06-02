import { Curriculum } from "./curriculum";

export interface User {
  id:           number;
  name:         string;
  code:         string;
  role:         UserRole;
  schoolYear:   string;
  personalMail: string;
  eduMail:      string;
  avatar:       string;
  phoneNumber:  string;
  curriculum:   Curriculum;
  active:       boolean;
  identifyNumber: string;
}
//TODO: update ROLE here
export interface UserPayload {
  name:         string;
  code:         string;
  role:         UserRole;
  schoolYear:   string;
  personalMail: string;
  eduMail:      string;
  avatar:       string;
  phoneNumber:  string;
  curriculum:   { id: number };
  active:       boolean;
}

export enum UserRole {
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  SystemAdmin = 'SYSTEM_ADMIN',
  DepartmentAdmin = 'DEPARTMENT_ADMIN',
  WorkspaceAdmin = 'WORKSPACE_ADMIN'
}