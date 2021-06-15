const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    workoutName: {
        type: String,
        required: true
    },
    exercises: [
        {
            title: {
                type: String,
                required: true
            },
            sets: {
                type: String
            },
            reps: {
                type: String
            },
            notes: {
                type: String
            }

        }
    ],
    date: {
        type: Date
    } 
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);