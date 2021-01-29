const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
        //keys : values
        projectName:  {
                type: String,
                minlength: [
                        3,
                        'The project name must be at least 3 characters.'
                ]
        },
        dueDate: {
                type: String,
                minlength: [
                        2,
                        'The due date is required.'
                ]
        },

}, { timestamps: true });

const Project = mongoose.model('Projects', ProjectSchema);

module.exports = Project;