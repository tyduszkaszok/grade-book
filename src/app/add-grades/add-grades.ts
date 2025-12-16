import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiMock } from '../services/api-mock';

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
    // Sprawdź czy input nie jest pusty
    if (!this.gradesInput.trim()) {
      alert('Wpisz oceny!');
      return;
    }

    // Sprawdź czy są po przecinku
    if (!this.gradesInput.includes(',')) {
      alert('Oceny muszą być oddzielone przecinkami!');
      return;
    }

    // Parsuj oceny
    const newGrades = this.gradesInput
      .split(',')
      .map(grade => parseFloat(grade.trim()))
      .filter(grade => !isNaN(grade));

    if (newGrades.length === 0) {
      alert('Nie wpisano poprawnych ocen!');
      return;
    }

    // Pobierz aktualnego studenta i dodaj nowe oceny
    this.apiMock.getStudent(Number(this.studentId)).subscribe(student => {
      // Zaktualizuj cały obiekt studenta z nowymi ocenami
      const updatedStudent = {
        ...student,
        grades: [...student.grades, ...newGrades]
      };

      // Wyślij cały obiekt studenta
      this.apiMock.updateStudent(Number(this.studentId), updatedStudent).subscribe(() => {
        alert('Oceny zostały dodane!');
        this.router.navigate(['dashboard/classes/student', this.studentId]);
      });
    });
  }

}