import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { Api } from '../services/api';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../services/auth'


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

  constructor(private authService: Auth, private router: Router) { }

  submitForm() {
    if (this.form.invalid) {
      return;
    }


    this.authService.login(
      this.form.get('username')!.value!,
      this.form.get('password')!.value!
    ).subscribe((response) => { this.router.navigate(['/dashboard/school-info'])});
  }



}
