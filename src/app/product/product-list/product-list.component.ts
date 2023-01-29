import {Component} from '@angular/core';
import {Product} from "../model";
import {ProductData} from "../../data/product-data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  data: ProductData;
  products: Product[] = [];

  constructor() {
    this.data = new ProductData();
    this.products = this.data.getAll();
  }
}
