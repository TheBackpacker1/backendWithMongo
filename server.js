const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/prodRoute');



// Initialize the app

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/api', productRoutes);


// Connect to MongoDB


mongoose.Promise = global.Promise;

mongoose.connect( 'mongodb://localhost:27017/TestProject', 

).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

// Set up routes 

require('./app/routes/app.routes.js')(app);




app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});



// Start the server

let PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


