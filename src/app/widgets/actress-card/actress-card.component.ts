import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Actress} from "../../domain/models";

@Component({
  selector: 'app-widgets-actress-card',
  templateUrl: './actress-card.component.html',
  styleUrls: ['./actress-card.component.scss']
})
export class ActressCardComponent{

  @Input() public actress!: Actress;
  @Output() public onSelectionEmitter: EventEmitter<Actress>;

  public constructor() {

    this.onSelectionEmitter = new EventEmitter<Actress>();
  }

  public select(): void {

    this.onSelectionEmitter.emit(this.actress);
  }
}
