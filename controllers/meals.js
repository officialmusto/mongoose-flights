import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({}).then((meals) => {
    res.render("meals/new", {
      title: "Add Meal",
      meals,
    })
  })
}

function create(req, res) {
  Meal.create(req.body)
    .then(() => res.render("meals/new"))
    .catch((err) => {
      console.log(err)
      res.redirect("/meals/new")
    })
}

export {
  newMeal as new,
  create,
}