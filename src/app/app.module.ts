import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FabricTypePipe } from './filter.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricTypePipe
  ],
  imports: [
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
