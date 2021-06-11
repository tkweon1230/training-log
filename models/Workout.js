const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
            title: {
                type: String,
                required: true
            },
            set: {
                type: String
            },
            rep: {
                type: String
            },
            note: {
                type: String
            }

        }
    ],
    date: {
        type: Date
    } 
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);