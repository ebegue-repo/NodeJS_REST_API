/********************************************************/
/* LOADING EXPRESS FRAMEWORK                            */ 
/********************************************************/
var express = require('express');
var app = express();
var fs = require("fs");

/********************************************************/
/* SERVER LISTENING                                     */ 
/********************************************************/
var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
})


/********************************************************/
/* CREATE USER                                          */ 
/********************************************************/
app.post('', function(request, response){
	// Example user
	var user = {
	   "user4" : {
	      "name" : "mohit",
	      "password" : "password4",
	      "profession" : "teacher",
	      "id": 4
	   }
	}

	fs.readFile("./users.json", 'utf8', function(err, data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		response.end(JSON.stringify(data));
	});
});

/********************************************************/
/* RETRIEVE USER                                        */ 
/********************************************************/
app.get('/:id', function(request, response){
	fs.readFile("./users.json", 'utf8', function(err, data){
		var users = JSON.parse(data);
		var user = users["user" + request.params.id];
		response.end(JSON.stringify(user));
	});
});

/********************************************************/
/* UPDATE USER                                          */ 
/********************************************************/
app.put('/:id', function(request, response){
	fs.readFile("./users.json", 'utf8', function(err, data){
		data = JSON.parse(data);
		data["user" + request.params.id]["name"] = "Jhon";
		response.end(JSON.stringify(data));
	});
});

/********************************************************/
/* DELETE USER                                          */ 
/********************************************************/
app.delete('/:id', function(request, response){
	fs.readFile("./users.json", 'utf8', function(err, data){
		var data = JSON.parse(data);
		delete data["user" + request.params.id];
		response.end(JSON.stringify(data));
	});
});