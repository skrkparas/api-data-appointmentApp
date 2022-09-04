require('./src/server')
//require('./src/db/manageAppointment');

const stack= require('./src/service/fileserve');
stack.then(d=>console.log(d)).catch(err=>console.log(err))