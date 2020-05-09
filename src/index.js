const app = require('./app');
const { createConnection } = require('./core/database')

// this file runs the server and the database 

createConnection();

app.listen(3000, () => {
  console.log('server on port 3000')
})