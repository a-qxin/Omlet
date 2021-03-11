const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({

  name: { type: String, unique: true, maxlength: 400 },
  test: { type: String, unique: true },
  // color: chosen from presets. map using number?
  numTerms: { type: Number },
  created: { type: Date, default: Date.now },
  updated: Date,

  // way to store cards?? 

  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});

/**
 * Validations
 */

setSchema.path('name').required(true, 'Set name cannot be blank');
setSchema.path('test').required(true, 'Set test cannot be empty');

/**
 * Methods
 */

// setSchema.methods = {
//   // save set
  // community features would go here
// };

// schema.virtual('isVerified').get(function () {
//     return !!(this.verified || this.passwordReset);
// });

// schema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         // remove these props when object is serialized
//         delete ret._id;
//         delete ret.passwordHash;
//     }
// });

schema.virtual('isExpired').get(function () {
  return Date.now() >= this.expires;
});

schema.virtual('isActive').get(function () {
  return !this.revoked && !this.isExpired;
});

module.exports = mongoose.model('Set', schema);