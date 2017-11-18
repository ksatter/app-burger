const orm = require('../config/orm.js');

const burger = {
  all: function(cb) {
    orm.selectAll(function (res) {
      cb(res)
    })
  },
  create: function (data, cb) {
    console.log("burger" + data);;
    orm.insertOne(data, function (res) {
      cb(res)
    })
  },
  update: function (id, cb) {
    orm.updateOne(id, function (res) {
      cb(res)
    })
  }
}

module.exports = burger
