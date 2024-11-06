import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const appProviders = [
  provideRouter(routes),
  provideHttpClient()
];

bootstrapApplication(AppComponent, {
  providers: appProviders
}).catch(err => console.error(err));
