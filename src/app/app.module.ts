import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ProductListComponent } from './product-list';
import { ShopcartComponent } from './shopcart';
import { NoContentComponent } from './no-content.component';
import { BuyModalComponent } from './buy-modal';
import { ProductsService } from './products.service';
import { ShopcartService } from './shopcart.service';
import { CostFormatPipe } from './cost-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ShopcartComponent,
    NoContentComponent,
    BuyModalComponent,
    CostFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    ProductsService,
    ShopcartService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
