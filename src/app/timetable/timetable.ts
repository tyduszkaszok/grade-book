import { Component } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiMock} from '../services/api-mock';
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
  constructor(private apiMock: ApiMock, private auth: Auth) { }

  ngOnInit() {
    this.userClass = this.auth.getClass();
    this.apiMock.getTimetable().subscribe(data => {
      this.timetable = data.filter(item => item.class === this.userClass);
    });
  }

  getDay(day: string): any[] {
    return this.timetable.filter(item => item.day == day)
  }
}

