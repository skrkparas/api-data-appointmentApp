const Router = require('express').Router();
const HomeController = require('../controller/homeController')
const appointmentsController = require('../controller/appointmentsController')
const productsController = require('../controller/productsController')
const updateUserController = require('../controller/updatePrescriptionController')


Router.get('/', HomeController);
Router.get('/appointments/:doctorID/:date', appointmentsController)

// Router.get('/products', productsController);
Router.put('/update-user', updateUserController)


module.exports = Router;