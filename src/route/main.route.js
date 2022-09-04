const Router = require('express').Router();
const HomeController = require('../controller/homeController')
const appointmentsController = require('../controller/appointmentsController')
const productsController = require('../controller/productsController')
const updatePrescriptionController = require('../controller/updatePrescriptionController')
const stack= require('../../src/service/fileserve');



Router.get('/', HomeController);
Router.get('/appointments/:doctorID/:date', appointmentsController)
Router.get('/testfile', (req, res)=>{
    stack.then(d=>{
        console.log(d)
        res.json(JSON.stringify(d))
    }).catch(err=>{
        res.json(JSON.stringify(err))
    })
})
// Router.get('/products', productsController);
Router.put('/update-prescription', updatePrescriptionController)
Router.post('/create-prescription', updatePrescriptionController)


module.exports = Router;