const createTable = require('../db/createtable');
function createTableController(req, res){
  createTable();
  res.json("please checklog for table creation");
}

module.exports = createTableController;