import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../products';
import {Product} from '../class/product';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.styl']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
