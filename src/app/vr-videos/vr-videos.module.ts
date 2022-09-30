import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {WidgetsModule} from "../widgets/widgets.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [HomeComponent]
})
export class VrVideosModule { }
