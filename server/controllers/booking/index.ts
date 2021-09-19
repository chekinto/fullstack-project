import { prisma } from '../../config'
import { capitalize } from '../../helpers'

export const createBooking = async (req: any, res: any) => {
  try {
    const { camper, startDate, endDate } = req.body
    const formattedStartDate = new Date(startDate)
    const formattedEndDate = new Date(endDate)

    console.log(`req.body`, req.body)

    await prisma.booking.create({
      data: {
        camper: camper,
        startDate: formattedStartDate.toISOString(),
        endDate: formattedEndDate.toISOString(),
        price: 500,
      }
    })

    res.status(201).send({
      status: 'OK',
      message: 'successfully created booking',
      confirmationMessage: `${capitalize(camper)} has been booked please check your email for more information`
    })

  } catch(error) {
    console.error(error)
  }
}