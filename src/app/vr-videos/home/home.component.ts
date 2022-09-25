import { Component, OnInit } from '@angular/core';
import {ListingHttpService} from "../../http/vr-video/listing-http.service";
import {VrVideo} from "../../domain/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loader: boolean;
  public vrVideos: VrVideo[];

  public constructor(
    private httpService: ListingHttpService
  ) {
    this.loader = false;
    this.vrVideos = [];
  }

  public ngOnInit(): void {
    this.loader = true;
    this.httpService.request().subscribe({
      next: (vrVideos: VrVideo[]) => {
        this.vrVideos = vrVideos;
        this.loader = false;
      },
      error: () => {
        // TODO: Handle
      }
    })
  }
}
