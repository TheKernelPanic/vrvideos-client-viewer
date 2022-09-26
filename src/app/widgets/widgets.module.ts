import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {VrVideoCardComponent} from "./vr-video-card/vr-video-card.component";
import { WrapperViewComponent } from './wrapper-view/wrapper-view.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HeaderComponent,
    VrVideoCardComponent,
    WrapperViewComponent,
    CategorySelectorComponent
  ],
    exports: [
        HeaderComponent,
        VrVideoCardComponent,
        WrapperViewComponent
    ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetsModule { }
