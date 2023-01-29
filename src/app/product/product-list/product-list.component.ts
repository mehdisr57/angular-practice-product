import {Component} from '@angular/core';
import {Product} from "../model";
import {ProductData} from "../../data/product-data";
import {BasketService} from "../../basket/service/basket.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  data: ProductData;
  products: Product[] = [];

  constructor(public basket: BasketService) {
    this.data = new ProductData();
    this.products = this.data.getAll();
  }

  onAdd(product: Product) {
    this.basket.addProduct(product);
  }

  onRemove(product: Product) {
    this.basket.removeProduct(product);
  }
}
