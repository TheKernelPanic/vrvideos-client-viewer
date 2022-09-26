import { Component, OnInit } from '@angular/core';
import {ListingHttpService} from "../../http/vr-video/listing-http.service";
import {VrVideo} from "../../domain/models";
import {Router} from "@angular/router";
import {Criteria} from "../../widgets/list-criteria-selector/list-criteria-selector.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loader: boolean;
  private vrVideos: VrVideo[];

  public constructor(
    private httpService: ListingHttpService,
    private router: Router
  ) {
    this.loader = false;
    this.vrVideos = [];
  }

  public ngOnInit(): void {
    //this.loader = true;
    //this.httpService.request().subscribe({
    //  next: (vrVideos: VrVideo[]) => {
    //    this.vrVideos = vrVideos;
    //    this.loader = false;
    //  },
    //  error: (error: HttpErrorResponse) => {
    //    this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
    //  }
    //});
  }

  public onChangeCriteria(criteria: Criteria): void {
    console.log(criteria);
  }
}
