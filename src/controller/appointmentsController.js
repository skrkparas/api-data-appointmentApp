const { getAppointment } = require("../db/query/manageAppointment");
function appointmentsController(req, res) {
    let i =0;
    let pending =0;
    let completed =0;
  getAppointment({ doctorID: req.params.doctorID, date: req.params.date })
    .then((data) => {
      console.log(data.length);    
      for(i; i< data.length;i++ ){
       
        if(String(data[i].status)==String("Attended")){
            console.log("checking for attended",completed);completed=completed+1} 
        console.log(data[i].status)
    }
    pending=parseInt(data.length)-parseInt(completed);
      const totalAppointment = data.length;
      const resultData = {
        totalAppointment,
        pending,
        completed,
        data 
      }
      res.json(resultData);
    })
    .catch((err) => {
      res.json(JSON.stringify(err));
    });
}

module.exports = appointmentsController;
