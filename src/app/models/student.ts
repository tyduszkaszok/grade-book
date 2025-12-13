export interface StudentModel {
    id: number;
    class: string;
    absence: number; 
    grades: Grades[];
}

export interface Grades {
    subject: string;
    grades: number[];
}