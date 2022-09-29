import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {VrVideoCardComponent} from "./vr-video-card/vr-video-card.component";
import {WrapperViewComponent} from './wrapper-view/wrapper-view.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CategorySelectorComponent} from './category-selector/category-selector.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ListCriteriaSelectorComponent} from './list-criteria-selector/list-criteria-selector.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ActressSelectorComponent} from './actress-selector/actress-selector.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {RawResolutionPipe} from "../pipes/raw-resolution.pipe";
import {FileSizePipe} from "../pipes/file-size.pipe";
import {TimeDurationPipe} from "../pipes/time-duration.pipe";
import {BarRatingModule} from "ngx-bar-rating";
import {AutocompleteVrVideoInputComponent} from "./autocomplete-vr-video-input/autocomplete-vr-video-input.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ImageUrlResolverPipe} from "../pipes/image-url-resolver.pipe";


@NgModule({
  declarations: [
    HeaderComponent,
    VrVideoCardComponent,
    WrapperViewComponent,
    CategorySelectorComponent,
    ListCriteriaSelectorComponent,
    ActressSelectorComponent,
    RawResolutionPipe,
    FileSizePipe,
    TimeDurationPipe,
    AutocompleteVrVideoInputComponent,
    ImageUrlResolverPipe
  ],
  exports: [
    HeaderComponent,
    VrVideoCardComponent,
    WrapperViewComponent,
    ListCriteriaSelectorComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    BarRatingModule,
    MatAutocompleteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetsModule {
}
