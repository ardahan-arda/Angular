import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/dersler/1-subject';
// import { App } from './app/dersler/2-behaviorsubject';
// import { App } from './app/dersler/3-asyncsubject';
import { App } from './app/dersler/4-replaysubject';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
