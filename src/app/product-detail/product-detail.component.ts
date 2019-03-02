import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Product, ProductComment, ProductService} from '../shared/product.service';
import {WebsocketService} from '../shared/websocket.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productComments: ProductComment[];
  newRating = 5;
  newComment = '';
  isCommentHidden = true;
  isWatched = false;
  currentBid: number;
  subscription: Subscription;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService,
              private wsServerice: WebsocketService
              ) { }

  ngOnInit() {
    const productId = this.routeInfo.snapshot.params['id'];
    console.log(productId);
    this.productService.getProduct(productId).subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
        }
    );
    this.productService.getProductComment(productId).subscribe(
        comments => this.productComments = comments
    );
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

  watchProductPrice() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription =  this.wsServerice.createObservableSocket('ws://localhost:8085', this.product.id)
          .subscribe(
              products => {
                console.log(products);
                const product = products.find(p => p.productId === this.product.id);
                this.currentBid = product.bid;
              }
          );
    }
  }
}
