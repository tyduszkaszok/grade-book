import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root',
})
export class ApiMockTimetable {
  constructor(
    private http: HttpClient) { }

  private schedulesUrl = 'api/schedules';

  getTimetable(): Observable<any[]> {
    return this.http.get<any[]>(this.schedulesUrl);
  }

}
