import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { MockDb } from './app/services/mocks/mock-db';



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
