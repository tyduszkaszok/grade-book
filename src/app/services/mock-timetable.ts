import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ApiStudents } from './api-students';

@Injectable({
  providedIn: 'root',
})
export class MockTimetable implements InMemoryDbService {
  createDb() {
    const schedules = [
      // Poniedziałek - 4b
      { id: 1, class: "4b", day: "Poniedziałek", subject: "Matematyka", hour: "8:00" },
      { id: 2, class: "4b", day: "Poniedziałek", subject: "Język polski", hour: "9:00" },
      { id: 3, class: "4b", day: "Poniedziałek", subject: "Język angielski", hour: "10:00" },
      { id: 4, class: "4b", day: "Poniedziałek", subject: "Wychowanie fizyczne", hour: "11:00" },
      { id: 5, class: "4b", day: "Poniedziałek", subject: "Historia", hour: "12:00" },
      
      // Wtorek - 4b
      { id: 6, class: "4b", day: "Wtorek", subject: "Fizyka", hour: "8:00" },
      { id: 7, class: "4b", day: "Wtorek", subject: "Chemia", hour: "9:00" },
      { id: 8, class: "4b", day: "Wtorek", subject: "Matematyka", hour: "10:00" },
      { id: 9, class: "4b", day: "Wtorek", subject: "Język angielski", hour: "11:00" },
      { id: 10, class: "4b", day: "Wtorek", subject: "Geografia", hour: "12:00" },
      
      // Środa - 4b
      { id: 11, class: "4b", day: "Środa", subject: "Język polski", hour: "8:00" },
      { id: 12, class: "4b", day: "Środa", subject: "Biologia", hour: "9:00" },
      { id: 13, class: "4b", day: "Środa", subject: "Informatyka", hour: "10:00" },
      { id: 14, class: "4b", day: "Środa", subject: "Matematyka", hour: "11:00" },
      { id: 15, class: "4b", day: "Środa", subject: "Wychowanie fizyczne", hour: "12:00" },
      
      // Czwartek - 4b
      { id: 16, class: "4b", day: "Czwartek", subject: "Historia", hour: "8:00" },
      { id: 17, class: "4b", day: "Czwartek", subject: "Język angielski", hour: "9:00" },
      { id: 18, class: "4b", day: "Czwartek", subject: "Fizyka", hour: "10:00" },
      { id: 19, class: "4b", day: "Czwartek", subject: "Język polski", hour: "11:00" },
      { id: 20, class: "4b", day: "Czwartek", subject: "Wiedza o społeczeństwie", hour: "12:00" },
      
      // Piątek - 4b
      { id: 21, class: "4b", day: "Piątek", subject: "Matematyka", hour: "8:00" },
      { id: 22, class: "4b", day: "Piątek", subject: "Chemia", hour: "9:00" },
      { id: 23, class: "4b", day: "Piątek", subject: "Geografia", hour: "10:00" },
      { id: 24, class: "4b", day: "Piątek", subject: "Biologia", hour: "11:00" },
      { id: 25, class: "4b", day: "Piątek", subject: "Godzina wychowawcza", hour: "12:00" },
      
      // Poniedziałek - 4c
      { id: 26, class: "4c", day: "Poniedziałek", subject: "Język angielski", hour: "8:00" },
      { id: 27, class: "4c", day: "Poniedziałek", subject: "Matematyka", hour: "9:00" },
      { id: 28, class: "4c", day: "Poniedziałek", subject: "Fizyka", hour: "10:00" },
      { id: 29, class: "4c", day: "Poniedziałek", subject: "Język polski", hour: "11:00" },
      { id: 30, class: "4c", day: "Poniedziałek", subject: "Wychowanie fizyczne", hour: "12:00" },
      
      // Wtorek - 4c
      { id: 31, class: "4c", day: "Wtorek", subject: "Historia", hour: "8:00" },
      { id: 32, class: "4c", day: "Wtorek", subject: "Matematyka", hour: "9:00" },
      { id: 33, class: "4c", day: "Wtorek", subject: "Język angielski", hour: "10:00" },
      { id: 34, class: "4c", day: "Wtorek", subject: "Biologia", hour: "11:00" },
      { id: 35, class: "4c", day: "Wtorek", subject: "Geografia", hour: "12:00" },
      
      // Środa - 4c
      { id: 36, class: "4c", day: "Środa", subject: "Chemia", hour: "8:00" },
      { id: 37, class: "4c", day: "Środa", subject: "Język polski", hour: "9:00" },
      { id: 38, class: "4c", day: "Środa", subject: "Matematyka", hour: "10:00" },
      { id: 39, class: "4c", day: "Środa", subject: "Informatyka", hour: "11:00" },
      { id: 40, class: "4c", day: "Środa", subject: "Wychowanie fizyczne", hour: "12:00" },
      
      // Czwartek - 4c
      { id: 41, class: "4c", day: "Czwartek", subject: "Fizyka", hour: "8:00" },
      { id: 42, class: "4c", day: "Czwartek", subject: "Język angielski", hour: "9:00" },
      { id: 43, class: "4c", day: "Czwartek", subject: "Geografia", hour: "10:00" },
      { id: 44, class: "4c", day: "Czwartek", subject: "Historia", hour: "11:00" },
      { id: 45, class: "4c", day: "Czwartek", subject: "Wiedza o społeczeństwie", hour: "12:00" },
      
      // Piątek - 4c
      { id: 46, class: "4c", day: "Piątek", subject: "Język polski", hour: "8:00" },
      { id: 47, class: "4c", day: "Piątek", subject: "Matematyka", hour: "9:00" },
      { id: 48, class: "4c", day: "Piątek", subject: "Chemia", hour: "10:00" },
      { id: 49, class: "4c", day: "Piątek", subject: "Biologia", hour: "11:00" },
      { id: 50, class: "4c", day: "Piątek", subject: "Godzina wychowawcza", hour: "12:00" }
    ];
    
    return { schedules };
  }
}