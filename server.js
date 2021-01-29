const express = require('express');
const cors = require('cors');

require('./config/mongoose.config');

const app = express(); //notice invoking the Express function
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //allows us to read data sent with the request
app.use(cors()); //allows other domains to make requests to us

const projectRoutes = require('./routes/project.routes');
projectRoutes(app);


app.listen(8000, () => console.log('hello, listening on 8000!'));