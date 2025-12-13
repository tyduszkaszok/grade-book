import { Component, OnInit } from '@angular/core';
import { ApiStudents } from '../services/api-students';
import { NgFor } from '@angular/common';
import { MockStudents } from '../services/mock-students';
import { StudentModel } from '../models/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.html',
  styleUrls: ['./classes.scss'],
  imports: [NgFor]
})
export class Classes implements OnInit {
  students: any[] = [];
  studentsFromClass: StudentModel[] = [];
  classes: string[] = [];

  constructor(public apiStudents: ApiStudents, public mockStudents: MockStudents, private router: Router) { }



  ngOnInit(): void {
    this.apiStudents.getStudents().subscribe(users => {
      this.students = users;
    });

    this.classes = this.mockStudents.getClasses().sort();
  }

  getStudentsFromClass(className: string) {
    this.studentsFromClass = this.mockStudents.getStudentsFromClass(className);
    return this.studentsFromClass.map(student => student.id);
  }

  getStudentByApiId(id: number): string | undefined {
    const student = this.students.find(s => s.id === id);
    return student ? student.name : undefined;
  }

  onClickStudentGrades(id: number) {
    this.router.navigate(['dashboard/classes/student', id]);
  }
}
