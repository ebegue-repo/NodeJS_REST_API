# NodeJS_REST_API

- Description: REST API which offers CRUD operations over a group of users.

- Installing all the dependencies written in the package.json file:

	npm install

- Starting the server:

	node server.js
	
- Calling the CRUD operations using CURL:

	* CREATE:   curl -X POST http://localhost:8081/users/
	* RETRIEVE: curl -X GET http://localhost:8081/users/2
	* UPDATE:   curl -X PUT http://localhost:8081/users/2/Lucas
	* DELETE:   curl -X DELETE http://localhost:8081/users/1