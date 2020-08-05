import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogConfirmOptions } from './../ngx-bootstrap-dialog.config';

@Component({
  selector: 'ngx-ngx-bootstrap-dialog-confirm',
  templateUrl: './ngx-bootstrap-dialog-confirm.component.html',
  styleUrls: ['./ngx-bootstrap-dialog-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBootstrapDialogConfirmComponent implements OnInit {
  @Input() options: NgxBootstrapDialogConfirmOptions;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
