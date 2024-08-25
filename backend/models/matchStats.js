const mongoose = require("mongoose");

const matchStatsSchema = new mongoose.Schema({
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  shots: Number,
  shotsOnTarget: Number,
  fouls: Number,
  foulsSuffered: Number,
  interceptions: Number,
  tackles: Number,
  corners: Number,
  offsides: Number,
});

matchStatsSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

module.exports = mongoose.model("MatchStats", matchStatsSchema);