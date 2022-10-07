import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  window.console.groupCollapsed = (): void => { };
  window.console.groupEnd = (): void => { };
  window.console.log = (): void => { };
  window.console.info = (): void => { };
  window.console.assert = (): void => { };
  window.console.warn = (): void => { };
  window.console.error = (): void => { };
  window.console.dir = (): void => { };
  window.console.table = (): void => { };
  window.console.trace = (): void => { };
  window.console.debug = (): void => { };

  console.groupCollapsed = (): void => { };
  console.groupEnd = (): void => { };
  console.log = (): void => { };
  console.assert = (): void => { };
  console.warn = (): void => { };
  console.error = (): void => { };
  console.dir = (): void => { };
  console.table = (): void => { };
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
