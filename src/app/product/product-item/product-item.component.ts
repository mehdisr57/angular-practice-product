import {Component, Input, OnInit} from '@angular/core';
import {Category, Product} from "../model";
import {BasketService} from "../../basket/service/basket.service";
import {ProductData} from "../../data/product-data";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  categories: Category[];

  constructor(public basket: BasketService) {
    this.categories = [];
  }

  ngOnInit(): void {
    if (!this.product) {
      throw new Error('No ID provided!');
    }

    let data = new ProductData();
    data.categories.forEach((value, key) => {
      if (value.productIds) {
        for (const productId of value.productIds) {
          if (productId == this.product.id) {
            this.categories.push(value);
          }
        }
      }
    });
  }

  onAdd(product: Product) {
    this.basket.addProduct(product);
  }

  onRemove(product: Product) {
    this.basket.removeProduct(product);
  }

}
