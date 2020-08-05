import { Inject, Injectable, Optional } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogAlertComponent } from './ngx-bootstrap-dialog-alert/ngx-bootstrap-dialog-alert.component';
import { NgxBootstrapDialogConfirmComponent } from './ngx-bootstrap-dialog-confirm/ngx-bootstrap-dialog-confirm.component';
import {
  NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
  NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
  NgxBootstrapDialogAlertDeafultOptions,
  NgxBootstrapDialogAlertOptions,
  NgxBootstrapDialogConfirmDefaultOptions,
  NgxBootstrapDialogConfirmOptions,
} from './ngx-bootstrap-dialog.config';

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
    private alertDefaultOptions: NgxBootstrapDialogAlertOptions,
    @Optional()
    @Inject(NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS)
    private confirmDefaultOptions: NgxBootstrapDialogConfirmOptions,
  ) {
    this.alertDefaultOptions = this.mergeOptions(
      this.alertDefaultOptions,
      new NgxBootstrapDialogAlertDeafultOptions(),
    );
    this.confirmDefaultOptions = this.mergeOptions(
      this.confirmDefaultOptions,
      new NgxBootstrapDialogConfirmDefaultOptions(),
    );
  }

  alert(options: NgxBootstrapDialogAlertOptions): Promise<any> {
    this.alertRef = this.dialog(
      NgxBootstrapDialogAlertComponent,
      options,
      this.alertDefaultOptions,
    );
    return this.alertRef.result;
  }

  confirm(options: NgxBootstrapDialogConfirmOptions): Promise<any> {
    this.confirmRef = this.dialog(
      NgxBootstrapDialogConfirmComponent,
      options,
      this.confirmDefaultOptions,
    );
    return this.confirmRef.result;
  }

  dialog(
    content: any,
    options:
      | NgxBootstrapDialogAlertOptions
      | NgxBootstrapDialogConfirmDefaultOptions,
    defaultOptions:
      | NgxBootstrapDialogAlertOptions
      | NgxBootstrapDialogConfirmDefaultOptions,
  ): NgbModalRef {
    options = this.mergeOptions(options, defaultOptions);
    const dialogRef = this.modal.open(content, options.ngbModalOptions);
    dialogRef.componentInstance.options = options;
    return dialogRef;
  }

  mergeOptions(
    options:
      | NgxBootstrapDialogAlertOptions
      | NgxBootstrapDialogConfirmDefaultOptions,
    defaultOptions:
      | NgxBootstrapDialogAlertOptions
      | NgxBootstrapDialogConfirmDefaultOptions,
  ) {
    return {
      ...defaultOptions,
      ...options,
    };
  }
}
