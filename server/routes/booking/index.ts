import express from 'express'
import { createBooking } from '../../controllers/booking'

export const router = express.Router()

router.post('/', createBooking)