import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {WidgetsModule} from "./widgets/widgets.module";
import {VrVideosModule} from "./vr-videos/vr-videos.module";
import { ErrorComponent } from './error/error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import packageJson from "../../package.json";

@NgModule({
  declarations: [
      AppComponent,
      ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    WidgetsModule,
    VrVideosModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    {provide: 'APPLICATION_SERVER_HOST', useValue: environment.applicationServer.host},
    {provide: 'CDN_IMAGES_HOST', useValue: environment.cdnImages.host},
    {provide: 'APP_VERSION', useValue: packageJson.version},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
