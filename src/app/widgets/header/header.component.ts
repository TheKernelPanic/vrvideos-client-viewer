import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-widgets-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public constructor(
    @Inject('APP_VERSION') public appVersion: string
  ) { }
}
