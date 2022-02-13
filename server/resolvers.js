const casual = require('casual');

const getUsers = () => {
  const usersList = [];
  casual.define('user', function() {
    return {
        email: casual.email,
        name: casual.name,
        phone: casual.phone,
        address: casual.address
    };
});
  for (let index = 0; index < 2000; index++) {
    var user = casual.user;
    usersList.push(user);
  }
  //console.log(usersList);
  return usersList;
}

module.exports = {
  Query: {
    name: () => casual.name,
    users: () => getUsers(),
  },
};