import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ShopcartComponent } from './shopcart';
import { NoContentComponent } from './no-content.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopcart', component: ShopcartComponent },
  { path: '**', component: NoContentComponent },
];
