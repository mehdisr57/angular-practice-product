import {Product} from "../product/model";

export interface Basket {
  id: number;
  items: BasketItem[];
  status: string;
}

export interface BasketItem {
  product: Product;
  price: number;
  count: number;
}
