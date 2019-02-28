import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEmiter: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    // @ts-ignore
    return this.http.get('/api/products');
  }

  getProduct(id: number): Observable<Product> {
    // @ts-ignore
    return this.http.get('/api/product/' + id);
  }

  getProductComment(id: number): Observable<ProductComment[]> {
    // @ts-ignore
    return this.http.get('/api/product/' + id + '/comments');
  }

  getSearchProducts(params: ProductSearchParams) {
    console.log(params);
    const xx = this.encodeParams(params);
    console.log(xx);
    // @ts-ignore
    return this.http.get('/api/products', {search: this.encodeParams(params)});
  }

  getAllProductCategorys(): string[] {
    return ['电子商务', '计算机设备', '大数据', '艺术设计'];
  }

  private encodeParams(params: ProductSearchParams) {
    let result: URLSearchParams;
    result = Object.keys(params)
        .filter(key => params[key])
        .reduce((sum: URLSearchParams, key: string) => {
          sum.append(key, params[key]);
          return sum;
        }, new URLSearchParams());
    console.log(result);
    return result;
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

export class ProductSearchParams {
  constructor (
      public name: string,
      public price: number,
      public category: string
  ) {}
}
