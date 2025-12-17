import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service'


@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { }

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(
      this.form.get('username')!.value!,
      this.form.get('password')!.value!
    ).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard/school-info']);
      },
      error: (error) => {
        console.error('Błąd logowania:', error);
        alert('Niepoprawny login lub hasło');
      }
    });
  }



}
