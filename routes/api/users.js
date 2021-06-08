const express = require('express');
const User = require('../../models/User');
const router = express.Router();

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        
    } catch (err) {
        res.status(500).status({ msg: err.message });
    }
});

// @route   POST api/users
// @desc    create a user
// @access  Public
router.post('/', async (req, res) => {
    
    const { name, email } = req.body;

    let user = new User({
            name,
            email
    });

    try {
        
        const newUser = await user.save();
        res.json(newUser);

    } catch (err) {
        res.status(400).status({ msg: err.message });
    }
});

module.exports = router;