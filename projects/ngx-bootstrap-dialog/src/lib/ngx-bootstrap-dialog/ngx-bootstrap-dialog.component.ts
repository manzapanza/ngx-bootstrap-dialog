import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogOptions } from './../ngx-bootstrap-dialog.config';

@Component({
  selector: 'ngx-ngx-bootstrap-dialog',
  templateUrl: './ngx-bootstrap-dialog.component.html',
  styleUrls: ['./ngx-bootstrap-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBootstrapDialogComponent implements OnInit {
  @Input() options: NgxBootstrapDialogOptions;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
