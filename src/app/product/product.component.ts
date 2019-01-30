import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imageUrl: string
  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.products = this.productService.getProducts();

    this.imageUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548844662504&di=a9770e2cdeeb045bf986dea403275cfd&imgtype=0&src=http%3A%2F%2Fstatic.bbs.nubia.cn%2Fforum%2F201512%2F01%2F171718xxz6jt4y4jv76y6j.jpg';
  }

}


