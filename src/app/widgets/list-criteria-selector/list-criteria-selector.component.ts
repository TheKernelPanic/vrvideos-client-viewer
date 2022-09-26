import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export enum SortByValues {
  DATE_CREATION_DESC = 1,
  DATE_CREATION_ASC = 2
}

export type Criteria = {
  sort: number;
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
  };
  public sortOptions: SelectableOption<number>[];

  public constructor() {
    this.sortOptions = [
      {value: SortByValues.DATE_CREATION_DESC, rawText: 'Creation date desc'},
      {value: SortByValues.DATE_CREATION_ASC, rawText: 'Creation date asc'}
    ];
    this.onChangeCriteria = new EventEmitter<Criteria>();
  }

  public ngOnInit(): void {
  }
}
