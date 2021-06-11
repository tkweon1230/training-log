const express = require('express');
const router = express.Router();
const Workout = require('../../models/Workout');
const User = require('../../models/User');

// @route   GET api/workouts
// @desc    Get all workouts
// @access  Public

router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});

// @route   POST api/workouts
// @desc    Create a workout
// @access  Private
// use auth later

router.post('/', async (req, res) => {

    const { name, date } = req.body;

    try {

        const workoutFields = {};
        workoutFields.user = req.user;
        workoutFields.name = name;
        workoutFields.date = date;

        let newWorkout = new Workout(workoutFields);

        await newWorkout.save();

        res.json(newWorkout);

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});

// @route   DELETE api/workouts/:id
// @desc    Delete a workout
// @access  Private
// use auth later

router.delete('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        
        await workout.remove();

        res.json(workout)

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});




module.exports = router;