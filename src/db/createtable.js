const {mysqlc, connection} = require('../db/dbcon');
function sample(){
const appointmentTable= "CREATE TABLE IF NOT EXISTS `appointments` (`id` INTEGER NOT NULL auto_increment , `appointID` VARCHAR(255) NOT NULL, `name` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB";
const doctorsTable = "CREATE TABLE IF NOT EXISTS `doctors` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;"
const appointmenttabl ='CREATE TABLE IF NOT EXISTS `test`.`appointment` ( `id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(150), `phone` VARCHAR(15), `email` VARCHAR(255), `consultDate` DATE, `consultTime` TIME, `therapy` VARCHAR(255), `doctorAlloted` VARCHAR(150), `utm` VARCHAR(50), `sz` VARCHAR(150), `doctorName` VARCHAR(150), `age` VARCHAR(15), `gender` VARCHAR(10), `unattended-Reason` TEXT, `concerns` VARCHAR(255), `product-1` VARCHAR(150), `product-2` VARCHAR(150), `product-3` VARCHAR(150), `product-4` VARCHAR(150), `product-1-id` VARCHAR(150), `product-2-id` VARCHAR(150), `product-3-id` VARCHAR(150), `product-4-id` VARCHAR(150), `coupon` VARCHAR(150), `classicalMedRev` VARCHAR(255), `reviewFollowup` VARCHAR(255), `consultedTime` DATE, `doctorEmail` VARCHAR(150), `cartLink` VARCHAR(150), `fileLink` VARCHAR(150), PRIMARY KEY (`id`) ) ENGINE = InnoDB;';
connection;
mysqlc.query(doctorsTable, function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results);
  });
  mysqlc.query(appointmenttabl, function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results);
  });
}

module.exports = sample;
