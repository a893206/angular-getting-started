import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../class/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.styl']
})
export class CartComponent implements OnInit {
  items: Array<Product> = [];

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
