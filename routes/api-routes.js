//const db = require("./models");
const router = require("express").Router();
const Workout = require("../models/workout.js")


router.get("/api/workouts", (req, res) => {
   console.log("inside get route")
    Workout.find()
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("get route response "+ JSON.stringfy(res));
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
     .then(dbWorkout => {
       console.log("in post route")
       res.json(dbWorkout);
     })
     .catch(err => {
       res.json(err);
     });
 });

    router.put("/api/workouts/:id", (req ,res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.json(err);
        });
    });

    router.get("/api/workouts/range", (req, res) => {
       Workout.find()
         .then(dbWorkout => {
           res.json(dbWorkout);
         })
         .catch(err => {
           res.status(400).json(err);
         });
     });
     
  module.exports = router;
  
