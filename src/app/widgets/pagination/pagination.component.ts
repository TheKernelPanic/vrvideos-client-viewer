import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{
  @Input() public currentPage!: number;
  @Input() public summaryPages!: number[];
  @Output() public pageSelection: EventEmitter<number> = new EventEmitter<number>();
}
