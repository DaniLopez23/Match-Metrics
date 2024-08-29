const mongoose = require("mongoose");



const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  position: String,
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
