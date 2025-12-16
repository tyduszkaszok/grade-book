import { Component, OnInit } from '@angular/core';
import { ApiStudents } from '../services/external/students-api.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ApiMock } from '../services/mocks/mock-api.service';

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
    this.apiStudents.getStudents().subscribe(users => {
      this.students = users;
    });
    
    this.apiMock.getClasses().subscribe(classes => {
      this.classes = classes.sort();
      
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