import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-widgets-wrapper-view',
  templateUrl: './wrapper-view.component.html',
  styleUrls: ['./wrapper-view.component.scss']
})
export class WrapperViewComponent {
  @Input() public loader!: boolean;
}
