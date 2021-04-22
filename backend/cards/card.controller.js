// const router = require('../accounts/accounts.controller');
const router = require('express').Router();
var Card = require('./card.model');
// var User = require('../accounts/account.model')

// router.route('/').get((req, res) => {
//   Card.find()
//     .then(cards => res.json(cards))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const cardname = req.body.cardname;
//   const newCard = new Card({cardname});
// })

// // Create
// function cardCreate(req,res) {
//   var set = new Set(req.body);
//   set.save(function(err){
//     res.redirect("/sets")
//   });
// }

// // Show/Populate
// function setShow(req,res) {
//   var id = req.params.id;

//   // User.find({}, function(err, users){

//   //   Set.findById({_id: id})
//   //     .populate('_author')
//   //     .populate('comments._author')
//   //     .exec(function(err, post){
//   //       if (err) res.json({message: 'There is not a post with that id.'});
//   //       res.render("posts/show", { 
//   //         set: set,
//   //         users: users
//   //       });
//   //     });
//   // })
// }

// // Update
// function setUpdate(req, res){
//   var id = req.params.id;

//   Set.findById({_id: id}, function(err, set) {
//     if (err) res.json({message: 'There is no set with that id'})

//     set.save(function(err) {
//       if (err) res.json({
//         message: "There seems to be an error in updating your set"
//       });

//       res.json({message: 'Set successfully updated', set: set});
//     });
//   });
// }

// // Delete/Remove
// function setDestroy(req, res){
//   var id = req.params.id;
//   Set.remove({_id: id}, function(err) {
//     if (err) res.json({message: 'There is no set with that id'})
//     res.json({message: 'Set has been successfully deleted'});
//   });
// }
module.exports = router;