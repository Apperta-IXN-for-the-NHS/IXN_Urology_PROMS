const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/symptomModel', require('./Api/Route'));

const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));