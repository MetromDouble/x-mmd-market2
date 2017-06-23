import { Component } from '@angular/core';
import { ShopcartService } from '../shopcart.service';

import { Product } from '../product';

@Component({
  selector: 'shopcart',
  templateUrl: './shopcart.component.html'
})
export class ShopcartComponent {
  constructor(
    private shopcartService: ShopcartService,
  ) {}

  products: Product[] = this.shopcartService.products;

  getSumm() {
    return this.shopcartService.getCommonSumm();
  }
  removeFromShopcart(id: number) {
    this.shopcartService.removeFromShopcart(id);
    this.products = this.shopcartService.products;
  }
}
