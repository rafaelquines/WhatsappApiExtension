/**
 * Created by wictor on 11/06/2018.
 */

function insertLastMsg(id_msg, timestamp, callback) {
    console.log('called insertRecord()');

    var sql = 'INSERT INTO last_msg (id, id_msg, timestamp) VALUES (?, ?, ?)';

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [1, id_msg, timestamp], callback);
            console.log('executeSql: ' + sql);
        }
    );
}

function updateLastMsg(id_msg, timestamp, callback) {
    console.log('called updateRecord()');

    var sql = 'UPDATE last_msg SET id_msg=?, timestamp=? WHERE id=?';

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [id_msg, timestamp, 1], callback);
            console.log('executeSql: ' + sql);
        }
    );
}

function getLastMsg(callback) {
    console.log('getLastMsg');
    console.log('called showRecords()');

    var sql = "SELECT * FROM last_msg WHERE id = 1";

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [], callback);
        }
    );
}

function saveLastMsg(id_msg, timestamp, callback) {
    console.log('called saveLastMsg()');

    var sql = "SELECT * FROM last_msg WHERE id = 1";

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [], function (transaction, results) {
                if (results.rows.length > 0)
                    updateLastMsg(id_msg, timestamp, callback);
                else
                    insertLastMsg(id_msg, timestamp, callback);
            });
        }
    );
}