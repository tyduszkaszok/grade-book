import { Component } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockTimetable } from '../services/mock-timetable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiMockTimetable } from '../services/api-mock-timetable';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth'


@Component({
  selector: 'app-timetable',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './timetable.html',
  styleUrl: './timetable.scss',
})
export class Timetable {
  timetable: any[] = [];
  userClass: string | null = null;
  days: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
  constructor(private apiMockTimetable: ApiMockTimetable, private auth: Auth) { }

  ngOnInit() {
    this.userClass = this.auth.getClass();
    this.apiMockTimetable.getTimetable().subscribe(data => {
      this.timetable = data.filter(item => item.class === this.userClass);
    });
  }

  getDay(day: string): any[] {
    return this.timetable.filter(item => item.day == day)
  }
}

