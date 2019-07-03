var mysql = require('mysql');

// create connection
var con = mysql.createConnection({
        host: "217.175.242.25",
        user: "root",
        password: "Ple01010!@#"
        // database: "traccar"
});

// connect DB
con.connect(function(err){
    if(err) throw err;
    console.log("Connected !!");
    sql="select id, name from devices";

});

