import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiStudents } from '../services/external/students-api.service';
import { NgFor } from '@angular/common';
import { ApiMock } from '../services/mocks/mock-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-grades',
  imports: [NgFor],
  templateUrl: './student-grades.html',
  styleUrl: './student-grades.scss',
})
export class StudentGrades implements OnInit {
  studentId!: string;
  grades!: number[];
  name!: string;

  constructor(private route: ActivatedRoute,  private apiStudents: ApiStudents, private router: Router, private apiMock: ApiMock) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('id')!;

    });
    this.apiMock.getStudent(Number(this.studentId)).subscribe(student => {
      this.grades = student.grades;
    });
    this.apiStudents.getStudentById(this.studentId).subscribe(student => {
      this.name = student.name;
    })
  }

  onClickAddGrades() {
    this.router.navigate([`dashboard/classes/student/${this.studentId}/add-grades`])
  }

}
