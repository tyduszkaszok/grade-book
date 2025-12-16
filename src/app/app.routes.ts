import { Routes } from '@angular/router';
import { Login } from './login/login'
import { Dashboard } from './dashboard/dashboard';
import { Grades } from './grades/grades';
import { Timetable } from './timetable/timetable';
import { IsAuthenticatedGuard } from './guards/is-authenticated-guard';
import { HasRoleGuard } from './guards/has-role-guard';
import { Classes } from './classes/classes';
import { SchoolInfo } from './school-info/school-info';
import { StudentGrades } from './student-grades/student-grades';
import { AddGrades } from './add-grades/add-grades';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [IsAuthenticatedGuard],
    children: [

      {
        path: '',
        redirectTo: 'school-info',
        pathMatch: 'full'
      },

      {
        path: 'grades',
        component: Grades,
        canActivate: [HasRoleGuard],
        data: { role: 'student' }
      },
      {
        path: 'timetable',
        component: Timetable,
        canActivate: [HasRoleGuard],
        data: { role: 'student' }
      },
      {
        path: 'classes',
        component: Classes,
        canActivate: [HasRoleGuard],
        data: { role: 'teacher' }
      },
      {
        path: 'school-info',
        component: SchoolInfo
      },
      {
        path: 'classes/student/:id',
        component: StudentGrades,
        canActivate: [HasRoleGuard],
        data: { role: 'teacher' }
      },
      {
        path: 'classes/student/:id/add-grades',
        component: AddGrades,
        canActivate: [HasRoleGuard],
        data: { role: 'teacher' }
      }
    ]
  }
  // opcjonalnie: 404
  // { path: '**', redirectTo: 'login' }
];

