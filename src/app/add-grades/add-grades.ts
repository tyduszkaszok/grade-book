import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiMock } from '../services/mocks/mock-api.service';

@Component({
  selector: 'app-add-grades',
  imports: [FormsModule],
  templateUrl: './add-grades.html',
  styleUrl: './add-grades.scss',
})
export class AddGrades implements OnInit {
  studentId!: string;
  gradesInput: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiMock: ApiMock
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('id')!;
    });
  }

  onClick() {
    if (!this.gradesInput.trim()) {
      alert('Wpisz oceny!');
      return;
    }

    if (!this.gradesInput.includes(',')) {
      alert('Oceny muszą być oddzielone przecinkami!');
      return;
    }

    const newGrades = this.gradesInput
      .split(',')
      .map(grade => parseFloat(grade.trim()))
      .filter(grade => !isNaN(grade));

    if (newGrades.length === 0) {
      alert('Nie wpisano poprawnych ocen!');
      return;
    }

    this.apiMock.getStudent(Number(this.studentId)).subscribe(student => {
      const updatedStudent = {
        ...student,
        grades: [...student.grades, ...newGrades]
      };
      this.apiMock.updateStudent(Number(this.studentId), updatedStudent).subscribe(() => {
        alert('Oceny zostały dodane!');
        this.router.navigate(['dashboard/classes/student', this.studentId]);
      });
    });
  }

}