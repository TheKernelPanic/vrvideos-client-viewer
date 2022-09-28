import {VrVideo} from "../../domain/models";
import {Criteria, SortByValues} from "../../widgets/list-criteria-selector/list-criteria-selector.component";
import {ActressFilter, CategoryFilter, Filter, ResolutionFilter} from "./filters";

export class VrVideoCollectionHelper {

  private readonly collection: VrVideo[];
  private filters: Filter[];

  public constructor(collection: VrVideo[]) {
    this.collection = collection;
    this.filters = [];
  }

  public getCollection(criteria: Criteria|null = null): VrVideo[] {

    if (criteria === null) {
      return this.sort(this.collection, SortByValues.DATE_CREATION_DESC);
    }
    return this.setUpFilters(criteria).sort(
      this.getFilteredCollection(),
      criteria.sort
    );
  }

  private setUpFilters(criteria: Criteria): VrVideoCollectionHelper {

    this.filters = [];
    if (criteria.categories.length) {
      this.filters.push(new CategoryFilter(criteria));
    }
    if (criteria.resolutions.length) {
      this.filters.push(new ResolutionFilter(criteria));
    }
    if (criteria.actress !== null) {
      this.filters.push(new ActressFilter(criteria));
    }
    return this;
  }

  private getFilteredCollection(): VrVideo[] {

    const filtered = [];
    let match;
    for (const element of this.collection) {
      for (const filter of this.filters) {
        match = filter.filter(element);
        if (!match) {
          break;
        }
      }
      if (match) {
        filtered.push(element);
      }
    }
    return filtered;
  }

  private sort(filteredCollection: VrVideo[], sortOption: number): VrVideo[] {

    switch(sortOption) {
      case SortByValues.DATE_CREATION_DESC:
        return filteredCollection;// TODO
      case SortByValues.DATE_CREATION_ASC:
        return filteredCollection;// TODO
      case SortByValues.VIEWS_DESC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.viewed_times > b.viewed_times ? 1 : -1);
      case SortByValues.VIEWS_ASC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.viewed_times < b.viewed_times ? 1 : -1);
      case SortByValues.WIDTH_RESOLUTION_ASC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.width > b.width ? 1 : -1);
      case SortByValues.WIDTH_RESOLUTION_DESC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.width < b.width ? 1 : -1);
      case SortByValues.RATING_ASC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.rating > b.rating ? 1 : -1);
      case SortByValues.RATING_DESC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.rating < b.rating ? 1 : -1);
      case SortByValues.DURATION_ASC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.duration_seconds > b.duration_seconds ? 1 : -1);
      case SortByValues.DURATION_DESC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.duration_seconds < b.duration_seconds ? 1 : -1);
      case SortByValues.FILESIZE_ASC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.filesize > b.filesize ? 1 : -1);
      case SortByValues.FILESIZE_DESC:
        return filteredCollection.sort((a: VrVideo, b: VrVideo) => a.filesize < b.filesize ? 1 : -1);
      default:
        throw new Error('Unsupported sort option');
    }
  }
}
