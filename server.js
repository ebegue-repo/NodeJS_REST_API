/********************************************************/
/*  LOADING EXPRESS FRAMEWORK                           */ 
/********************************************************/
var express = require('express');
var app = express();
var fs = require("fs");


/********************************************************/
/*  LOADING DATA                                        */ 
/********************************************************/
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

/********************************************************/
/*  SERVER LISTENING                                    */ 
/********************************************************/
var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
})


/********************************************************/
/*  LIST USERS                                          */ 
/********************************************************/
app.get('/listUsers', function(request, response){
	fs.readFile("./users.json", 'utf8', function(err, data){
		console.log(data);
		response.end(data);
	});
});

/********************************************************/
/*  ADD USER                                            */ 
/********************************************************/
app.get('/addUser', function(request, response){
	fs.readFile("./users.json", 'utf8', function(err, data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		response.end(JSON.stringify(data));
	});
});

