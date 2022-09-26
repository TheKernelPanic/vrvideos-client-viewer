import {VrVideo} from "../domain/models";
import {Criteria} from "../widgets/list-criteria-selector/list-criteria-selector.component";

export class FilterCollectionHelper {

  private readonly collection: VrVideo[];

  public constructor(collection: VrVideo[]) {
    this.collection = collection;
  }

  public filter(criteria: Criteria): VrVideo[] {
    return this.collection;
  }
}
