import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Dashboard } from "./dashboard/dashboard";
import { Auth } from './services/auth';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiStudents } from './services/api-students';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Dashboard, NgIf, CommonModule, HttpClientModule],
  providers: [ApiStudents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('gradebook-app');
  constructor(public authService: Auth) { }

}
