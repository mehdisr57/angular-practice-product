import {Component} from '@angular/core';
import {Product} from "../model";
import {ActivatedRoute} from "@angular/router";
import {ProductData} from "../../data/product-data";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent {
  product!: Product;


  constructor(route: ActivatedRoute) {
    const data = new ProductData();
    let id = route.snapshot.paramMap.get('id');
    if (id) {
      let byId = data.getProductById(Number(id));
      if (byId) {
        this.product = byId;
      }
    }
  }
}
