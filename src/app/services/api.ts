import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private users = [

    {
      sub: 1,
      username: "teacher_1",
      role: "teacher",
      full_name: "Nauczyciel Nauczycielski",
      email: "nauczyciel1@szkola.pl",
      password: "password",
      class: null,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVhY2hlcl8xIiwicm9sZSI6InRlYWNoZXIiLCJmdWxsX25hbWUiOiJOYXVjenljaWVsIE5hdWN6eWNpZWxza2kiLCJlbWFpbCI6Im5hdWN6eWNpZWwxQHN6a29sYS5wbCIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJjbGFzcyI6bnVsbH0.HH_PL4UrqbYMudKliew-3QiNkGDnuzQdw8-vlJ1317k"
    },
    {
      sub: 2,
      username: "student_1",
      role: "student",
      full_name: "Uczeń uczniowski",
      email: "uczen1@szkola.pl",
      password: "password",
      class: "4b",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoic3R1ZGVudF8xIiwicm9sZSI6InN0dWRlbnQiLCJmdWxsX25hbWUiOiJVY3plxYQgdWN6bmlvd3NraSIsImVtYWlsIjoidWN6ZW4xQHN6a29sYS5wbCIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJjbGFzcyI6IjRiIn0.5_lpYhtl7CWPmqUt8lpKso0hqMZdor3Zy0ZFERMX694"
    },
    {
      sub: 3,
      username: "student_2",
      role: "student",
      full_name: "Uczeń uczniowski2",
      email: "uczen2@szkola.pl",
      password: "password",
      class: "4c",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJuYW1lIjoic3R1ZGVudF8yIiwicm9sZSI6InN0dWRlbnQiLCJmdWxsX25hbWUiOiJVY3plxYQgdWN6bmlvd3NraTIiLCJlbWFpbCI6InVjemVuMkBzemtvbGEucGwiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiY2xhc3MiOiI0YyJ9.07zkkbMa6dQJVyclfyc0p9aTdB5jHO__PC1ymY7o5YM"
    }
  ];

  constructor() { }

  login(username: string, password: string): Observable<{ token: string }> {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      return of({ token: user.token }).pipe(delay(500));
    } else {
      return throwError(() => new Error('Niepoprawny login lub hasło'));
    }
  }
}
