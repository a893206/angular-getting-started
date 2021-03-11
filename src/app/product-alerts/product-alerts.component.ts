import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.styl']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: { price: number; name: string; description: string; };
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}