const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({

  // connect to be part of set??
  // username: { type: String, required: true },
  set: { type: String, required: true },
  term: { type: String, unique: true, required: true },
  definition: { type: String, unique: true, required: true },
  // num sub cards - numCards: { type: Number },
  // user: { type: Schema.ObjectId, ref: 'User' }

  created: { type: Date, default: Date.now },
  // updated: Date,

  // starred: Boolean

});

module.exports = mongoose.model('Card', cardSchema);