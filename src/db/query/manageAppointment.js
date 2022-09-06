const { mysqlc, connection } = require("../dbcon");
const DBnames = require("../../appData/dbdata").tables;
const AppointTable = DBnames.appointmentMaster;
connection;
const date = "2022-09-23";
const doctorID = "1231123cd2343";

function getAppointment(data) {
  const result = new Promise((resolve, reject) => {
    mysqlc.query(
      `SELECT * FROM ${AppointTable.tableName} WHERE ${AppointTable.column.consultDate} = "${data.date}"  AND ${AppointTable.column.doctorId} LIKE "${data.doctorID}" `,
      (err, result) => {
        if (err) {
          //console.log(err);
          reject(err);
        } else {
          //console.log(result);
          resolve(result);
        }
      }
    );
  });
  return result;
}

function updateAppointment(data) {
  const result = new Promise((resolve, reject) => {
    mysqlc.query(
      `UPDATE appointment SET ${data.key}="${data.gender}" WHERE id = "${data.id}";`,
      (err, result) => {
        if (err) {
          //console.log(err);
          reject(err);
        } else {
          //console.log(result);
          resolve(result);
        }
      }
    );
  });
  return result;
}
//getAppointmentlist({ date, doctorID })

module.exports = {
  getAppointment,
  updateAppointment,
};
