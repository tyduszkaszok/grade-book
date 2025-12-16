import { Component, OnInit } from '@angular/core';
import { ApiStudents } from '../services/api-students';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ApiMock } from '../services/api-mock';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.html',
  styleUrls: ['./classes.scss'],
  imports: [NgFor]
})
export class Classes implements OnInit {
  students: any[] = [];
  classes: string[] = [];
  studentsByClass: { [className: string]: any[] } = {};
  
  constructor(
    public apiStudents: ApiStudents, 
    private router: Router, 
    private apiMock: ApiMock
  ) { }
  
  ngOnInit(): void {
    // Załaduj studentów z API
    this.apiStudents.getStudents().subscribe(users => {
      this.students = users;
    });
    
    // Załaduj klasy i studentów dla każdej klasy
    this.apiMock.getClasses().subscribe(classes => {
      this.classes = classes.sort();
      
      // Dla każdej klasy załaduj studentów
      this.classes.forEach(className => {
        this.loadStudentsForClass(className);
      });
    });
  }
  
  loadStudentsForClass(className: string): void {
    this.apiMock.getStudentsFromClass(className).subscribe(students => {
      this.studentsByClass[className] = students;
    });
  }
  
  getStudentsFromClass(className: string): any[] {
    return this.studentsByClass[className] || [];
  }
  
  getStudentByApiId(id: number): string | undefined {
    const student = this.students.find(s => s.id === id);
    return student ? student.name : undefined;
  }
  
  onClickStudentGrades(id: number): void {
    this.router.navigate(['dashboard/classes/student', id]);
  }
}