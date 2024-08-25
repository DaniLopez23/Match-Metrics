const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  date: Date,
  localTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  localStats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matchStats",
  },
  awayStats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matchStats",
  },
});

matchSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Match", matchSchema);
