const express = require('express');
const connectDB = require('./config/db');
const app = express();



// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

// Init Middleware
app.use(express.json({ extended: false }) );

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/workouts', require('./routes/api/workouts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));