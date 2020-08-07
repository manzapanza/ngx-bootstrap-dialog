import { Inject, Injectable, Optional } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import {
  NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
  NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
  NgxBootstrapDialogAlertDeafultOptions,
  NgxBootstrapDialogConfirmDefaultOptions,
  NgxBootstrapDialogOptions,
} from './ngx-bootstrap-dialog.config';
import { NgxBootstrapDialogComponent } from './ngx-bootstrap-dialog/ngx-bootstrap-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class NgxBootstrapDialogService {
  public alertRef: NgbModalRef;
  public confirmRef: NgbModalRef;

  constructor(
    private modal: NgbModal,
    @Optional()
    @Inject(NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS)
    private globalAlertDefaultOptions: NgxBootstrapDialogOptions,
    @Optional()
    @Inject(NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS)
    private globalConfirmDefaultOptions: NgxBootstrapDialogOptions,
  ) {}

  alert(options: NgxBootstrapDialogOptions): Promise<any> {
    this.alertRef = this.dialog(
      NgxBootstrapDialogComponent,
      new NgxBootstrapDialogAlertDeafultOptions(),
      this.globalAlertDefaultOptions,
      options,
    );
    return this.alertRef.result;
  }

  confirm(options: NgxBootstrapDialogOptions): Promise<any> {
    this.confirmRef = this.dialog(
      NgxBootstrapDialogComponent,
      new NgxBootstrapDialogConfirmDefaultOptions(),
      this.globalConfirmDefaultOptions,
      options,
    );
    return this.confirmRef.result;
  }

  dialog(
    content: any,
    defaultOptions: NgxBootstrapDialogOptions,
    globalOptions: NgxBootstrapDialogOptions,
    options: NgxBootstrapDialogOptions,
  ): NgbModalRef {
    options = {
      ...defaultOptions,
      ...globalOptions,
      ...options,
    };
    const dialogRef = this.modal.open(content, options.ngbModalOptions);
    dialogRef.componentInstance.options = options;
    return dialogRef;
  }
}
