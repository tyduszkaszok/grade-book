import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor(public auth: Auth, private router: Router) { }

  onClickGrades() {
    this.router.navigate(['dashboard/grades']);
  }

  onClickTimetable() {
    this.router.navigate(['dashboard/timetable']);
  }

  onClickAttendance() {
    this.router.navigate(['dashboard/attendance']);
  }

  onClickClasses() {
    this.router.navigate(['dashboard/classes']);
  }

  onClickSchoolInfo() {
    this.router.navigate(['dashboard/school-info']);
  }
  
  get isStudent(): boolean {
    return this.auth.getRole() === 'student';
  }

  get isTeacher(): boolean {
    return this.auth.getRole() === 'teacher';
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['login']);
  }

}
