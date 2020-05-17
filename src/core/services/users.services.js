const { getConnection } = require('../database')



const getAllUsers = async () => {
  try {
    const users = await getConnection().get('users').value();
    
    return users;
  }
  catch (err) {
    console.log(err);
    return null;
  }
}


module.exports = {
  getAllUsers

}