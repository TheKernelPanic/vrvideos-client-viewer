import {Component, EventEmitter, Output} from '@angular/core';
import {Actress, Category} from "../../domain/models";

export enum Resolutions {
  RESOLUTION_8K= '8K',
  RESOLUTION_7K= '7K',
  RESOLUTION_6K= '6K',
  RESOLUTION_5K= '5K',
  RESOLUTION_4K= '4K',
  RESOLUTION_3K= '3K',
  RESOLUTION_2K= '2K'
}
export enum SortByValues {
  DATE_CREATION_DESC = 1,
  DATE_CREATION_ASC = 2,
  VIEWS_DESC = 3,
  VIEWS_ASC = 4,
  WIDTH_RESOLUTION_ASC = 5,
  WIDTH_RESOLUTION_DESC = 6,
  RATING_ASC = 7,
  RATING_DESC = 8,
  DURATION_ASC = 9,
  DURATION_DESC = 10,
  FILESIZE_ASC = 11,
  FILESIZE_DESC = 12,
}
export type Criteria = {
  actress: Actress|null;
  categories: Category[];
  sort: number;
  resolutions: string[];
};
type SelectableOption<T> = {
  value: T;
  rawText: string;
};

@Component({
  selector: 'app-widgets-list-criteria-selector',
  templateUrl: './list-criteria-selector.component.html',
  styleUrls: ['./list-criteria-selector.component.scss']
})
export class ListCriteriaSelectorComponent {

  @Output() public onChangeCriteria: EventEmitter<Criteria>;

  public criteria!: Criteria;
  public sortOptions: SelectableOption<number>[];

  public constructor() {

    this.setUpCriteria();
    this.sortOptions = [
      {value: SortByValues.DATE_CREATION_DESC, rawText: 'Creation date desc'},
      {value: SortByValues.DATE_CREATION_ASC, rawText: 'Creation date asc'},
      {value: SortByValues.VIEWS_DESC, rawText: 'Views desc'},
      {value: SortByValues.VIEWS_ASC, rawText: 'Views asc'}
    ];
    this.onChangeCriteria = new EventEmitter<Criteria>();
  }

  public changeCriteria(): void {

    this.onChangeCriteria.emit(this.criteria);
  }

  public clear(): void {

    this.setUpCriteria();
    this.changeCriteria();
  }

  private setUpCriteria(): void {

    this.criteria = {
      sort: SortByValues.DATE_CREATION_DESC,
      resolutions: [],
      actress: null,
      categories: []
    };
  }
}
