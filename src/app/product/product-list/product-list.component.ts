import {Component} from '@angular/core';
import {Category, Product} from "../model";
import {ProductData} from "../../data/product-data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  data: ProductData;
  products: Product[];
  selectedCategories: Set<Category> = new Set<Category>();

  constructor() {
    this.data = new ProductData();
    this.products = [];
    this.filterProduct();
  }

  onCategoryChanged(target: any, category: Category) {
    if (target && target.target && target.target.checked) {
      this.selectedCategories.add(category);
    } else {
      this.selectedCategories.delete(category);
    }
    this.filterProduct();
  }

  filterProduct(): void {
    this.products.splice(0);

    if (this.selectedCategories.size == 0) {
      this.data.products.forEach(value => {
        this.products.push(value);
      })
    } else {
      this.selectedCategories.forEach(value => {
        let c = this.data.categories.get(value.id);
        if (c && c.productIds) {
          for (const productId of c.productIds) {
            let p = this.data.products.get(productId);
            if (p) {
              this.products.push(p)
            }
          }
        }
      })
    }
  }
}
