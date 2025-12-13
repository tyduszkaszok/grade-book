import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { MockTimetable } from './app/services/mock-timetable';

// 🔒 Zachowaj tylko wybrane klucze w localStorage
const allowedKeys = ['auth'];
Object.keys(localStorage).forEach(key => {
  if (!allowedKeys.includes(key)) {
    console.warn(`🧹 Czyszczenie: ${key} = ${localStorage.getItem(key)}`);
    localStorage.removeItem(key);
  }
});

// 🚀 Bootstrap z dodatkowymi providerami (InMemory API + HttpClient)
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(MockTimetable, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      })
    )
  ]
}).catch((err) => console.error(err));
