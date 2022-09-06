const dummydata = require('../db/dummydata');
function dummdataController(req, res){
    dummydata();
    res.json('Please check log for db error')
}
module.exports = dummdataController;