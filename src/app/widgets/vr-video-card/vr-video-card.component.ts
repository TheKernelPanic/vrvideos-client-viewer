import {Component, Input} from '@angular/core';
import {Actress, Category, VrVideo} from "../../domain/models";
import {MatDialog} from "@angular/material/dialog";
import {CategorySelectorComponent} from "../category-selector/category-selector.component";
import {AddCategoryHttpService} from "../../http/vr-video/add-category-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ActressSelectorComponent} from "../actress-selector/actress-selector.component";
import {AddActressHttpService} from "../../http/vr-video/add-actress-http.service";
import {ToggleFavouriteHttpService} from "../../http/vr-video/toggle-favourite-http.service";
import {SetRatingHttpService} from "../../http/vr-video/set-rating-http.service";
import {ViewHttpService} from "../../http/vr-video/view-http.service";
import {ReportHttpService} from "../../http/vr-video/report-http.service";

@Component({
  selector: 'app-widgets-vr-video-card',
  templateUrl: './vr-video-card.component.html',
  styleUrls: ['./vr-video-card.component.scss']
})
export class VrVideoCardComponent {

  @Input() public vrVideo!: VrVideo;

  public constructor(
    private dialog: MatDialog,
    private addCategoryService: AddCategoryHttpService,
    private addActressHttpService: AddActressHttpService,
    private router: Router,
    private toggleFavouriteHttpService: ToggleFavouriteHttpService,
    private setRatingHttpService: SetRatingHttpService,
    private viewHttpService: ViewHttpService,
    private reportHttpService: ReportHttpService
  ) { }

  public view(): void {

    const url = 'http://' + this.vrVideo.hosted_on.address + '/' + this.vrVideo.uuid + '/video.mp4';
    window.open(url, "_blank");

    this.viewHttpService.request(this.vrVideo).subscribe({
      next: () => {
        this.vrVideo.viewed_times++;
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public openActressesSelector(): void {

    this.dialog.open(ActressSelectorComponent, {width: '425px'}).afterClosed().subscribe({
      next: (actress: Actress) => {
        this.addActress(actress);
      }
    });
  }

  public openCategoriesSelector(): void {

    this.dialog.open(CategorySelectorComponent).afterClosed().subscribe({
      next: (category: Category) => {
        this.addCategory(category);
      }
    });
  }

  private addActress(actress: Actress): void {

    if (actress === undefined) {
      return;
    }
    const found = this.vrVideo.actresses.find((a: Actress) => a.slug === actress.slug);
    if (found !== undefined) {
      return;
    }
    this.addActressHttpService.request(this.vrVideo, actress).subscribe({
      next: () => {
        this.vrVideo.actresses.push(actress);
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  private addCategory(category: Category): void {

    if (category === undefined) {
      return;
    }
    const found = this.vrVideo.categories.find((c: Category) => c.slug === category.slug);
    if (found !== undefined) {
      return;
    }
    this.addCategoryService.request(this.vrVideo, category).subscribe({
      next: () => {
        this.vrVideo.categories.push(category);
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public onChangeRate(value: number): void {

    this.vrVideo.rating = value;
    this.setRatingHttpService.request(this.vrVideo).subscribe({
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public setAsFavourite(): void {

    this.vrVideo.favourite = !this.vrVideo.favourite;
    this.toggleFavouriteHttpService.request(this.vrVideo).subscribe({
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }

  public reportVideo(): void {
    this.reportHttpService.request(this.vrVideo).subscribe({
      next: () => {
        this.vrVideo.reported = !this.vrVideo.reported;
      },
      error:(error: HttpErrorResponse) => {
        this.router.navigate(['/error'], {queryParams: {code: error.status}}).then(null);
      }
    });
  }
}
