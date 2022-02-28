import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`[⚡]: Server has been started on: http://localhost:${PORT}`))
