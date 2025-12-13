import { Injectable } from '@angular/core';
import { StudentModel } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class MockStudents {

  students: StudentModel[] = [
    { id: 1, class: "4a", absence: 0, grades: [5, 5, 4.5, 5, 5, 4, 3.5] },
    { id: 2, class: "3b", absence: 5, grades: [3, 3, 3.5, 4, 4.5, 5, 5] },
    { id: 3, class: "3b", absence: 10, grades: [5, 5, 3.5, 5, 5] },
    { id: 4, class: "4a", absence: 7, grades: [3.5, 4, 5, 4.5] },
    { id: 5, class: "3b", absence: 2, grades: [5, 4.5, 5, 5] },
    { id: 6, class: "4a", absence: 13, grades: [2.5, 3, 3.5, 4] },
    { id: 7, class: "3b", absence: 5, grades: [4, 4.5, 5] },
    { id: 8, class: "4a", absence: 9, grades: [3, 3.5, 4, 4, 3.5, 4.5] },
    { id: 9, class: "1b", absence: 1, grades: [5, 5, 4.5, 4.5, 5] },
    { id: 10, class: "4f", absence: 6, grades: [4, 4, 4.5, 5, 4.5] }
  ];

  getStudent(studentId: number): StudentModel {
    return this.students.find(s => s.id === studentId)!;
  }

  getStudentsFromClass(className: string): StudentModel[] {
    return this.students.filter(s => s.class === className);
  }

  getClasses(): string[] {
    const uniqueClasses = this.students.map(s => s.class);
    return [...new Set(uniqueClasses)];
  }
}
