import {Category, Product} from "../product/model";

export class ProductData {

  private readonly _products: Map<number, Product>;
  private readonly _categories: Map<number, Category>;

  constructor() {
    this._products = new Map<number, Product>();
    this._products.set(1, {id: 1, name: "Telephone", price: 20});
    this._products.set(2, {id: 2, name: "Monitor", price: 210});
    this._products.set(3, {id: 3, name: "Calendar", price: 10});
    this._products.set(4, {id: 4, name: "Jar", price: 10});
    this._products.set(5, {id: 5, name: "Cactus", price: 5});
    this._products.set(6, {id: 6, name: "Case", price: 542});
    this._products.set(7, {id: 7, name: "Mobile", price: 95});

    this._categories = new Map<number, Category>();

    this._categories.set(1, {id: 1, name: "Computer", productIds: [2, 6]});
    this._categories.set(2, {id: 2, name: "Home", productIds: [1, 4, 3]});
    this._categories.set(3, {id: 3, name: "Flower", productIds: [5]});
  }


  get products(): Map<number, Product> {
    return this._products;
  }

  get categories(): Map<number, Category> {
    return this._categories;
  }

  getProductById(id: number): Product | undefined {
    return this._products.get(id);
  }
}
