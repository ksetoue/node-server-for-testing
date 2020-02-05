/**
 * @name enrollmentController
 * @description This module handles redirects from routes
 *
 */

const detectCharacterEncoding = require('detect-character-encoding');
const controller = {
    async new(req, res) {
        console.log('new request:', req.body.data.admission.student);
        const response = 'hello'
        res.json({
            response
        });
    },

    async list(req, res) {
        console.log('hello', req.body);
        const transactions = 'Hello there';

        return res.json({
            transactions,
        });
    },
};

module.exports = controller;
