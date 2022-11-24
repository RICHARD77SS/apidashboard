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

const MeetingsController = require('./src/controllers/MeetingsController')
const MeetingsMiddleware = require('./src/middlewares/MeetingsMiddleware')

const SchoolsController = require('./src/controllers/SchoolsController')
const SchoolsMiddleware = require('./src/middlewares/SchoolsMiddleware')

const ClaassController = require('./src/controllers/ClaassController')
const ClaassMiddleware = require('./src/middlewares/ClaassMiddleware')

const SubjectsController = require('./src/controllers/SubjectsController')
const SubjectsMiddleware = require('./src/middlewares/SubjectsMiddleware')

const ClassroomController = require('./src/controllers/ClassRoomController')
const ClassroomMiddleware = require('./src/middlewares/ClassRoomMiddleware')


const OrientationController = require('./src/controllers/OrientationController')
const OrientationMiddleware = require('./src/middlewares/OrientationMiddleware')

const UploadController = require('./src/controllers/UploadController')
const multerConfig = require('./src/config/multer')
const multer = require('multer');

routes.post('/upload', multer(multerConfig).single('file'), UploadController.index)



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

routes.get('/meetings', MeetingsController.index);
routes.post('/meetings', MeetingsController.store);
routes.put('/meetings/:id', MeetingsMiddleware.validateId, MeetingsController.update);
routes.delete('/meetings/:id', MeetingsMiddleware.validateId, MeetingsController.delete);

routes.get('/schools', SchoolsController.index);
routes.post('/schools', SchoolsController.store);
routes.put('/schools/:id', SchoolsMiddleware.validateId, SchoolsController.update);
routes.delete('/schools/:id', SchoolsMiddleware.validateId, SchoolsController.delete);

routes.get('/claass', ClaassController.index);
routes.post('/claass', ClaassController.store);
routes.put('/claass/:id', ClaassMiddleware.validateId, ClaassController.update);
routes.delete('/claass/:id', ClaassMiddleware.validateId, ClaassController.delete);

routes.get('/subjects', SubjectsController.index);
routes.post('/subjects', SubjectsController.store);
routes.put('/subjects/:id', SubjectsMiddleware.validateId, SubjectsController.update);
routes.delete('/subjects/:id', SubjectsMiddleware.validateId, SubjectsController.delete);

routes.get('/classroom', ClassroomController.index);
routes.post('/classroom', ClassroomController.store);
routes.put('/classroom/:id', ClassroomMiddleware.validateId, ClassroomController.update);
routes.delete('/classroom/:id', ClassroomMiddleware.validateId, ClassroomController.delete);


routes.get('/orientation', OrientationController.index);
routes.post('/orientation', OrientationController.store);
routes.put('/orientation/:id', OrientationMiddleware.validateId, OrientationController.update);
routes.delete('/orientation/:id', OrientationMiddleware.validateId, OrientationController.delete)
module.exports = routes