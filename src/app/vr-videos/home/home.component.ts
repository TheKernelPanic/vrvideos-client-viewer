import { Component, OnInit } from '@angular/core';
import {ListingHttpService} from "../../http/vr-video/listing-http.service";
import {VrVideo} from "../../domain/models";
import {Router} from "@angular/router";
import {Criteria} from "../../widgets/list-criteria-selector/list-criteria-selector.component";
import {VrVideoCollectionHelper} from "../../utils/collection/vr-video-collection-helper";
import {HttpErrorResponse} from "@angular/common/http";
import {PaginatorHelper} from "../../utils/collection/paginator-helper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loader: boolean;
  private collectionHelper!: VrVideoCollectionHelper;
  private paginatorHelper: PaginatorHelper<VrVideo>;
  public pages: VrVideo[][];
  public currentPage:  VrVideo[];

  public constructor(
    private httpService: ListingHttpService,
    private router: Router
  ) {
    this.loader = false;
    this.pages = [];
    this.currentPage = [];
    this.paginatorHelper = new PaginatorHelper<VrVideo>();
  }

  public ngOnInit(): void {
    this.loader = true;
    this.httpService.request().subscribe({
      next: (vrVideos: VrVideo[]) => {
        this.collectionHelper = new VrVideoCollectionHelper(vrVideos);
        this.pages = this.paginatorHelper.getPages(
          this.collectionHelper.getCollection(null)
        );
        if (this.pages.length) {
          this.currentPage = this.pages[0];
        }
        this.loader = false;
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public onChangeCriteria(criteria: Criteria): void {

    this.pages = this.paginatorHelper.getPages(
      this.collectionHelper.getCollection(criteria)
    );
    this.currentPage = this.pages[0];
  }

  public trackByVrVideo(index: number, vrVideo: VrVideo): string {

    return vrVideo.uuid;
  }
}
