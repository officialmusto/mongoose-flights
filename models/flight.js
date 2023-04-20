import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United', 'Emirates', 'Delta']},
  airport: {type: String, enum: ['AUS', 'DFW', 'LAX', 'SAN', 'DEN', 'WAS', 'CLE', 'HUS'], default: 'DEN'},
  flightNo: {type: Number, required: true, min: 10, max: 9999},
  departs: {
    type: Date,
    format: "DD/MM/YYYY",
    default: function() {
      const now = new Date()
      const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
      return oneYearFromNow.getFullYear()
    },
  },
}, {
  timestamps: true
})


const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}