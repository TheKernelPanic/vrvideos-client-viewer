import { Component, OnInit } from '@angular/core';

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

  public sortOptions: SelectableOption<number>[];

  public constructor() {
    this.sortOptions = [
      {value: 1, rawText: 'Creation date desc'}
    ];
  }

  public ngOnInit(): void {
  }
}
