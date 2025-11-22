import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/dersler/1-concat';
// import { App } from './app/dersler/2-merge';
// import { App } from './app/dersler/3-startWith-endWith';
// import { App } from './app/dersler/4-forkJoin';
// import { App } from './app/dersler/5-forkJoin-ornek';
import { App } from './app/dersler/6-combineLatest';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
