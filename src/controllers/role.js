'use strict'
const Controller = require('./index.js');
const RoleModel = require('../models/role.js');

class RoleController extends Controller{
	constructor(){
		super();
		this.model = new RoleModel();
	}
	setupRoutes(server){
		server.post( '/roles',  this.create.bind(this) );
		server.get( '/roles' , this.read.bind(this) );
		server.delete('/roles', this.delete.bind(this));
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
}
module.exports = RoleController;