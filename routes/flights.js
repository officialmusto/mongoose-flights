import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

//GET METHODS:
// GET localhost:3000/flights/
router.get('/', flightsCtrl.index)

//GET localhost:3000/flights/new/
router.get('/new', flightsCtrl.new)

// GET localhost:3000/flights/:flightsId
router.get('/:flightId', flightsCtrl.show)

// GET localhost:3000/flights/:flightsId/edit
router.get('/:flightId/edit', flightsCtrl.edit)

//POST METHODS:
// POST localhost:3000/flights
router.post('/', flightsCtrl.create)

//POST localhost:3000/:flightId/
router.delete('/:flightId', flightsCtrl.delete)

// PUT localhost:3000/flights/:flightId
router.put('/:flightId', flightsCtrl.update)

//PUT localhost:3000/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.addTicket)

//DELETE localhost:3000/:flightId/tickets
router.delete('/:flightId/tickets/:ticketId', flightsCtrl.deleteTicket)

router.post('/:flightId/meals', flightsCtrl.addToMeals)

export { router }
