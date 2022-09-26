import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  VIEWS_ASC = 4
}
export type Criteria = {
  sort: number;
  resolution: string|null;
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
export class ListCriteriaSelectorComponent implements OnInit {

  @Output() public onChangeCriteria: EventEmitter<Criteria>;

  public criteria: Criteria = {
    sort: SortByValues.DATE_CREATION_DESC,
    resolution: null
  };

  public sortOptions: SelectableOption<number>[];
  public resolutionsOptions: SelectableOption<string>[];

  public constructor() {

    this.sortOptions = [
      {value: SortByValues.DATE_CREATION_DESC, rawText: 'Creation date desc'},
      {value: SortByValues.DATE_CREATION_ASC, rawText: 'Creation date asc'},
      {value: SortByValues.VIEWS_DESC, rawText: 'Views desc'},
      {value: SortByValues.VIEWS_ASC, rawText: 'Views asc'}
    ];
    this.resolutionsOptions = [
      {value: Resolutions.RESOLUTION_8K, rawText: Resolutions.RESOLUTION_8K},
      {value: Resolutions.RESOLUTION_7K, rawText: Resolutions.RESOLUTION_7K},
      {value: Resolutions.RESOLUTION_6K, rawText: Resolutions.RESOLUTION_6K},
      {value: Resolutions.RESOLUTION_5K, rawText: Resolutions.RESOLUTION_5K},
      {value: Resolutions.RESOLUTION_4K, rawText: Resolutions.RESOLUTION_4K},
      {value: Resolutions.RESOLUTION_3K, rawText: Resolutions.RESOLUTION_3K},
      {value: Resolutions.RESOLUTION_2K, rawText: Resolutions.RESOLUTION_2K}
    ];
    this.onChangeCriteria = new EventEmitter<Criteria>();
  }

  public changeCriteria(): void {
    this.onChangeCriteria.emit(this.criteria);
  }

  public ngOnInit(): void {
  }
}
