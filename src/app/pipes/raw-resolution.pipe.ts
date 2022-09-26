import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rawResolution'
})
export class RawResolutionPipe implements PipeTransform {

  public transform(width: number): string {
    switch (true) {
      case 7680<=width:
        return '8K';
      case 7360<=width:
        return '7K';
      case 6016<=width:
        return '6K';
      case 4944<=width:
        return '5K';
      case 3840<=width:
        return '4K';
      case 2880<= width:
        return '3K';
      case 2048<=width:
        return '2K';
      default:
        throw new Error('Unsupported resolution');
    }
  }
}
