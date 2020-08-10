const db = require('../models');
const bcrypt = require('bcryptjs');

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

module.exports = {
  getUser: (id) => {
    return new Promise((resolve, reject) => {
      db.User
      .findById(id)
      .then(dbModel => resolve(dbModel.toJSON()))
      .catch(err => reject(err));
    });
  },

  createUser: (req, res) => {
    req.body.password = hashPassword(req.body.password);
    console.log(req.body);
    db.User
    .create(req.body)
    .then(dbModel => 
      res.json(dbModel)
    )
    .catch(err => res.status(422).json(err));
  },

  setUserAvatar: (req, res) => {
    db.User
    .updateOne({ _id: req.params.id }, { avatar: req.params.avatar })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};