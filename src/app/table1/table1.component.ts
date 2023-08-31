import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { CustomerService } from 'src/service/customerservice';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component{

  customers: any[] = this.customerService.getData();

  displayCustomer(customer: any){
    console.log(customer);
  }

  constructor(public tableServ: TableService, public customerService: CustomerService){}
}
