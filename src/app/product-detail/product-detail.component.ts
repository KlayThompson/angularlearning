import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Product, ProductComment, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private productCommnets: ProductComment[];
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService
              ) { }

  ngOnInit() {
    const productId = this.routeInfo.snapshot.params['id'];
    console.log(productId);
    this.product = this.productService.getProduct(productId);
    this.productCommnets = this.productService.getProductComment(productId);
  }

}
