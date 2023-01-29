import {Product} from "../product/model";

export class ProductData {

  products: Product[] = [];

  constructor() {
    this.products = [
      {id: 1, name: "Telephone", price: 20},
      {id: 2, name: "Monitor", price: 210},
      {id: 3, name: "Calendar", price: 10},
      {id: 5, name: "Jar", price: 10},
      {id: 6, name: "Cactus", price: 5},
      {id: 7, name: "Case", price: 542},
      {id: 7, name: "Mobile", price: 95}
    ]
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | null {
    let filter = this.products.filter(value => value.id == id);
    if (filter.length > 1) {
      throw new Error('Invalid Data, more than one record found for id:' + id);
    }

    if (filter.length == 0) {
      return null;
    }
    return filter[0];
  }

  getByName(name: string): Product[] {
    return this.products.filter(value => value.name == name);
  }
}
