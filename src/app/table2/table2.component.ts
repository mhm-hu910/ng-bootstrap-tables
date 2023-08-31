import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableService } from '../table.service';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})

export class Table2Component implements OnInit{
  customers!: Customer[];

  selectedCustomers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  //@ViewChild('dt') dt!: ElementRef;

  applyFilterGlobal($event: any, stringVal: any, dt: Table) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  displayUser(customer: any) {
    console.log(customer);
  }

  displaySelectedUsers(){
    console.table(this.selectedCustomers);
  }
  

  constructor(public tableServ: TableService, private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersXLarge().then((customers) => {
          this.customers = customers;
          this.loading = false;

          this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      });
    

      this.representatives = [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
          { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
      ];

      this.statuses = [
          { label: 'Unqualified', value: 'unqualified' },
          { label: 'Qualified', value: 'qualified' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' }
      ];
  }
}
