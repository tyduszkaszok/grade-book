import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { MockDb } from './app/services/mock-db';


const allowedKeys = ['auth'];
Object.keys(localStorage).forEach(key => {
  if (!allowedKeys.includes(key)) {
    console.warn(`🧹 Czyszczenie: ${key} = ${localStorage.getItem(key)}`);
    localStorage.removeItem(key);
  }
});


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(MockDb, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      })
    )
  ]
}).catch((err) => console.error(err));
