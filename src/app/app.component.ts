import { Component } from '@angular/core';

import { NgxBootstrapDialogService } from './../../projects/ngx-bootstrap-dialog/src/lib/ngx-bootstrap-dialog.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  environment = environment;

  constructor(private dialog: NgxBootstrapDialogService) {}

  openDialogAlert() {
    this.dialog
      .alert({
        title: 'Dialog Alert Title',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet finibus mi eget mattis.',
      })
      .then(() => console.log('Confimed!'))
      .catch(() => console.log('Dismissed!'));
  }

  openDialogConfirm() {
    this.dialog
      .confirm({
        title: 'Dialog Confirm Title',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet finibus mi eget mattis.',
      })
      .then(() => console.log('Confimed!'))
      .catch(() => console.log('Dismissed!'));
  }
}
