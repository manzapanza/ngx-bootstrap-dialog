import { InjectionToken } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export interface LoadingBarConfig {
  latencyThreshold?: number;
}

export interface NgxBootstrapDialogAlertOptions {
  title: string;
  message?: string;
  confirmButtonText?: string;
  confirmButtonClass?: string;
  showCloseButtons?: boolean;
  showFooterButtons?: boolean;
  ngbModalOptions?: NgbModalOptions;
}

export interface NgxBootstrapDialogConfirmOptions
  extends NgxBootstrapDialogAlertOptions {
  confirmButtonText?: string;
  cancelButtonText?: string;
  cancelButtonClass?: string;
}

export class NgxBootstrapDialogAlertDeafultOptions {
  title = '';
  message = '';
  confirmButtonText = 'Confirm';
  confirmButtonClass = 'btn btn-primary';
  showCloseButtons = false;
  showFooterButtons = true;
  showLoading = false;
  ngbModalOptions = null;
}

export class NgxBootstrapDialogConfirmDefaultOptions extends NgxBootstrapDialogAlertDeafultOptions {
  cancelButtonText = 'Cancel';
  cancelButtonClass = 'btn btn-secondary';
}

export const NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS = new InjectionToken<
  NgxBootstrapDialogAlertOptions
>('NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS');

export const NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS = new InjectionToken<
  NgxBootstrapDialogConfirmOptions
>('NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS');
