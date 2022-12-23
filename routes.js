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

const FinancialCategoryController = require('./src/controllers/FinancialCategoryController');
const FinancialCategoryMiddleware = require('./src/middlewares/FinancialCategoryMiddleware');

const AccountController = require('./src/controllers/AccountController');
const AccountMiddleware = require('./src/middlewares/AccountMiddleware');

const CustCenterController = require('./src/controllers/CustCenterController');
const CustCenterMiddleware = require('./src/middlewares/CustCenterMiddleware');

const ContactCategoryController = require('./src/controllers/ContactCategoryController');
const ContactCategoryMiddleware = require('./src/middlewares/ContactCategoryMiddleware');

const ContactController = require('./src/controllers/ContactController');
const ContactMiddleware = require('./src/middlewares/ContactMiddleware');

const TransferController = require('./src/controllers/TransferController');
const TransferMiddleware = require('./src/middlewares/TransferMiddleware');

const PatrimoniesController = require('./src/controllers/PatrimoniesController');
const PatrimoniesMiddleware = require('./src/middlewares/PatrimoniesMiddleware');

const CategoryPatrimoniesController = require('./src/controllers/CategoryPatrimoniesController');
const CategoryPatrimoniesMiddleware = require('./src/middlewares/CategoryPatrimoniesMiddleware');

const PlacesPatrimoniesController = require('./src/controllers/PlacesPatrimoniesController');
const PlacesPatrimoniesMiddleware = require('./src/middlewares/PlacesPatrimoniesMiddleware');

const ScheduleCalendarController = require('./src/controllers/ScheduleCalendarController');
const ScheduleCalendarMiddleware = require('./src/middlewares/ScheduleCalendarMiddleware');

const EventsController = require('./src/controllers/EventsController');
const EventsMiddleware = require('./src/middlewares/EventsMiddleware');

const CategoryScheduleController = require('./src/controllers/CategoryScheduleController');
const CategoryScheduleMiddleware = require('./src/middlewares/CategoryScheduleMiddleware');

const MuralsTextController = require('./src/controllers/MuralsTextController');
const MuralsTextMiddleware = require('./src/middlewares/MuralsTextMiddleware');

const MuralsImageController = require('./src/controllers/MuralsImageController');
const MuralsImageMiddleware = require('./src/middlewares/MuralsImageMiddleware');

const EventsRegisterController = require('./src/controllers/EventsRegisterController');
const EventsRegisterMiddleware = require('./src/middlewares/EventsRegisterMiddleware');

const CategoryAnotationsController = require('./src/controllers/CategoryAnotationsController');
const CategoryAnotationsMiddleware = require('./src/middlewares/CategoryAnotationsMiddleware');

const AnotationsController = require('./src/controllers/AnotationsController');
const AnotationsMiddleware = require('./src/middlewares/AnotationsMiddleware');

const PhotoAlbumController = require('./src/controllers/PhotoAlbumController');
const PhotoAlbumMiddleware = require('./src/middlewares/PhotoAlbumMiddleware');

const VideoAlbumController = require('./src/controllers/VideoAlbumController');
const VideoAlbumMiddleware = require('./src/middlewares/VideoAlbumMiddleware');

const FormsController = require('./src/controllers/FormsController');
const FormsMiddleware = require('./src/middlewares/FormsMiddleware');

const DocumentsController = require('./src/controllers/DocumentsController');
const DocumentsMiddleware = require('./src/middlewares/DocumentsMiddleware');

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

routes.get('/financialcategory', FinancialCategoryController.index)
routes.post('/financialcategory', FinancialCategoryController.store);
routes.put('/financialcategory/:id', FinancialCategoryMiddleware.validateId, FinancialCategoryController.update);
routes.delete('/financialcategory/:id', FinancialCategoryMiddleware.validateId, FinancialCategoryController.delete);

routes.get('/account', AccountController.index)
routes.post('/account', AccountController.store);
routes.put('/account/:id', AccountMiddleware.validateId, AccountController.update);
routes.delete('/account/:id', AccountMiddleware.validateId, AccountController.delete);

routes.get('/custcenter', CustCenterController.index)
routes.post('/custcenter', CustCenterController.store);
routes.put('/custcenter/:id', CustCenterMiddleware.validateId, CustCenterController.update);
routes.delete('/custcenter/:id', CustCenterMiddleware.validateId, CustCenterController.delete);

routes.get('/contactcategory', ContactCategoryController.index)
routes.post('/contactcategory', ContactCategoryController.store);
routes.put('/contactcategory/:id', ContactCategoryMiddleware.validateId, ContactCategoryController.update);
routes.delete('/contactcategory/:id', ContactCategoryMiddleware.validateId, ContactCategoryController.delete);

routes.get('/contact', ContactController.index)
routes.post('/contact', ContactController.store);
routes.put('/contact/:id', ContactMiddleware.validateId, ContactController.update);
routes.delete('/contact/:id', ContactMiddleware.validateId, ContactController.delete);

routes.get('/transfer', TransferController.index)
routes.post('/transfer', TransferController.store);
routes.put('/transfer/:id', TransferMiddleware.validateId, TransferController.update);
routes.delete('/transfer/:id', TransferMiddleware.validateId, TransferController.delete);

