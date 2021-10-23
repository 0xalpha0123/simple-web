import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToolPdfComponent } from './components/tool/pdf/tool-pdf.component';
import { ToolBase64Component } from './components/tool/base64/tool-base64.component';
import { ToolQbcodeComponent } from './components/tool/qbcode/tool-qbcode.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolPdfComponent,
    ToolBase64Component,
    ToolQbcodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
