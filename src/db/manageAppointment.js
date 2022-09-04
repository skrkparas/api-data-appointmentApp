const { mysqlc, connection } = require("./dbcon");
connection;
const date = "2022-09-23";
const doctorID = "1231123cd2343";
function getAppointmentlist(data) {
  const result = new Promise((resolve, reject) => {
    mysqlc.query(
      `SELECT * FROM appointment WHERE consultDate = "${data.date}"  AND doctorAlloted LIKE "${data.doctorID}" `,
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(result);
          resolve(result);
        }
      }
    );
  });
}

getAppointmentlist({ date, doctorID })

module.exports = getAppointmentlist;
