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
    VrVideosModule
  ],
    providers: [
        {provide: 'APPLICATION_SERVER_HOST', useValue: environment.applicationServer.host}
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
