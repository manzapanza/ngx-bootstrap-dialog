import {
  NgxBootstrapDialogAlertDeafultOptions,
  NgxBootstrapDialogConfirmDefaultOptions,
  NgxBootstrapDialogOptions,
} from './ngx-bootstrap-dialog.config';

export const alertOptions: NgxBootstrapDialogOptions = {
  title: 'Title',
  message: 'Message',
};

export const defaultAlertOptions = new NgxBootstrapDialogAlertDeafultOptions();

export const mergedAlertOptions = {
  ...defaultAlertOptions,
  ...alertOptions,
};

export const confirmOptions: NgxBootstrapDialogOptions = {
  title: 'Title',
  message: 'Message',
};

export const defaultConfirmOptions = new NgxBootstrapDialogConfirmDefaultOptions();

export const mergedConfirmOptions = {
  ...defaultConfirmOptions,
  ...confirmOptions,
};

export const globalDefaultAlertOptions: Partial<NgxBootstrapDialogOptions> = {
  confirmButtonClass: 'btn btn-danger',
};

export const mergedGlobalDefaultAlertOptions = {
  ...defaultAlertOptions,
  ...globalDefaultAlertOptions,
};

export const globalDefaultConfirmOptions: Partial<NgxBootstrapDialogOptions> = {
  confirmButtonLabel: 'CONFIRM',
};

export const mergedGlobalDefaultConfirmOptions = {
  ...defaultConfirmOptions,
  ...globalDefaultConfirmOptions,
};
