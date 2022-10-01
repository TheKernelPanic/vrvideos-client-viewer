import {Component, Input, OnInit} from '@angular/core';
import {ImageActress, ImageVrVideo} from "../../domain/models";

@Component({
  selector: 'app-widgets-image-gallery-clickable',
  templateUrl: './image-gallery-clickable.component.html',
  styleUrls: ['./image-gallery-clickable.component.scss']
})
export class ImageGalleryClickableComponent implements OnInit {

  @Input() public images!: (ImageActress|ImageVrVideo)[];
  private currentIndex: number = 0;
  public currentImage: ImageActress|ImageVrVideo|null = null;

  public ngOnInit(): void {

    this.currentImage = this.images[this.currentIndex];
  }

  public next(): void {

    if (this.currentIndex < (this.images.length-1)) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.currentImage = this.images[this.currentIndex];
  }
}
