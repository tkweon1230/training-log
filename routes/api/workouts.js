const express = require('express');
const router = express.Router();
const Workout = require('../../models/Workout');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route   GET api/workouts/me
// @desc    Get current users workout
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const workout = await Workout.find({ user: req.user.id }).populate('user', 
        'name');

        if(!workout) {
            return res.status(400).json({ msg: 'There is no workout for this user' });
        }
        
        res.json(workout);

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
    
});

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

router.post('/', auth, async (req, res) => {

    const { name, date } = req.body;

    try {

        const workoutFields = {};
        workoutFields.user = req.user.id;
        workoutFields.workoutName = name;
        workoutFields.date = date;

        let newWorkout = new Workout(workoutFields);

        await newWorkout.save();

        res.json(newWorkout);

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});

// @route   PUT api/workouts/:id
// @desc    Add exercises to a workout
// @access  Private

router.put('/:id', auth, async (req, res) => {

    const { title, sets, reps, notes } = req.body;
    const exercises = {
        title,
        sets,
        reps,
        notes
    };


    try {

        const workout = await Workout.findById(req.params.id);

        workout.exercises.unshift(exercises);

        await workout.save();

        res.json(workout);

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});

// @route   DELETE api/workouts/:workout_id/:exercise_id
// @desc    Delete an exercise
// @access  Private


router.delete('/:workout_id/:exercise_id', auth, async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.workout_id);
        // Get remove index
        const removeIndex = workout.exercises.map(item => item.id).indexOf(req.params.exercise_id);
        workout.exercises.splice(removeIndex, 1);


        await workout.save();

        res.json(workout);

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});

// @route   DELETE api/workouts/:id
// @desc    Delete a workout
// @access  Private


router.delete('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        
        await workout.remove();

        res.json(workout)

    } catch (err) {
        res.status(500).json({ msg: err.message });
        
    }
});




module.exports = router;