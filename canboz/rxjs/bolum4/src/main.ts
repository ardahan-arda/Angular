import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/dersler/1-filter-pipeable-operator';
// import { App } from './app/dersler/2-map-pipeable-operator';
// import { App } from './app/dersler/3-tap';
// import { App } from './app/dersler/4-debounceTime';
// import { App } from './app/dersler/5-skip';
// import { App } from './app/dersler/6-skipWhile';
// import { App } from './app/dersler/7-take';
// import { App } from './app/dersler/8-takeLast';
// import { App } from './app/dersler/9-takeWhile';
// import { App } from './app/dersler/10-first-ve-last';
// import { App } from './app/dersler/11-distinct';
// import { App } from './app/dersler/12-concatMap';
import { App } from './app/dersler/13-switchMap';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
