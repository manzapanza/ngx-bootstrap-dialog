import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogService } from './ngx-bootstrap-dialog.service';
import { NgxBootstrapDialogComponent } from './ngx-bootstrap-dialog/ngx-bootstrap-dialog.component';

export {
  NgxBootstrapDialogOptions,
  NgxBootstrapDialogAlertDeafultOptions,
  NgxBootstrapDialogConfirmDefaultOptions,
  NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
  NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
} from './ngx-bootstrap-dialog.config';

@NgModule({
  imports: [CommonModule, NgbModalModule],
  declarations: [NgxBootstrapDialogComponent],
  providers: [NgxBootstrapDialogService],
  entryComponents: [NgxBootstrapDialogComponent],
})
export class NgxBootstrapDialogModule {}
