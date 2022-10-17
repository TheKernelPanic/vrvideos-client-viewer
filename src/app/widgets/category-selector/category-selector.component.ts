import {Component, OnInit} from '@angular/core';
import {CreateHttpService} from "../../http/category/create-http.service";
import {Category} from "../../domain/models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialogRef} from "@angular/material/dialog";
import {ListingHttpService} from "../../http/category/listing-http.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-widgets-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {

  public loader: boolean;
  public categories: Category[];
  public formGroup: FormGroup;

  constructor(
    private createHttpService: CreateHttpService,
    private listingHttpService: ListingHttpService,
    private dialogRef: MatDialogRef<CategorySelectorComponent>,
    private router: Router
  ) {
    this.loader = false;
    this.categories = [];
    this.formGroup = new FormGroup({
      text: new FormControl('', [Validators.required])
    });
  }

  public ngOnInit(): void {

    this.loader = true;
    this.listingHttpService.request().subscribe({
      next: (categories: Category[]) => {
        this.categories = categories;
        this.loader = false;
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public select(event: MatAutocompleteSelectedEvent): void {

    this.dialogRef.close(event.option.value);
    this.formGroup.reset();
  }

  public addCategory(): void {

    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.disable();
    this.createHttpService.request({canonical_name: this.formGroup.get('text')?.value}).subscribe({
      next: (category: Category) => {
        this.dialogRef.close(category);
        this.formGroup.reset();
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }
}
