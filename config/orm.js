const connection = require('./connection.js');

const orm = {
  selectAll: function(cb) {
    let query = "SELECT * FROM burgers"
    connection.query(query, function(err, res) {
      if (err) throw err
      cb(res)
    });
  },
  insertOne: function(data) {

    let query = `INSERT INTO burgers (burger_name, date) VALUES("${data}", CURRENT_DATE)`;
    console.log(query)
    connection.query(query, function(err) {
      if (err) throw err
    })
  },

  updateOne: function (id, cb) {
    console.log(id)
    let query = `UPDATE burgers SET devoured=true WHERE id = ${id}`;
    connection.query(query, function(err, res) {
      if (err) throw err;
      cb(res)
    })
  }
}

module.exports = orm
