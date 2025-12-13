import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockStudents } from '../services/mock-students';
@Component({
  selector: 'app-student-grades',
  imports: [],
  templateUrl: './student-grades.html',
  styleUrl: './student-grades.scss',
})
export class StudentGrades implements OnInit {
  studentId!: string;
  grades!: number[];

  constructor(private route: ActivatedRoute, private mockStudents: MockStudents) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('id')!;

    });
    this.grades = this.mockStudents.getStudent(Number(this.studentId)).grades;
  }

}
