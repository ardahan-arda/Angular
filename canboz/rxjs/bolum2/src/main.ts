import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/dersler/1-of-creation-func';
// import { App } from './app/dersler/2-from-creation-func';
// import { App } from './app/dersler/3-fromEvent-creation-func';
// import { App } from './app/dersler/4-timer-creation-func';
import { App } from './app/dersler/5-interval-creation-func';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
