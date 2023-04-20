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

// GET localhost:3000/movies/:movieId/edit
router.get('/:flightId/edit', flightsCtrl.edit)

// PUT localhost:3000/flights/:flightId
router.put('/flights/:flightId', flightsCtrl.update)

export { router }
