import { Component } from '@angular/core';
import { ApiMock } from '../services/api-mock';
import { JsonPipe, NgForOf } from '@angular/common';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-grades',
  imports: [JsonPipe, NgForOf],
  templateUrl: './grades.html',
  styleUrl: './grades.scss',
})
export class Grades {
  students: any[] = [];
  subjects: string[] = ["Matematyka", "Chemia", "Fizyka", "Język angielski", "Język Polski", "Wychowanie fizyczne", "Historia", "Biologia", "Geografia", "Informatyka", "Wiedza o społeczeństwie"];
  student_id: string | null = null;
  constructor(public apiMock: ApiMock, private auth : Auth) { };
  ngOnInit(): void {
    this.student_id = this.auth.getUserId();
    this.apiMock.getStudents().subscribe(data => {
      this.students = data.filter( item => item.username === this.student_id); 
    });
  }

  getGrades(subject: string) : number[]{
    return this.students.filter(item => item.subject === subject).map(item => item.grade)
  }
}
