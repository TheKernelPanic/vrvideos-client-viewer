import { Component, OnInit } from '@angular/core';
import {Actress} from "../../domain/models";
import {ListingHttpService} from "../../http/actress/listing-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {SlugGeneratorHelper} from "../../utils/slug-generator-helper";

@Component({
  selector: 'app-widgets-actress-selector',
  templateUrl: './actress-selector.component.html',
  styleUrls: ['./actress-selector.component.scss']
})
export class ActressSelectorComponent implements OnInit {

  private actresses: Actress[];
  public loader: boolean;
  public searchText: string;
  public filtered: Actress[];
  private writingTimeout: number|null;

  public constructor(
    private listingHttpService: ListingHttpService,
    private dialogRef: MatDialogRef<ActressSelectorComponent>,
    private router: Router
  ) {
    this.loader = false;
    this.actresses = [];
    this.filtered = [];
    this.searchText = '';
    this.writingTimeout = null;
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
    this.filtered = filtered;
  }

  public select(actress: Actress): void {
    this.dialogRef.close(actress);
  }
}
