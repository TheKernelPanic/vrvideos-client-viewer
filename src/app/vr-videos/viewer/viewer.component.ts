import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  public iframeUrl!: unknown;
  @ViewChild('playerWeb') public playerWeb!: ElementRef;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domSanitizer: DomSanitizer
  ) {
  }

  public ngOnInit(): void {
    const videoUrl = decodeURIComponent(this.route.snapshot.paramMap.get('videoUrl') as string);
    const format = this.route.snapshot.paramMap.get('format') as string;
    this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`http://192.168.1.131:8003?video_url=${videoUrl}&format=${format}`);
  }

  public back(): void {
    this.router.navigate(['vr-videos/home']).then();
  }
}
