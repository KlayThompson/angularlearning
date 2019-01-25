import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>
  private imageUrl: string
  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1, '第一个商品', '这是第一个商品的详细描述，angular 实战测试看看效果', 3.8, 1.99, ['电子商务', '计算机设备']),
      new Product(2, '第二个商品', '这是第二个商品的详细描述，angular 实战测试看看效果', 5.0, 2.99, ['金融业', '计算机设备']),
      new Product(3, '第三个商品', '这是第三个商品的详细描述，angular 实战测试看看效果', 4.8, 3.99, ['电子商务', '动物科学']),
      new Product(4, '第四个商品', '这是第四个商品的详细描述，angular 实战测试看看效果', 2.8, 4.99, ['艺术设计', '计算机设备']),
      new Product(5, '第五个商品', '这是第五个商品的详细描述，angular 实战测试看看效果', 1.8, 5.99, ['电子商务', '美容美妆']),
      new Product(6, '第六个商品', '这是第六个商品的详细描述，angular 实战测试看看效果', 3.8, 6.99, ['大数据', '计算机设备'])
    ];

    this.imageUrl = 'http://placehold.it/320x150';
  }

}

export class Product {

  constructor(
      public id: number,
      public title: string,
      public desc: string,
      public rating: number,
      public price: number,
      public categories: Array<string>
  ) {}

}
