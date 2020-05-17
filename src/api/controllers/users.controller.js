const { getAllUsers } = require('../../core/services');


const getAll = async (req, res, next) => {
  try {
    const data = await getAllUsers();

    return res.json(data);

  }
  catch (err) {
    return res.json(err);
  }
};


module.exports = {
  getAll
}