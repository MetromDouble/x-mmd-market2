import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Product, EMPTY_PRODUCT } from '../product';
import { ShopcartService } from '../shopcart.service';

@Component({
  selector: 'buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.css']
})
export class BuyModalComponent {
  @ViewChild('buyModal') buyModal: ModalDirective;

  test: number;
  private product: Product = EMPTY_PRODUCT;

  constructor(
    private shopcartService: ShopcartService,
  ) {}

  show(product: Product): void {
    this.product = Object.assign({}, product, { quantity: 1 });
    this.buyModal.show();
  }
  hide(): void {
    this.buyModal.hide();
  }
  addToShopcart() {
    this.shopcartService.addToShopcart(this.product);
    this.buyModal.hide();
  }
}
