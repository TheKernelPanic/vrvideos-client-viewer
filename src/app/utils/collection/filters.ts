import {VrVideo} from "../../domain/models";
import {Criteria, Resolutions} from "../../widgets/list-criteria-selector/list-criteria-selector.component";

export interface Filter {
  filter(vrVideo: VrVideo): boolean;
}

class BaseFilter {
  public constructor(
    protected criteria: Criteria
  ) {
  }
}

export class CategoryFilter extends BaseFilter implements Filter {

  public filter(vrVideo: VrVideo): boolean {
    let match = false;
    for (const categoryCriteria of this.criteria.categories) {
      let found = false;
      for (const categoryVrVideo of vrVideo.categories) {
        if (categoryCriteria.slug === categoryVrVideo.slug) {
          found = true;
          break;
        }
      }
      match = found;
    }
    return match;
  }
}

export class ActressFilter extends BaseFilter implements Filter {

  public filter(vrVideo: VrVideo): boolean {

    for (const actress of vrVideo.actresses) {
      if (actress.slug === this.criteria.actress?.slug) {
        return true;
      }
    }
    return false;
  }
}

export class ResolutionFilter extends BaseFilter implements Filter {

  public filter(vrVideo: VrVideo): boolean {

    let match = false;
    for (const resolution of this.criteria.resolutions) {
      switch (resolution) {
        case Resolutions.RESOLUTION_8K:
          match = 7680<=vrVideo.width;
          break;
        case Resolutions.RESOLUTION_7K:
          match = (7360<=vrVideo.width && vrVideo.width<7680);
          break;
        case Resolutions.RESOLUTION_6K:
          match = (6016<=vrVideo.width && vrVideo.width<7360);
          break;
        case Resolutions.RESOLUTION_5K:
          match = (4944<=vrVideo.width && vrVideo.width<6016);
          break;
        case Resolutions.RESOLUTION_4K:
          match = (3840<=vrVideo.width && vrVideo.width<4944);
          break;
        case Resolutions.RESOLUTION_3K:
          match = (2880<= vrVideo.width && vrVideo.width<3840);
          break;
        case Resolutions.RESOLUTION_2K:
          match = (2048<=vrVideo.width && vrVideo.width<2880);
          break;
      }
      if (!match) {
        return false;
      }
    }
    return true;
  }
}
