const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({

    // connect to be part of set??

    term: { type: String, unique: true, required: true },
    definition: { type: String, unique: true, required: true },
    // num sub cards - numCards: { type: Number },
    // user: { type: Schema.ObjectId, ref: 'User' }

    created: { type: Date, default: Date.now },
    // updated: Date,

    // starred: Boolean

});

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

module.exports = mongoose.model('Card', schema);