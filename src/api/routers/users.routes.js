const { Router } = require('express');
const { getAll } = require('../controllers/users.controller');

const Route = Router();

  Route.get('/getusers', getAll);
  Route.get('/getusersbyid/:id');
  Route.post('/createuser');
  Route.put('/edituser/:id');
  Route.delete('/deleteuser/:id');

module.exports = Route