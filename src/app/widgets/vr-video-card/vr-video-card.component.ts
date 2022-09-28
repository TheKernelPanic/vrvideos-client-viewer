import {Component, Input, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-widgets-vr-video-card',
  templateUrl: './vr-video-card.component.html',
  styleUrls: ['./vr-video-card.component.scss']
})
export class VrVideoCardComponent implements OnInit {

  @Input() public vrVideo!: VrVideo;

  public constructor(
    private dialog: MatDialog,
    private addCategoryService: AddCategoryHttpService,
    private addActressHttpService: AddActressHttpService,
    private router: Router,
    private toggleFavouriteHttpService: ToggleFavouriteHttpService,
    private setRatingHttpService: SetRatingHttpService
  ) { }

  public ngOnInit(): void {

  }

  public view(): void {
    console.log('View video', this.vrVideo.uuid);
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

    const found = this.vrVideo.actresses.find((a: Actress) => actress.slug === actress.slug);
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
}
