import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import {Product} from '../class/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.styl']
})
export class CartComponent implements OnInit {
  items: Array<Product> = [];
  checkoutForm;

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: {name: string, address: string}): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
