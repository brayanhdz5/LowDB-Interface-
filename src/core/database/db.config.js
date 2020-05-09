const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

let db;

const createConnection = async () => {

  const adapter = new FileAsync('db.json');
  db = await low(adapter);
  db.defaults({ users: [] }).write()

}

const getConnection = () => db;



module.exports = {
  createConnection,
  getConnection
}
