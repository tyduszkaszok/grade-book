import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiMock {
  constructor(
    private http: HttpClient) { }

  private schedulesUrl = 'api/schedules';
  private studentsUrl = 'api/students';
  private studentsInfoUrl = 'api/studentsinfo'

  getTimetable(): Observable<any[]> {
    return this.http.get<any[]>(this.schedulesUrl);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentsUrl);
  }


  getAllStudentsInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.studentsInfoUrl);
  }

  getStudent(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.studentsInfoUrl}/${studentId}`);
  }

  getStudentsFromClass(className: string): Observable<any[]> {
    return this.http.get<any[]>(this.studentsInfoUrl).pipe(
      map(students => students.filter(s => s.class === className))
    );
  }


  getClasses(): Observable<string[]> {
    return this.http.get<any[]>(this.studentsInfoUrl).pipe(
      map(students => {
        const uniqueClasses = students.map(s => s.class);
        return [...new Set(uniqueClasses)];
      })
    );
  }


  updateStudent(studentId: number, student: any): Observable<any> {
    return this.http.put<any>(`${this.studentsInfoUrl}/${studentId}`, student);
  }
}
