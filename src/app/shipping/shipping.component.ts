import { Component, OnInit } from '@angular/core';

import { Shipping } from '../class/shipping';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.styl']
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Promise<Array<Shipping>>;

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
