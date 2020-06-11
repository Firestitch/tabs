import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'inputs-data',
  templateUrl: 'tab-a.component.html',
})
export class TabAComponent implements OnInit, OnDestroy {

  constructor(private _dialog: MatDialog) {

  }

  public ngOnInit() {

  }

  public ngOnDestroy() {
    console.log('destroy inputs page');
  }

  public openDialog() {
    this._dialog.open(DialogComponent);
  }
}
