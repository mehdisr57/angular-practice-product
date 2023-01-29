import {Component} from '@angular/core';
import {BasketService} from "../service/basket.service";
import {Basket} from "../model";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  basket!: Basket;
  sum: number = 0;

  constructor(private service: BasketService) {
    this.extracted(this.service.get());
    this.service.subject.subscribe(value => {
      this.extracted(value);
    });
  }

  private extracted(value: Basket) {
    this.basket = value;
    this.sum = 0;
    for (const item of value.items) {
      this.sum += item.count * item.price;
    }
  }
}
