const mongoose = require("mongoose")

const rolSchema = new mongoose.Schema(
  {
    rol: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model("Roles", rolSchema)
