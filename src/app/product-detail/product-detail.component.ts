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
  private productComments: ProductComment[];
  newRating = 5;
  newComment = '';
  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService
              ) { }

  ngOnInit() {
    const productId = this.routeInfo.snapshot.params['id'];
    console.log(productId);
    this.product = this.productService.getProduct(productId);
    this.productComments = this.productService.getProductComment(productId);
  }

  addNewComment() {
    this.productComments.unshift(new ProductComment(0, this.product.id, 'Nancy', new Date().toISOString(), this.newRating, this.newComment));
    this.newRating = 5;
    this.newComment = '';
    this.isCommentHidden = true;
    // 处理平均星级
    const total = this.productComments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = total / this.productComments.length;
  }

}
