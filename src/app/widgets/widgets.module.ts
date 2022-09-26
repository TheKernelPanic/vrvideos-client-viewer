import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {VrVideoCardComponent} from "./vr-video-card/vr-video-card.component";
import { WrapperViewComponent } from './wrapper-view/wrapper-view.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    HeaderComponent,
    VrVideoCardComponent,
    WrapperViewComponent
  ],
  exports: [
    HeaderComponent,
    VrVideoCardComponent
  ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetsModule { }
