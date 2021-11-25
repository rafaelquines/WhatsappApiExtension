/**
 * Created by wictor on 11/06/2018.
 */

function getSendMessages(callback) {
    console.log('called showRecords()');

    var sql = "SELECT * FROM send_msg";

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [], callback);
        }
    );
}

function getDeleteSendMessage(id) {
    console.log('called showRecords()');

    var sql = "DELETE FROM send_msg WHERE id=?";

    db.transaction(
        function (transaction) {
            transaction.executeSql(sql, [id]);
        }
    );
}