import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxBootstrapDialogModule } from './../../projects/ngx-bootstrap-dialog/src/lib/ngx-bootstrap-dialog.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBootstrapDialogModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
