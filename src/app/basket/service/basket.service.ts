import {Injectable} from '@angular/core';
import {Basket, BasketItem} from "../model";
import {Product} from "../../product/model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private KEY = "BASKET_KEY";
  private readonly basket: Basket;
  private _subject: Subject<Basket> = new Subject<Basket>();

  constructor() {
    let session = sessionStorage.getItem(this.KEY);
    if (!session || session.length < 2) {
      this.basket = {
        id: Date.now(),
        items: [],
        status: 'init'
      }
    } else {
      this.basket = JSON.parse(session);
    }
    this._subject.next(this.basket);
  }

  get subject(): Subject<Basket> {
    return this._subject;
  }

  private updateSession(): void {
    sessionStorage.setItem(this.KEY, JSON.stringify(this.get()));
    this._subject.next(this.basket);
  }

  get(): Basket {
    return this.basket;
  }

  addItem(item: BasketItem): void {
    this.get().items.push(item);
    this.updateSession();
  }

  addProduct(product: Product): void {
    let filter = this.basket.items.filter(p => {
      return p.product.id == product.id
    });

    if (!filter || filter.length == 0) {
      this.basket.items.push({
        product: product,
        price: product.price,
        count: 1
      })
    } else if (filter.length == 1) {
      filter[0].count += 1;
    } else {
      console.warn("more than one of one product in basket!")
    }

    this.updateSession();
  }

  countOfProduct(product: Product): number {
    let filter = this.basket.items.filter(p => {
      return p.product.id == product.id
    });
    return filter.length;
  }

  removeProduct(product: Product): void {
    for (let i = 0; i < this.basket.items.length; i++) {
      const item = this.basket.items[i];
      if (item.product && item.product.id == product.id) {
        item.count -= 1;
        if (item.count < 1) {
          this.basket.items.splice(i, 1);
        }
      }
    }

    this.updateSession();
  }

  remove(item: BasketItem): void {
    let session = sessionStorage.getItem("basket");

    let basket: Basket;
    if (!session || session.length < 2) {
      basket = {
        id: Date.now(),
        items: [],
        status: 'init'
      }
    } else {
      basket = JSON.parse(session);
    }

    basket.items.push(item);
    this.updateSession();
  }
}
