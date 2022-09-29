import {Inject, Pipe, PipeTransform} from '@angular/core';
import {ImageActress, ImageVrVideo} from "../domain/models";

@Pipe({
  name: 'imageUrlResolver'
})
export class ImageUrlResolverPipe implements PipeTransform {

  public constructor(
    @Inject('CDN_IMAGES_HOST') private host: string
  ) {
  }

  public transform(image: ImageVrVideo|ImageActress): unknown {

    return this.host + '/' + image.image.directory + '/' + image.image.filename;
  }
}
