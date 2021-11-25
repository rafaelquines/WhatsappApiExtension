/**
 * Created by wictor on 11/06/2018.
 */

function insertMessage(json) {
    console.log('called insertRecord()');

    var sql = 'INSERT INTO messages (json) VALUES (?)';

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [json]);
            console.log('executeSql: ' + sql);
        }
    );
}
