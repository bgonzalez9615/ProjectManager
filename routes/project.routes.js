// const mongoose = require('mongoose');
// const control = require('../controllers/project.controller')();
// const path = require('path');
const routesCtl = require('../controllers/project.controller');

//theses are the routes used by axios, the "numbers"
module.exports = app => {
    app.get('/api/projects', routesCtl.getAllProjects);

    app.post('/api/projects', routesCtl.createProject);

    app.put('/api/projects/:projectId', routesCtl.updateProject);
    //.updateProject needs to match controller function (.projectName)
    //put updates info
    //2 arguments

    app.delete('/api/projects/:id', routesCtl.deleteProject);

    // app.get('/api/:projectId', routesCtl.getOneProject);
};