import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rawResolution'
})
export class RawResolutionPipe implements PipeTransform {

  public transform(width: number): string {
    switch (width) {

    }
  }
}
