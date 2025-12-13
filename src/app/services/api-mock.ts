import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiMock {
  constructor(
    private http: HttpClient) { }

  private schedulesUrl = 'api/schedules';
  private studentsUrl = 'api/students';

  getTimetable(): Observable<any[]> {
    return this.http.get<any[]>(this.schedulesUrl);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentsUrl);
  }

}
