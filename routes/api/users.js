const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password');;
        res.json(users);
        
    } catch (err) {
        res.status(500).status({ msg: err.message });
    }
});

// @route   POST api/users
// @desc    Create a user
// @access  Public
router.post('/', async (req, res) => {
    
    const { name, email, password } = req.body;

    let user = new User({
            name,
            email,
            password
    });

    try {

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        const newUser = await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), 
                { expiresIn: 360000}, 
                (err, token) => {
                    if(err) throw err;
                    res.json(token);
                });

    } catch (err) {
        res.status(400).status({ msg: err.message });
    }
});

// @route   DELETE api/users/:id
// @desc    Delete a user by id
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        await user.remove();

        res.json(user);
        
    } catch (err) {
        res.status(500).status({ msg: err.message });
    }
});


module.exports = router;