import {Component, Input, OnInit} from '@angular/core';
import {VrVideo} from "../../domain/models";

@Component({
  selector: 'app-widgets-vr-video-card',
  templateUrl: './vr-video-card.component.html',
  styleUrls: ['./vr-video-card.component.scss']
})
export class VrVideoCardComponent implements OnInit {

  @Input() public vrVideo!: VrVideo;

  public constructor() { }

  public ngOnInit(): void {

  }

  public view(): void {
    console.log('View video', this.vrVideo.uuid);
  }
}
