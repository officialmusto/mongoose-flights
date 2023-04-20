import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema(
  {
    seat: {
      type: String,
      required: true,
      match: /^[A-F][1-9][0-9]?$/
    }
  },
  {
    timestamps: true
  }
)

const Ticket = mongoose.model("Ticket", ticketSchema)

export { Ticket }