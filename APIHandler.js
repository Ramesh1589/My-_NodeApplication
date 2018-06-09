const FILE_NAME = ' APIHandler.js ';
const DBConnection = require('./DBOperations/MySQLOperations');  //Database operations 


module.exports = {

    userLogin: function (request, response) {
        const FUNC_NAME = " userLogin() ";
        try {
            var user = request.body.user;
            if (user == undefined) {
                // logger.writeLog("Update keepalive called for unkown mode from host:" + sIP + FUNC_NAME + FILE_NAME, dummyData, 'error');
                console.log("invalide user name." + FUNC_NAME)
                response.status(300).send(null);
                return;
            }
           // var query = "select * from tbl_UsersLogin where sUserName = '" + user + "';";
           var query ='';
            DBConnection.executequery(query).then(function (resp) {
                // logger.writeLog("KeepAlive updated successfully . " + FUNC_NAME + FILE_NAME, JSON.stringify(resp), 'info');
                //   console.log(resp);
                response.send(resp[0]);

            }).catch(function (err) {
                console.log(err.message + FUNC_NAME);
                response.status(300).send(null);
                // logger.writeLog(err.message + " errno : " + err.errno + FUNC_NAME + FILE_NAME, dummyData, 'error');
            });

        } catch (err) {
            console.log(err.message + FUNC_NAME);
            response.status(300).send(null);
            // logger.writeLog(err.message + FUNC_NAME + FILE_NAME, dummyData, 'fatal');
        }
    },




 }
