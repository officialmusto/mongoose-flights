import { Flight } from '../models/flight.js'
import { Ticket } from '../models/ticket.js'
import { Meal } from '../models/meal.js'

function index(req, res) {
  Flight.find({})
    .then(flights => {
      console.log(flights)
      res.render('flights/index', {
        flights: flights,
        title: 'All Flights'
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('')
    })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
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
  Flight.findById(req.params.flightId)
  .populate('tickets')
    .then(flight => {
      console.log(flight)
      res.render('flights/show', {
        title: 'Flight',
        flight: flight,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
}

function edit(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/edit', {
      flight: flight,
      title: 'Edit Flight'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
  .then(flight => {
    res.redirect('/flights/index', {
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function addTicket(req, res) {
  const seat = req.body.seat
  Flight.findById(req.params.flightId)
    .then(flight => {
      const ticket = new Ticket({
        seat: seat,
      })
      flight.tickets.push(ticket)
      return flight.save()
    })
    .then(() => {
      res.redirect(`/flights/${req.params.flightId}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/flights/${req.params.flightId}`)
    })
}




export {
  index,
  newFlight as new,
  create,
  show,
  edit,
  update,
  addTicket,
  deleteFlight as delete,
}