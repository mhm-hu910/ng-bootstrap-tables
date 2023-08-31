import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';

const routes: Routes = [
  { path: '',  component: Table1Component},
  { path: 'table1',  component: Table1Component},
  { path: 'table2',  component: Table2Component},
  { path: 'table3',  component: Table3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
