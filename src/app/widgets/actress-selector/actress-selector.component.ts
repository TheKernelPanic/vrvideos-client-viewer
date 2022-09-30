import { Component, OnInit } from '@angular/core';
import {Actress} from "../../domain/models";
import {ListingHttpService} from "../../http/actress/listing-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {SlugGeneratorHelper} from "../../utils/slug-generator-helper";
import {PaginatorHelper} from "../../utils/collection/paginator-helper";

@Component({
  selector: 'app-widgets-actress-selector',
  templateUrl: './actress-selector.component.html',
  styleUrls: ['./actress-selector.component.scss']
})
export class ActressSelectorComponent implements OnInit {

  private actresses: Actress[];
  public loader: boolean;
  public searchText: string;
  public collection: Actress[];
  private writingTimeout: number|null;
  public currentPage: number;
  private paginationHelper: PaginatorHelper<Actress>;
  private scrolling: boolean;

  public constructor(
    private listingHttpService: ListingHttpService,
    private dialogRef: MatDialogRef<ActressSelectorComponent>,
    private router: Router
  ) {
    this.loader = false;
    this.actresses = [];
    this.collection = [];
    this.searchText = '';
    this.writingTimeout = null;
    this.currentPage = 1;
    this.scrolling = false;
    this.paginationHelper = new PaginatorHelper<Actress>();
  }

  public ngOnInit(): void {

    this.loader = true;
    this.listingHttpService.request().subscribe({
      next: (actresses: Actress[]) => {
        this.actresses = actresses;
        this.loader = false;
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public search(): void {

    if (this.writingTimeout !== null) {
      clearInterval(this.writingTimeout);
    }
    this.writingTimeout = setTimeout(() => {
      this.filter();
    }, 1000);
  }

  private filter(): void {

    const slug = SlugGeneratorHelper.generate(this.searchText);
    const filtered = [];
    for (const actress of this.actresses) {
      if (actress.slug.includes(slug)) {
        filtered.push(actress);
      }
    }
    this.currentPage = 1;
    this.paginationHelper.setCollection(filtered);
    this.collection = this.paginationHelper.getFrom(this.currentPage);
  }

  public onSelect(actress: Actress): void {

    this.dialogRef.close(actress);
  }

  public onScroll(): void {

    if (this.scrolling) {
      return;
    }
    if (this.paginationHelper.getPages() < this.currentPage) {
      return;
    }
    this.scrolling = true;
    this.currentPage++;
    this.collection.push(...this.paginationHelper.getFrom(this.currentPage));
    this.scrolling = false;
  }
}
