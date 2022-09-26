import { Component, OnInit } from '@angular/core';
import {Actress} from "../../domain/models";
import {ListingHttpService} from "../../http/actress/listing-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

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

  public constructor(
    private listingHttpService: ListingHttpService,
    private router: Router
  ) {
    this.loader = false;
    this.actresses = [];
    this.filtered = [];
    this.searchText = '';
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
    })
  }

  public search(): void {

  }
}
