//const db = require("./models");
const router = require("express").Router();
const Workout = require("../models/workout.js")


router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workouts", ({body}, res) => {
    workout.create(body)
     .then(dbWorkout => {
       res.json(dbWorkout);
     })
     .catch(err => {
       res.json(err);
     });
 });

    router.put("/api/workouts/:id", (req ,res) => {
        workout.findOneAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(dbworkout => {
        res.json(dbworkout);
        })
        .catch(err => {
        res.json(err);
        });
    });


  module.exports = router;
  
