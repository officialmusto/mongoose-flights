import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

//GET METHODS:
// GET localhost:3000/flights/
router.get('/', flightsCtrl.index)

//GET localhost:3000/flights/new/
router.get('/new', flightsCtrl.new)

// GET localhost:3000/flights/:flightsId
router.get('/:movieId', flightsCtrl.show)


//POST METHODS:
// POST localhost:3000/movies
router.post('/', flightsCtrl.create)

//GET localhost:3000/flights/:flightId/
// router.get('/:flightId', flightsCtrl.show)

export { router }
