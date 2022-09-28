import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Actress, Category} from "../../domain/models";
import {Resolutions} from "../list-criteria-selector/list-criteria-selector.component";
import {ListingHttpService as ListingActressesHttpService} from "../../http/actress/listing-http.service";
import {ListingHttpService as ListingCategoriesHttpService} from "../../http/category/listing-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

type AutocompleteListOption<T> = {
  slug: string;
  type: 'actress'|'category'|'resolution';
  value: T;
};

@Component({
  selector: 'app-widgets-autocomplete-vr-video-input',
  templateUrl: './autocomplete-vr-video-input.component.html',
  styleUrls: ['./autocomplete-vr-video-input.component.scss']
})
export class AutocompleteVrVideoInputComponent implements OnInit {

  public autocompleteOptions: AutocompleteListOption<unknown>[];

  @Output() public onSelectCategory: EventEmitter<Category>;
  @Output() public onSelectActress: EventEmitter<Actress>;
  @Output() public onSelectResolution: EventEmitter<string>;

  public constructor(
    private listingActressHttpService: ListingActressesHttpService,
    private listingCategoriesHttpService: ListingCategoriesHttpService,
    private router: Router
  ) {

    this.onSelectCategory = new EventEmitter<Category>()
    this.onSelectActress = new EventEmitter<Actress>();
    this.onSelectResolution = new EventEmitter<string>();
    this.autocompleteOptions = [];
  }

  public ngOnInit(): void {

    this.listingCategoriesHttpService.request().subscribe({
      next: (categories: Category[]) => {
        for (const category of categories) {
          this.autocompleteOptions.push({slug: category.slug as string, type: 'category', value: category});
        }
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
    this.listingActressHttpService.request().subscribe({
      next: (actresses: Actress[]) => {
        for (const actress of actresses) {
          this.autocompleteOptions.push({slug: actress.slug as string, type: 'category', value: actress});
        }
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
    this.autocompleteOptions.push(
      {slug: Resolutions.RESOLUTION_8K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_8K},
      {slug: Resolutions.RESOLUTION_7K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_7K},
      {slug: Resolutions.RESOLUTION_6K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_6K},
      {slug: Resolutions.RESOLUTION_5K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_5K},
      {slug: Resolutions.RESOLUTION_4K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_4K},
      {slug: Resolutions.RESOLUTION_3K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_3K},
      {slug: Resolutions.RESOLUTION_2K.toLowerCase(), type: 'resolution', value: Resolutions.RESOLUTION_2K},
    );
  }

  public select(option: AutocompleteListOption<Category|Actress|string>): void {

    switch (option.type) {
      case 'resolution':
        this.onSelectResolution.emit(option.value as string);
        break;
      case 'actress':
        this.onSelectActress.emit(option.value as Actress);
        break;
      case 'category':
        this.onSelectCategory.emit(option.value as Category);
        break;
    }
  }
}
