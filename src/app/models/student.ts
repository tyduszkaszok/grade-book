export interface StudentModel {
  id: number;
  class: string;
  absence: number;
  grades: number[]; 
}

export interface Grades {
    subject: string;
    grades: number[];
}