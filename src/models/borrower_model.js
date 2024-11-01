const mongoose = require("mongoose")
const Schema = mongoose.Schema

const borrowerSchema = new Schema({
    name: { type: String, maxlength: 255, required: true },
    joined_at: { type: Date, required: true }
}, { timestamps: true })

const BorrowerModel = mongoose.model("Borrower", borrowerSchema)
module.exports = BorrowerModel