const express = require('express');
const enrollmentController = require('../controller/enrollmentController');

const routes = express.Router();

// TODO: refactor to read route files and load them into an object that can be passed to routes
routes.post(
    '/new-enrollment',
    enrollmentController.new,
);
        
routes.get(
    '/enroll',
    enrollmentController.list,
);
        
module.exports = routes;
