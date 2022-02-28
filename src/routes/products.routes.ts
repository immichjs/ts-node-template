import { Router } from 'express'
import Products from '../controllers/Products'

const router = Router()

router.get('/products', Products.listProducts)
router.post('/products', Products.addProduct)

export default router
