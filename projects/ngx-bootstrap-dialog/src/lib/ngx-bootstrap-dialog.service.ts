import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogAlertComponent } from './ngx-bootstrap-dialog-alert/ngx-bootstrap-dialog-alert.component';
import { NgxBootstrapDialogConfirmComponent } from './ngx-bootstrap-dialog-confirm/ngx-bootstrap-dialog-confirm.component';

export interface NgxBootstrapDialogAlertOptions {
  title: string;
  message?: string;
  confirmButtonText?: string;
  confirmButtonClass?: string;
  showButtons?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
}

export interface NgxBootstrapDialogConfirmOptions
  extends NgxBootstrapDialogAlertOptions {
  confirmButtonText?: string;
  cancelButtonText?: string;
  cancelButtonClass?: string;
}

export class NgxBootstrapDialogAlertDeafultOptions {
  confirmButtonText = 'Confirm';
  confirmButtonClass = 'btn btn-primary';
  showButtons = true;
  showLoading = false;
  size = 'md';
}

export class NgxBootstrapDialogConfirmDefaultOptions extends NgxBootstrapDialogAlertDeafultOptions {
  confirmButtonText = 'Confirm';
  cancelButtonText = 'Cancel';
  cancelButtonClass = 'btn btn-secondary';
}

@Injectable({
  providedIn: 'root',
})
export class NgxBootstrapDialogService {
  public alertRef: NgbModalRef;
  public confirmRef: NgbModalRef;

  constructor(private modal: NgbModal) {}

  alert(options: NgxBootstrapDialogAlertOptions): Promise<any> {
    this.alertRef = this.dialog(
      NgxBootstrapDialogAlertComponent,
      options,
      new NgxBootstrapDialogAlertDeafultOptions(),
    );
    return this.alertRef.result;
  }

  confirm(options: NgxBootstrapDialogConfirmOptions): Promise<any> {
    this.confirmRef = this.dialog(
      NgxBootstrapDialogConfirmComponent,
      options,
      new NgxBootstrapDialogConfirmDefaultOptions(),
    );
    return this.confirmRef.result;
  }

  dialog(
    content: any,
    options:
      | NgxBootstrapDialogAlertOptions
      | NgxBootstrapDialogConfirmDefaultOptions,
    defaultOptions:
      | NgxBootstrapDialogAlertDeafultOptions
      | NgxBootstrapDialogConfirmDefaultOptions,
  ): NgbModalRef {
    options = {
      ...defaultOptions,
      ...options,
    };

    const ngbModalOptions: NgbModalOptions = {
      size: options.size,
    };

    const dialogRef = this.modal.open(content, ngbModalOptions);
    dialogRef.componentInstance.options = options;
    return dialogRef;
  }
}
