import { Routes } from '@angular/router';
import { Login } from './login/login'
import { Dashboard } from './dashboard/dashboard';
import { Grades } from './grades/grades';
import { Timetable } from './timetable/timetable';
import { Messages } from './messages/messages';
import { IsAuthenticatedGuard } from './guards/is-authenticated-guard';
import { HasRoleGuard } from './guards/has-role-guard';
import { Classes } from './classes/classes';
import { Attendance } from './attendance/attendance';
import { SchoolInfo } from './school-info/school-info';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [IsAuthenticatedGuard],
    children: [
      { path: 'grades', component: Grades },
      { path: 'timetable', component: Timetable },
      { path: 'messages', component: Messages },
      { path: 'classes', component: Classes },
      { path: 'attendance', component: Attendance },
      { path: 'school-info', component: SchoolInfo}
    ]
  },

  {
    path: 'messages',
    component: Messages,
    canActivate: [IsAuthenticatedGuard, HasRoleGuard],
    data: {
      role: "teacher"
    }
  },

  // opcjonalnie: 404
  // { path: '**', redirectTo: 'login' }
];

