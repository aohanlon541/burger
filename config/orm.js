var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) { <<
    << << < HEAD
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString(); ===
    === =
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString(); >>>
    >>> > 3 b087e847a549afef519f223ad8d5330de79e653
}

// Helper function for SQL syntax.
function objToSql(ob) { <<
    << << < HEAD
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}


var orm = {
    all: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err
            }
            cb(res);
        });
    },
    insert: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, res) {
            if (err) {
                throw err
            }
            cb(res);
        });
    },
    update: function(table, objColVals, condition, cb) {
            var queryString = "UPDATE " + table;
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;
            connection.query(queryString, function(err, res) {
                if (err) {
                    throw err
                }
                cb(res);
            });
        } ===
        === =
        var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
            var queryString = "UPDATE " + table;

            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;

            console.log(queryString);
            connection.query(queryString, function(err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        } >>>
        >>> > 3 b087e847a549afef519f223ad8d5330de79e653
};

module.exports = orm;