routes.get('/patrimonies', PatrimoniesController.index)
routes.post('/patrimonies', PatrimoniesController.store);
routes.put('/patrimonies/:id', PatrimoniesMiddleware.validateId, PatrimoniesController.update);
routes.delete('/patrimonies/:id', PatrimoniesMiddleware.validateId, PatrimoniesController.delete);

routes.get('/categorypatrimonies', CategoryPatrimoniesController.index)
routes.post('/categorypatrimonies', CategoryPatrimoniesController.store);
routes.put('/categorypatrimonies/:id', CategoryPatrimoniesMiddleware.validateId, CategoryPatrimoniesController.update);
routes.delete('/categorypatrimonies/:id', CategoryPatrimoniesMiddleware.validateId, CategoryPatrimoniesController.delete);

routes.get('/placespatrimonies', PlacesPatrimoniesController.index)
routes.post('/placespatrimonies', PlacesPatrimoniesController.store);
routes.put('/placespatrimonies/:id', PlacesPatrimoniesMiddleware.validateId, PlacesPatrimoniesController.update);
routes.delete('/placespatrimonies/:id', PlacesPatrimoniesMiddleware.validateId, PlacesPatrimoniesController.delete);

routes.get('/schedulecalendar', ScheduleCalendarController.index)
routes.post('/schedulecalendar', ScheduleCalendarController.store);
routes.put('/schedulecalendar/:id', ScheduleCalendarMiddleware.validateId, ScheduleCalendarController.update);
routes.delete('/schedulecalendar/:id', ScheduleCalendarMiddleware.validateId, ScheduleCalendarController.delete);

routes.get('/events', EventsController.index)
routes.post('/events', EventsController.store);
routes.put('/events/:id', EventsMiddleware.validateId, EventsController.update);
routes.delete('/events/:id', EventsMiddleware.validateId, EventsController.delete);

routes.get('/categoryschedule', CategoryScheduleController.index)
routes.post('/categoryschedule', CategoryScheduleController.store);
routes.put('/categoryschedule/:id', CategoryScheduleMiddleware.validateId, CategoryScheduleController.update);
routes.delete('/categoryschedule/:id', CategoryScheduleMiddleware.validateId, CategoryScheduleController.delete);

routes.get('/muralstext', MuralsTextController.index)
routes.post('/muralstext', MuralsTextController.store);
routes.put('/muralstext/:id', MuralsTextMiddleware.validateId, MuralsTextController.update);
routes.delete('/muralstext/:id', MuralsTextMiddleware.validateId, MuralsTextController.delete);

routes.get('/muralsimage', MuralsImageController.index)
routes.post('/muralsimage', MuralsImageController.store);
routes.put('/muralsimage/:id', MuralsImageMiddleware.validateId, MuralsImageController.update);
routes.delete('/muralsimage/:id', MuralsImageMiddleware.validateId, MuralsImageController.delete);

routes.get('/eventsregister', EventsRegisterController.index)
routes.post('/eventsregister', EventsRegisterController.store);
routes.put('/eventsregister/:id', EventsRegisterMiddleware.validateId, EventsRegisterController.update);
routes.delete('/eventsregister/:id', EventsRegisterMiddleware.validateId, EventsRegisterController.delete);

routes.get('/categoryanotations', CategoryAnotationsController.index)
routes.post('/categoryanotations', CategoryAnotationsController.store);
routes.put('/categoryanotations/:id', CategoryAnotationsMiddleware.validateId, CategoryAnotationsController.update);
routes.delete('/categoryanotations/:id', CategoryAnotationsMiddleware.validateId, CategoryAnotationsController.delete);

routes.get('/anotations', AnotationsController.index)
routes.post('/anotations', AnotationsController.store);
routes.put('/anotations/:id', AnotationsMiddleware.validateId, AnotationsController.update);
routes.delete('/anotations/:id', AnotationsMiddleware.validateId, AnotationsController.delete);

routes.get('/photoalbum', PhotoAlbumController.index)
routes.post('/photoalbum', PhotoAlbumController.store);
routes.put('/photoalbum/:id', PhotoAlbumMiddleware.validateId, PhotoAlbumController.update);
routes.delete('/photoalbum/:id', PhotoAlbumMiddleware.validateId, PhotoAlbumController.delete);

routes.get('/videoalbum', VideoAlbumController.index)
routes.post('/videoalbum', VideoAlbumController.store);
routes.put('/videoalbum/:id', VideoAlbumMiddleware.validateId, VideoAlbumController.update);
routes.delete('/videoalbum/:id', VideoAlbumMiddleware.validateId, VideoAlbumController.delete);

routes.get('/forms', FormsController.index)
routes.post('/forms', FormsController.store);
routes.put('/forms/:id', FormsMiddleware.validateId, FormsController.update);
routes.delete('/forms/:id', FormsMiddleware.validateId, FormsController.delete);

routes.get('/documents', DocumentsController.index)
routes.post('/documents', DocumentsController.store);
routes.put('/documents/:id', DocumentsMiddleware.validateId, DocumentsController.update);
routes.delete('/documents/:id', DocumentsMiddleware.validateId, DocumentsController.delete);
module.exports = routes