import { InjectionToken } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export interface NgxBootstrapDialogOptions {
  title: string;
  message?: string;

  confirmButtonLabel?: string;
  confirmButtonClass?: string;
  showConfirmButton?: boolean;

  cancelButtonLabel?: string;
  cancelButtonClass?: string;
  showCancelButton?: boolean;

  showCloseButton?: boolean;

  ngbModalOptions?: NgbModalOptions;
}

export class NgxBootstrapDialogAlertDeafultOptions
  implements NgxBootstrapDialogOptions {
  title = '';
  message = '';

  confirmButtonLabel = 'Confirm';
  confirmButtonClass = 'btn btn-primary';
  showConfirmButton = true;

  cancelButtonLabel = 'Cancel';
  cancelButtonClass = 'btn btn-secondary';
  showCancelButton = false;

  showCloseButtons = false;
  ngbModalOptions = null;
}

export class NgxBootstrapDialogConfirmDefaultOptions extends NgxBootstrapDialogAlertDeafultOptions {
  showCancelButton = true;
}

export const NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS = new InjectionToken<
  Partial<NgxBootstrapDialogOptions>
>('NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS');

export const NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS = new InjectionToken<
  Partial<NgxBootstrapDialogOptions>
>('NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS');
