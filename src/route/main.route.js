const Router = require('express').Router();
const HomeController = require('../controller/homeController')
const appointmentsController = require('../controller/appointmentsController')
const productsController = require('../controller/productsController')
const updatePrescriptionController = require('../controller/updatePrescriptionController')
const createPrescriptionController = require('../controller/createPrescriptionController')
const createTableController = require('../controller/createTableController');
const dummyDataController = require('../controller/createDummydata');




Router.get('/', HomeController);
Router.get('/appointments/:doctorID/:date', appointmentsController)
// Router.get('/testfile', (req, res)=>{
//     stack.then(d=>{
//         console.log(d)
//         res.json(JSON.stringify(d))
//     }).catch(err=>{
//         res.json(JSON.stringify(err))
//     })
// })
// Router.get('/products', productsController);
Router.put('/update-prescription', updatePrescriptionController)
Router.post('/create-prescription', createPrescriptionController)
Router.get('/createtable',createTableController);
Router.get('/createDummydata',dummyDataController);


module.exports = Router;