const express = require('express');

const routes = express.Router();
const PersonController = require('./controllers/PersonController');
const PersonMiddleware = require('./middlewares/PersonMiddleware');


routes.get('/person', PersonController.index)
routes.post('/person', PersonController.store);
routes.put('/person/:id', PersonMiddleware.validateId, PersonController.update);
routes.delete('/person/:id', PersonMiddleware.validateId, PersonController.delete);


module.exports = routes