# user-auth-system
A simple User based auth system with following components
a) User
b) Role
c) Permission
This also includes a simple mongodb service which will expose methods to perform create, read, update, delete operations on mongodb.


API implemented:
Method		URL						 		Value Returned
GET		http://server/users  			Set of all users
GET		http://server/users/userId		Permissions associated with a user
POST	http://server/users 			Creates a user if valid
PUT 	http://server/users/userId 		Updates a user information if valid 
DELETE  http://server/users/userId      Deletes the particular user corresponding to the userId

GET		http://server/roles  			Set of all users
GET		http://server/roles/roleId		Permissions associated with a user
POST	http://server/roles 			Creates a user if valid
PUT 	http://server/roles/roleId 		Updates a user information if valid 
DELETE  http://server/roles/roleId      Deletes the particular user corresponding to the userId

GET		http://server/permissions  					Set of all permissions
GET		http://server/permissions/permissionId		Permission details related to permissionId
POST	http://server/permissions					Creates a permission if it is valid
PUT 	http://server/permissions/permissionId 		Updates a permission information if valid 
DELETE  http://server/permissions/permissionId      Deletes the particular permission

GET 	http://server/checkpermission?userId=<user1>&permId=<perm10>  Returns true if user has the permission associated

steps to run the app:
1)Clone the repo
2)Run the command "npm install" in the terminal to install dependencies
3)Run the command "npm start" to start the server
Test:
Run the command "npm test" to run the test cases
Reports:
Run the command "npm reports" 
Test reports are generated using mochawesome reporter , the reports will be stored in "reports" folder under "src" folder

Note: Calls file need to be changed if it has to work in linux/mac,
Instead of using '\\' , use '/' to obtain the corresponding file 

