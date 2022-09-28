import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Actress, Category} from "../../domain/models";
import {Resolutions} from "../list-criteria-selector/list-criteria-selector.component";
import {ListingHttpService as ListingActressesHttpService} from "../../http/actress/listing-http.service";
import {ListingHttpService as ListingCategoriesHttpService} from "../../http/category/listing-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {SlugGeneratorHelper} from "../../utils/slug-generator-helper";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

type AutocompleteListOption<T> = {
  slug: string;
  type: 'actress'|'category'|'resolution';
  raw: string;
  value: T;
};

@Component({
  selector: 'app-widgets-autocomplete-vr-video-input',
  templateUrl: './autocomplete-vr-video-input.component.html',
  styleUrls: ['./autocomplete-vr-video-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteVrVideoInputComponent implements OnInit {

  public autocompleteOptions: AutocompleteListOption<unknown>[];
  public control: FormControl = new FormControl('');

  @Output() public onSelectCategory: EventEmitter<Category>;
  @Output() public onSelectActress: EventEmitter<Actress>;
  @Output() public onSelectResolution: EventEmitter<string>;

  public filteredOptions!: Observable<AutocompleteListOption<unknown>[]>;

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
          this.autocompleteOptions.push({slug: category.slug as string, raw: category.canonical_name, type: 'category', value: category});
        }
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
    this.listingActressHttpService.request().subscribe({
      next: (actresses: Actress[]) => {
        for (const actress of actresses) {
          this.autocompleteOptions.push({slug: actress.slug as string, raw: actress.name, type: 'actress', value: actress});
        }
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
    this.autocompleteOptions.push(
      {slug: Resolutions.RESOLUTION_8K.toLowerCase(), raw: Resolutions.RESOLUTION_8K, type: 'resolution', value: Resolutions.RESOLUTION_8K},
      {slug: Resolutions.RESOLUTION_7K.toLowerCase(), raw: Resolutions.RESOLUTION_7K, type: 'resolution', value: Resolutions.RESOLUTION_7K},
      {slug: Resolutions.RESOLUTION_6K.toLowerCase(), raw: Resolutions.RESOLUTION_6K, type: 'resolution', value: Resolutions.RESOLUTION_6K},
      {slug: Resolutions.RESOLUTION_5K.toLowerCase(), raw: Resolutions.RESOLUTION_5K, type: 'resolution', value: Resolutions.RESOLUTION_5K},
      {slug: Resolutions.RESOLUTION_4K.toLowerCase(), raw: Resolutions.RESOLUTION_4K, type: 'resolution', value: Resolutions.RESOLUTION_4K},
      {slug: Resolutions.RESOLUTION_3K.toLowerCase(), raw: Resolutions.RESOLUTION_3K, type: 'resolution', value: Resolutions.RESOLUTION_3K},
      {slug: Resolutions.RESOLUTION_2K.toLowerCase(), raw: Resolutions.RESOLUTION_2K, type: 'resolution', value: Resolutions.RESOLUTION_2K},
    );

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value: string|unknown) => {
        if (typeof value !== 'string') {
          return [];
        }
        const slug = SlugGeneratorHelper.generate(value);
        const matches = [];
        for (const element of this.autocompleteOptions) {
          if (element.slug.includes(slug)) {
            matches.push(element);
          }
        }
        return matches;
      })
    );
  }

  public select(event: MatAutocompleteSelectedEvent): void {

    switch (event.option.value.type) {
      case 'resolution':
        this.onSelectResolution.emit(event.option.value.value as string);
        break;
      case 'actress':
        this.onSelectActress.emit(event.option.value.value as Actress);
        break;
      case 'category':
        this.onSelectCategory.emit(event.option.value.value as Category);
        break;
    }
  }

  public displayWidth(): string {

    return '';
  }
}
