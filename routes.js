const express = require('express');

const routes = express.Router();
const PersonController = require('./src/controllers/PersonController');
const PersonMiddleware = require('./src/middlewares/PersonMiddleware');

const ExtraFieldsController = require('./src/controllers/ExtraFieldsController');
const ExtraFieldsMiddleware = require('./src/middlewares/ExtraFieldsMiddleware');

const CategoryController = require('./src/controllers/CategoryController');
const CategoryMiddleware = require('./src/middlewares/CategoryMiddleware');

const PositionsController = require('./src/controllers/PositionsController');
const PositionsMiddleware = require('./src/middlewares/PositionsMiddleware');

const GroupsController = require('./src/controllers/GroupsController')
const GroupsMiddleware = require('./src/middlewares/GroupsMiddleware')

const FinancialController = require('./src/controllers/FinancialController')
const FinancialMiddleware = require('./src/middlewares/FinancialMiddleware')

const GroupCategoryController = require('./src/controllers/GroupCategoryController')
const GroupCategoryMiddleware = require('./src/middlewares/GroupCategoryMiddleware')

const StudiesController = require('./src/controllers/StudiesController')
const StudiesMiddleware = require('./src/middlewares/StudiesMiddleware')

const StudiesCategoryController = require('./src/controllers/StudiesCategoryController')
const StudiesCategoryMiddleware = require('./src/middlewares/StudiesCategoryMiddleware')

routes.get('/person', PersonController.index)
routes.post('/person', PersonController.store);
routes.put('/person/:id', PersonMiddleware.validateId, PersonController.update);
routes.delete('/person/:id', PersonMiddleware.validateId, PersonController.delete);

routes.get('/extraFields', ExtraFieldsController.index)
routes.post('/extraFields', ExtraFieldsController.store);
routes.put('/extraFields/:id', ExtraFieldsMiddleware.validateId, ExtraFieldsController.update);
routes.delete('/extraFields/:id', ExtraFieldsMiddleware.validateId, ExtraFieldsController.delete);

routes.get('/category', CategoryController.index)
routes.post('/category', CategoryController.store);
routes.put('/category/:id', CategoryMiddleware.validateId, CategoryController.update);
routes.delete('/category/:id', CategoryMiddleware.validateId, CategoryController.delete);

routes.get('/positions', PositionsController.index)
routes.post('/positions', PositionsController.store);
routes.put('/positions/:id', PositionsMiddleware.validateId, PositionsController.update);
routes.delete('/positions/:id', PositionsMiddleware.validateId, PositionsController.delete);

routes.get('/groups', GroupsController.index)
routes.post('/groups', GroupsController.store);
routes.put('/groups/:id', GroupsMiddleware.validateId, GroupsController.update);
routes.delete('/groups/:id', GroupsMiddleware.validateId, GroupsController.delete);

routes.get('/financial', FinancialController.index)
routes.post('/financial', FinancialController.store);
routes.put('/financial/:id', FinancialMiddleware.validateId, FinancialController.update);
routes.delete('/financial/:id', FinancialMiddleware.validateId, FinancialController.delete);

routes.get('/groupCategory', GroupCategoryController.index);
routes.post('/groupCategory', GroupCategoryController.store);
routes.put('/groupCategory/:id', GroupCategoryMiddleware.validateId, GroupCategoryController.update);
routes.delete('/groupCategory/:id', GroupCategoryMiddleware.validateId, GroupCategoryController.delete);

routes.get('/studies', StudiesController.index);
routes.post('/studies', StudiesController.store);
routes.put('/studies/:id', StudiesMiddleware.validateId, StudiesController.update);
routes.delete('/studies/:id', StudiesMiddleware.validateId, StudiesController.delete);

routes.get('/studiescategory', StudiesCategoryController.index);
routes.post('/studiescategory', StudiesCategoryController.store);
routes.put('/studiescategory/:id', StudiesCategoryMiddleware.validateId, StudiesCategoryController.update);
routes.delete('/studiescategory/:id', StudiesCategoryMiddleware.validateId, StudiesCategoryController.delete);

module.exports = routes