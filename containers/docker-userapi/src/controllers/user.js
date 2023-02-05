const db = require("../dbClient");

module.exports = {
  create: (user, callback) => {
    if (!user.username)
      return callback(new Error("Wrong user parameters"), null);
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };
    db.hgetall(user.username, function (err, res) {
      if (err) return callback(err, null);
      if (!res) {
        db.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null);
          callback(null, res);
        });
      } else {
        callback(new Error("User already exists"), null);
      }
    });
  },
  get: (username, callback) => {
    if (!username)
      return callback(new Error("Username must be provided"), null);
    db.hgetall(username, function (err, res) {
      if (err) return callback(err, null);
      if (res) callback(null, res);
      else callback(new Error("User doesn't exists"), null);
    });
  },
};
