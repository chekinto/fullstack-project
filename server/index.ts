import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import { router as bookingRoute } from './routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

// Booking route
app.use('/booking', bookingRoute)

app.get('/', (req, res) => {
  res.status(200).send({
    status: 'OK', 
    length: 1
  })
})

app.listen(PORT, () => {
  console.log(`Serving on http:localhost:${PORT}`)
})