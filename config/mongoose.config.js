const mongoose =  require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/Exam3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('connected'))
    .catch(err => console.log('error occurred', err));