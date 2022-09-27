import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  public transform(value: number): string {

    return (((value / 1024) / 1024) / 1024).toFixed(2).toString() + ' GB';
  }
}
