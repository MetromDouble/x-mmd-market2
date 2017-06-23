import { Component } from '@angular/core';

import { ShopcartService } from './shopcart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phone Market';

  constructor(
    private shopcartService: ShopcartService,
  ) {}

  getSumm() {
    return this.shopcartService.getCommonSumm();
  }
  getQuantity() {
    return this.shopcartService.getCommonQuantity();
  }
}
