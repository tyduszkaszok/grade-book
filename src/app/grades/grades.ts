import { Component } from '@angular/core';
import { ApiMock } from '../services/mocks/mock-api.service';
import { NgForOf } from '@angular/common';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-grades',
  imports: [NgForOf],
  templateUrl: './grades.html',
  styleUrl: './grades.scss',
})
export class Grades {
  students: any[] = [];
  subjects: string[] = ["Matematyka", "Chemia", "Fizyka", "Język angielski", "Język polski", "Wychowanie fizyczne", "Historia", "Biologia", "Geografia", "Informatyka", "Wiedza o społeczeństwie"];
  student_id: string | null = null;
  constructor(public apiMock: ApiMock, private authService: AuthService) { };
  ngOnInit(): void {
    this.student_id = this.authService.getUserId();
    this.apiMock.getStudents().subscribe(data => {
      this.students = data.filter( item => item.username === this.student_id); 
    });
  }

  getGrades(subject: string) : number[]{
    return this.students.filter(item => item.subject === subject).map(item => item.grade)
  }
}
