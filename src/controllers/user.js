'use strict'
const Controller = require('./index.js');
const UserModel = require('../models/user.js');
const RoleModel = require('../models/role.js');
const PermissionModel = require('../models/permission.js');
const querystring = require('querystring');
const q = require('q');
const url = require('url');

class UserController extends Controller{
	constructor(){
		super();
		this.model = new UserModel();
	}
	setupRoutes(server){
		server.post( '/users',  this.create.bind(this) );
		server.get( '/users' , this.read.bind(this) );
		server.get('/users/:id', this.listPermissions.bind(this));
		server.delete('/users', this.delete.bind(this));
		server.get('/checkpermission', this.checkPermission.bind(this));
	}
	create(req, res, next){
		super.create(req, res, next);
	}
	read(req, res, next){
		super.read(req, res, next);
	}
	update(req, res, next){
		super.update(req, res, next);
	}
	delete(req, res, next){
		super.delete(req, res, next);
	}
	listPermissions(req, res, next){
		this.model.getPermissions(req.params.id).then((result)=>{
			res.status(200).send(result);
		})
		.fail((err)=>{
			res.status(400).send(err);
		})
	}
	checkPermission(req, res, next){
		let filterQuery = url.parse(req.url , true).query;
		console.log(filterQuery);
		this.model.checkPermission(filterQuery).then((result)=>{
			console.log(result);
			res.status(200).send(result);

		}).fail((err)=>{
			res.status(400).send(err);
		});
	}
}
module.exports = UserController;