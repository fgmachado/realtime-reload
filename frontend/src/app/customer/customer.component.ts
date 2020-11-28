import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.findAllByTenant()
      .subscribe(customer => {
        console.log(customer);
        this.customers.push(customer);
      });
  }

}
