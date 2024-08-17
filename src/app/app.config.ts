import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MAIN_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(MAIN_ROUTES)]
};
