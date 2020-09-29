import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PDFComponent } from './pdf/pdf.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { PdfJsViewerModule } from 'ng2-pdfjs-viewer'; // <-- Import PdfJsViewerModule module
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    PDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule
    // PdfViewerModule // <- Add PdfViewerModule to imports
    // PdfJsViewerModule // <-- Add to declarations

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
