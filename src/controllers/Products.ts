import { randomUUID } from 'crypto';
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import ProductModel from '../models/ProductModel';
import ProductRepository from '../repositories/ProductRepository';

const productRepository = new ProductRepository()

export default new class Products {
  listProducts (request: Request, response: Response) {
    const products = productRepository.all()
    return response.json(products)
  }

  addProduct (request: Request, response: Response) {
    const { name, price } = request.body

    if (!name || !price) {
      return response.status(400).json({ message: 'Ocorreu um erro.' })
    }
    const product = productRepository.create({ name, price })

    return response.status(201).json(product)
  }
}
