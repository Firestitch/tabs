import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'tab-b.component.html',
  styles: [
    `
    .list-scroll {
      width: 300px;
      height: 250px;
      overflow: scroll;
    }
    `
  ]
})
export class TabBComponent implements OnInit, OnDestroy {

  constructor() { }

  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
