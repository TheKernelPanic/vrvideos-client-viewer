import { Pipe, PipeTransform } from '@angular/core';
import {Resolutions} from "../widgets/list-criteria-selector/list-criteria-selector.component";

@Pipe({
  name: 'rawResolution'
})
export class RawResolutionPipe implements PipeTransform {

  public transform(width: number): string {
    switch (true) {
      case 7680<=width:
        return Resolutions.RESOLUTION_8K;
      case 7360<=width:
        return Resolutions.RESOLUTION_7K;
      case 6016<=width:
        return Resolutions.RESOLUTION_6K;
      case 4944<=width:
        return Resolutions.RESOLUTION_5K;
      case 3840<=width:
        return Resolutions.RESOLUTION_4K;
      case 2880<= width:
        return Resolutions.RESOLUTION_3K;
      case 2048<=width:
        return Resolutions.RESOLUTION_2K;
      default:
        throw new Error('Unsupported resolution');
    }
  }
}
