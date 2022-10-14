const express = require('express');

const routes = express.Router();
const PersonController = require('./src/controllers/PersonController');
const PersonMiddleware = require('./src/middlewares/PersonMiddleware');

const ExtraFieldsController = require('./src/controllers/ExtraFieldsController');
const ExtraFieldsMiddleware = require('./src/middlewares/ExtraFieldsMiddleware');

const CategoryController = require('./src/controllers/CategoryController');
const CategoryMiddleware = require('./src/middlewares/CategoryMiddleware');

routes.get('/person', PersonController.index)
routes.post('/person', PersonController.store);
routes.put('/person/:id', PersonMiddleware.validateId, PersonController.update);
routes.delete('/person/:id', PersonMiddleware.validateId, PersonController.delete);

routes.get('/extraFields', ExtraFieldsController.index)
routes.post('/extraFields', ExtraFieldsController.store);
routes.put('/extraFields/:id',ExtraFieldsMiddleware.validateId, ExtraFieldsController.update);
routes.delete('/extraFields/:id', ExtraFieldsMiddleware.validateId, ExtraFieldsController.delete);

routes.get('/category', CategoryController.index)
routes.post('/category', CategoryController.store);
routes.put('/category/:id',CategoryMiddleware.validateId, CategoryController.update);
routes.delete('/category/:id',CategoryMiddleware.validateId, CategoryController.delete);


module.exports = routes