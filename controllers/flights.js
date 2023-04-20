import { Flight } from '../models/flight.js'

//ON NOTION DOC, HAVE TO DO THE FOLLOING TO FINISH PART 1:
/* 
-NEED TO FINISH CREATING DISPLAY THAT ALIGNS WITH THE DETAILS
-HAVE IMPLEMENTED 'ADD FLIGHT' IMPLEMENTATION
-HAVE IMPLEMENTED NAV BAR NAVIGATION
-ADD DELETE IMPLEMENTATION
-CREATE AN EDIT VIEW WITHIN SHOW VIEW (localhost:3000/flights/flightId/edit)
*/

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.movieId)
    .populate('airline')
    .populate('airport')
    .populate('flightNo')
    .populate('departs')
    .then(flight => {
      console.log(flight)
      res.render('flights/show', {
        title: 'Flight',
        flight: flight,
      })
    })
}
export {
  index,
  newFlight as new,
  create,
  show,
}