import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
  NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
} from './../../projects/ngx-bootstrap-dialog/src/lib/ngx-bootstrap-dialog.config';
import { NgxBootstrapDialogModule } from './../../projects/ngx-bootstrap-dialog/src/lib/ngx-bootstrap-dialog.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBootstrapDialogModule],
  providers: [
    {
      provide: NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
      useValue: { confirmButtonClass: 'btn btn-danger' },
    },
    {
      provide: NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
      useValue: { confirmButtonText: 'CONFIRM' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
