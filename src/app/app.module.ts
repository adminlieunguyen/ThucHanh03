import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { SearchComponent } from './bai2/search/search.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    SearchComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    AccordionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
