import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const route: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productDetail/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
