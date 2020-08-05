import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogAlertOptions } from './../ngx-bootstrap-dialog.config';

@Component({
  selector: 'ngx-bootstrap-dialog-alert',
  templateUrl: './ngx-bootstrap-dialog-alert.component.html',
  styleUrls: ['./ngx-bootstrap-dialog-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBootstrapDialogAlertComponent implements OnInit {
  @Input() options: NgxBootstrapDialogAlertOptions;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
