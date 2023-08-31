import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//PRIMENG imports
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from 'src/service/customerservice';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { Table3Component } from './table3/table3.component';

//Ngx Datatable import
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Angular Datatable import
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component,
    Table3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    ImageModule,
    CommonModule,
    NgxDatatableModule,
    DataTablesModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
