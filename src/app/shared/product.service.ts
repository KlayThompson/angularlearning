import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    new Product(1, '第一个商品', '这是第一个商品的详细描述，angular 实战测试看看效果', 3.8, 1.99, ['电子商务', '计算机设备']),
    new Product(2, '第二个商品', '这是第二个商品的详细描述，angular 实战测试看看效果', 5.0, 2.99, ['金融业', '计算机设备']),
    new Product(3, '第三个商品', '这是第三个商品的详细描述，angular 实战测试看看效果', 4.8, 3.99, ['电子商务', '动物科学']),
    new Product(4, '第四个商品', '这是第四个商品的详细描述，angular 实战测试看看效果', 2.8, 4.99, ['艺术设计', '计算机设备']),
    new Product(5, '第五个商品', '这是第五个商品的详细描述，angular 实战测试看看效果', 1.8, 5.99, ['电子商务', '美容美妆']),
    new Product(6, '第六个商品', '这是第六个商品的详细描述，angular 实战测试看看效果', 3.8, 6.99, ['大数据', '计算机设备'])
  ];

  private productComments = [
      new ProductComment(123, 1, '张三', '2019-01-19', 3.8, '还不错哦性价比很高呢'),
    new ProductComment(124, 1, 'Lay', '2019-01-12', 1.8, '还不错哦性价比很高呢'),
    new ProductComment(125, 1, 'Brian', '2019-01-11', 2.8, '还不错哦性价比很高呢'),
    new ProductComment(126, 2, 'Alex', '2019-01-09', 4.8, '还不错哦性价比很高呢'),
    new ProductComment(127, 2, 'Alice', '2019-01-13', 3.8, '还不错哦性价比很高呢'),
    new ProductComment(128, 3, 'Lucy', '2019-01-14', 5, '还不错哦性价比很高呢'),
    new ProductComment(129, 3, 'Jack', '2019-01-16', 2.8, '还不错哦性价比很高呢')
  ];

  constructor() { }
  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    console.log(this.products[0])
    return this.products.find((product) => product.id == id);
  }

  getProductComment(id: number): ProductComment[] {
    return this.productComments.filter((productCommnet: ProductComment) => productCommnet.productId == id);
  }

  getAllProductCategorys(): string[] {
    return ['电子商务', '计算机设备', '大数据', '艺术设计'];
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

export class ProductComment {
  constructor (
      public id: number,
      public productId: number,
      public user: string,
      public time: string,
      public rating: number,
      public content: string
  ) {}
}
