const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
//Connect to Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.use(cors());

//Define Routes
app.use('/api/employees', require('./routes/api/employees'));

console.log(process.env.NODE_ENV);
const PORT = process.env.PORT || 5000;

console.log(PORT);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
