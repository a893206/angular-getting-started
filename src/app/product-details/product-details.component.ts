import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.styl']
})
export class ProductDetailsComponent implements OnInit {
  product!: { price: number; name: string; description: string; };

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.product = products[+params.get('productId')];
    });
  }

}
