import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productName: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productName = this.routeInfo.snapshot.params['productName'];
  }

}
