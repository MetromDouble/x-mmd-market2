import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ShopcartService {
  products: Product[] = [];

  addToShopcart(product: Product) {
    const previous = this.products.find(item => item.id === product.id);

    if (previous) {
      previous.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
  }
  removeFromShopcart(id: number) {
    this.products = this.products.filter(item => item.id !== id);
  }
  getCommonSumm() {
    console.log(this.products);
    return this.products.reduce((prev, curr) => curr.quantity * curr.price + prev, 0);
  }
  getCommonQuantity() {
    return this.products.reduce((prev, curr) => curr.quantity + prev, 0);
  }
}