import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model";
import {BasketService} from "../../basket/service/basket.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;


  constructor(public basket: BasketService) {
  }

  ngOnInit(): void {
    if (!this.product) {
      throw new Error('No ID provided!');
    }
  }

  onAdd(product: Product) {
    this.basket.addProduct(product);
  }

  onRemove(product: Product) {
    this.basket.removeProduct(product);
  }

}
