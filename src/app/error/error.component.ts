import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public code: string = '';

  public constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
  }
}
