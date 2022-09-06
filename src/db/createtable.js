const {mysqlc, connection} = require('../db/dbcon');
const Dbnames = require('../appData/dbdata');
// const tableName = Dbnames.tableName;
// const ColName = Dbnames.column.appointmentTable; 
function sample(){
// const appointmentTable= "CREATE TABLE IF NOT EXISTS `appointments` (`id` INTEGER NOT NULL auto_increment , `appointID` VARCHAR(255) NOT NULL, `name` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB";
// const doctorsTable = "CREATE TABLE IF NOT EXISTS `doctors` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;"
// const appointmenttabl =`CREATE TABLE IF NOT EXISTS test.${tableName.appointmentTable} ( '${ColName.id}' INT NOT NULL AUTO_INCREMENT, '${ColName.appointmentID}' VARCHAR(50),'${ColName.name}' VARCHAR(150), '${ColName.phone}' VARCHAR(15), '${ColName.email}' VARCHAR(255), '${ColName.consultDate}' DATE, '${ColName.consultTime}' TIME, '${ColName.therapy}' VARCHAR(255), '${ColName.doctorAlloted}' VARCHAR(150), '${ColName.utm}' VARCHAR(50), '${ColName.sz}' VARCHAR(150), '${ColName.doctorName}' VARCHAR(150), '${ColName.age}' VARCHAR(15), '${ColName.gender}' VARCHAR(10), '${ColName.status}' VARCHAR(10), '${ColName.unattendedReason}' TEXT, '${ColName.concerns}' VARCHAR(255), '${ColName.product1}' VARCHAR(150), '${ColName.product1howToUse}' VARCHAR(150), '${ColName.product2}' VARCHAR(150),'${ColName.product2howToUse}' VARCHAR(150), '${ColName.product3}' VARCHAR(150), '${ColName.product3howToUse}' VARCHAR(150), '${ColName.product4}' VARCHAR(150),'${ColName.product4howToUse}' VARCHAR(150), '${ColName.product1Id}' VARCHAR(150), '${ColName.product2Id}' VARCHAR(150), '${ColName.product3Id}' VARCHAR(150), '${ColName.product4Id}' VARCHAR(150), '${ColName.coupon}' VARCHAR(150), '${ColName.classicalMedRev}' VARCHAR(255), '${ColName.reviewFollowup}' VARCHAR(255), '${ColName.consultTime}' TIME, '${ColName.doctorEmail}' VARCHAR(150), '${ColName.cartLink}' VARCHAR(150), '${ColName.fileLink}' VARCHAR(150), PRIMARY KEY ('${ColName.id}') ) ENGINE = InnoDB;`;
// connection;
// mysqlc.query(doctorsTable, function (error, results, fields) {
//     if (error) throw error;
//     //console.log('The solution is: ', results);
//   });
//   mysqlc.query(appointmenttabl, function (error, results, fields) {
//     if (error) throw error;
//     //console.log('The solution is: ', results);
//   });
}

module.exports = sample;
