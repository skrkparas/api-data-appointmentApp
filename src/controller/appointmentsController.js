
function appointmentsController (req, res){
    res.json(" this is the params"+ req.params.doctorID + req.params.date);
}

module.exports = appointmentsController;