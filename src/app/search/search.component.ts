import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories: string[];

  formModel = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [null, this.productPriceValidator],
    category: ['-1']
  })

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.categories = productService.getAllProductCategorys();
  }

  ngOnInit() {
  }

  onsubmit() {

    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.productService.searchEmiter.emit(this.formModel.value);
    }
  }

  productPriceValidator(control: FormControl): any {
   if (!control.value) {
     return null;
   }

   const price = parseInt(control.value);
   if (price < 0) {
     return {priceValidator: true};
   } else {
     return null;
   }
  }
}
