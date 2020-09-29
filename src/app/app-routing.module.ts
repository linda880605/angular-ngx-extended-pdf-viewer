import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PDFComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', component: PDFComponent },
  { path: 'pdf', component: PDFComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
