import { v4 as uuid } from 'uuid'

export default class ProductModel {
  id: string
  name: string
  price: number
  
  constructor({ name, price }: Omit<ProductModel, 'id'>) {
    this.id = uuid()
    this.name = name
    this.price = price
  }
}
