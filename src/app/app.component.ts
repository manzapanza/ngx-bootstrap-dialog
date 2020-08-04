import { Component } from '@angular/core';

import { NgxBootstrapDialogService } from './../../projects/ngx-bootstrap-dialog/src/lib/ngx-bootstrap-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-bootstrap-dialog-demo';
  constructor(private ngxBootstrapDialogService: NgxBootstrapDialogService) {}

  openDialogAlert() {
    this.ngxBootstrapDialogService
      .alert({
        title: 'Alert title',
        message: 'Message alert',
      })
      .then(() => {
        console.log('OK');
      })
      .catch(() => {
        console.log('Cancel');
      });
  }

  openDialogConfirm() {
    this.ngxBootstrapDialogService
      .confirm({
        title: 'Title',
        message: 'Message',
      })
      .then(() => {
        console.log('OK');
      })
      .catch(() => {
        console.log('Cancel');
      });
  }
}
