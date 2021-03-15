export class Product {
  price: number;
  name: string;
  description: string;

  constructor(price: number, name: string, description: string) {
    this.price = price;
    this.name = name;
    this.description = description;
  }
}
