import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDuration'
})
export class TimeDurationPipe implements PipeTransform {

  public transform(seconds: number): string {
    return Math.ceil(seconds / 60) + ' m';
  }
}
