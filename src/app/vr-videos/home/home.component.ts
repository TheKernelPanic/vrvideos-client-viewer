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
  public paginatorHelper: PaginatorHelper<VrVideo>;
  public collection: VrVideo[];
  public currentPage: number;
  public summaryPages: number[];

  public constructor(
    private httpService: ListingHttpService,
    private router: Router
  ) {
    this.loader = false;
    this.paginatorHelper = new PaginatorHelper<VrVideo>();
    this.collection = [];
    this.currentPage = 1;
    this.summaryPages = [];
  }

  public ngOnInit(): void {
    this.loader = true;
    this.httpService.request().subscribe({
      next: (vrVideos: VrVideo[]) => {
        this.collectionHelper = new VrVideoCollectionHelper(vrVideos);
        this.onChangeCriteria(null);
        this.loader = false;
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public onChangeCriteria(criteria: Criteria|null): void {
    this.currentPage = 1;
    this.paginatorHelper.setCollection(
      this.collectionHelper.getCollection(criteria)
    );
    this.collection = this.paginatorHelper.getFrom(this.currentPage);
    this.summaryPages = this.paginatorHelper.getSummary(this.currentPage);
  }

  public trackByVrVideo(index: number, vrVideo: VrVideo): string {
    return vrVideo.uuid;
  }

  public selectPage(page: number): void {
    this.currentPage = page;
    this.collection = this.paginatorHelper.getFrom(this.currentPage);
    this.summaryPages = this.paginatorHelper.getSummary(this.currentPage);
  }
}
