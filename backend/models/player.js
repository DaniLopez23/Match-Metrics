const mongoose = require("mongoose");

const posiblePositions = {
  "goalkeeper": "GK",
  "defender": "DEF",
  "midfielder": "MID",
  "forward": "FW"
}

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  position: {
    type: String,
    enum: Object.values(posiblePositions)
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Match'
    }
  ]
})

playerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Player", playerSchema);
