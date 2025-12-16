import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiStudents } from './services/external/students-api.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  providers: [ApiStudents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(public authService: AuthService) { }

}
