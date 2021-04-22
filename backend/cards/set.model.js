const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({

  // username: { type: String, required: true },
  name: { type: String, unique: true, maxlength: 400, required: true },
  // test: { type: String, unique: true },
  // color: chosen from presets. map using number?
  // numTerms: { type: Number },
  // created: { type: Date, default: Date.now },
  // updated: Date,

  // way to store cards?? (reference card in card.model.js)

  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});

/**
 * Validations
 */

setSchema.path('name').required(true, 'Set name cannot be blank');
// setSchema.path('test').required(true, 'Set test cannot be empty');

module.exports = mongoose.model('Set', setSchema);