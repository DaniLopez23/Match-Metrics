const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  city: String,
  category: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  matches : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
});

teamSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

module.exports = mongoose.model("Team", teamSchema);


