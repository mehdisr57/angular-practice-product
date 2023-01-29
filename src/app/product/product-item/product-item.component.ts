import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;

  ngOnInit(): void {
    if (!this.product) {
      throw new Error('No ID provided!');
    }
  }


}
