const router = require('express').Router();
var Set = require('./set.model');

// var User = require('../accounts/account.model');
// const { post } = require('../accounts/accounts.controller');

router.route('/').get((req, res) => {
  Set.find() // mongoose: gets list of all sets from mongodb atlas
    .then(sets => res.json(sets)) // find returns promise in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

// handle incoming http post reqs
router.route('/add').post((req, res) => {
  const name = req.body.setName;
  // const test = req.body.test;
  // const numTerms = Number(req.body.numTerms);
  // const color
  // const created = Date.parse(req.body.date);
  // const dateUpdated = Date.parse(req.body.date);

  const newSet = new Set({
    name,
    // test,
    // created,
  });

  // save to db with save()
  newSet.save()
    .then(() => res.json('Set added!')) // promise
    .catch(err => res.status(400).json('Error: ') + err);
});


// // Create
// function setCreate(req,res) {
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