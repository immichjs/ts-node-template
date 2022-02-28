import ProductModel from "../models/ProductModel";

interface IProduct {
  id: string;
  name: string;
  price: number;
}

export default class ProductRepository {
  private products: IProduct[]

  constructor() {
    this.products = []
  }

  public all(): IProduct[] {
    return this.products
  }

  public create({ name, price }: Omit<IProduct, 'id'>): IProduct {
    const product = new ProductModel({ name, price });
    this.products.push(product);
    
    return product;
  }
}
