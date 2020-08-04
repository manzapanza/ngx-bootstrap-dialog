import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogAlertComponent } from './ngx-bootstrap-dialog-alert/ngx-bootstrap-dialog-alert.component';
import { NgxBootstrapDialogConfirmComponent } from './ngx-bootstrap-dialog-confirm/ngx-bootstrap-dialog-confirm.component';
import { NgxBootstrapDialogService } from './ngx-bootstrap-dialog.service';

@NgModule({
  imports: [CommonModule, NgbModalModule],
  declarations: [
    NgxBootstrapDialogAlertComponent,
    NgxBootstrapDialogConfirmComponent,
  ],
  providers: [NgxBootstrapDialogService],
  entryComponents: [
    NgxBootstrapDialogAlertComponent,
    NgxBootstrapDialogConfirmComponent,
  ],
})
export class NgxBootstrapDialogModule {}
