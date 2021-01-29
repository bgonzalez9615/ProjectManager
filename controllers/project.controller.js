const Project = require('../models/Project.model');
const { request } = require('express');

module.exports.getAllProjects = (req, res) => {
    Project.find()
        .then(allProjects => res.json(allProjects))
        .catch(err => res.json({ error: err}));
}

module.exports.createProject = (req, res) => {
    Project.create(req.body)
        .then(newProject => res.json({ project: newProject }))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteProject = (req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
}

// this will connect to routes to update info about one specific project
module.exports.updateProject = (req, res) => {
    Project.findByIdAndUpdate(req.params.projectId, req.body, {runValidators: true, new: true})
        .then((updatedProjectInfo) => { res.json(updatedProjectInfo) })
        //params => steps
}

module.exports.getOneProject = (req, res) => {
    Project.findOne({_id: req.params.projectId})
        .then((project) => res.json(project))
}

// module.exports = {
//     getAllProjects: (req, res) ... ,
//     createProject: (req, res) ...
// }