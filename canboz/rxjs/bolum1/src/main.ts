import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/dersler/1-subscribe-unsubscribe';
// import { App } from './app/dersler/2-birden-fazla-subscribe';
// import { App } from './app/dersler/3-execute-sirasi';
// import { App } from './app/dersler/4-next-ile-deger-atama';
// import { App } from './app/dersler/5-next-calisma-mantigi';
// import { App } from './app/dersler/6-complete-ve-teardown';
// import { App } from './app/dersler/7-error-ve-teardown';
// import { App } from './app/dersler/8-error-complete-beraber';
// import { App } from './app/dersler/9-unsubscribe-ve-teradown-logic';
// import { App } from './app/dersler/10-cold-observable';
import { App } from './app/dersler/11-hot-observable';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
