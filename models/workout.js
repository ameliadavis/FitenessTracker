const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workout = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
      exersizes: [
        {
         type: String, 
         name: String, 
         duration: Number, 
         weight: Number, 
         reps: Number,
         sets: Number,
         distance: Number 
        }
      ]
}); 

const workoutObject = mongoose.model("Workout", workout);

module.exports = workoutObject;