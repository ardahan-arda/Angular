import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/dersler/1-filter-pipeable-operator';
// import { App } from './app/dersler/2-map-pipeable-operator';
import { App } from './app/dersler/3-tap';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
