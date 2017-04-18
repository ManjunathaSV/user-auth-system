'use strict'
const Controller = require('./index.js');
const PermissionModel = require('../models/permission.js');

class PermissionController extends Controller{
	constructor(){
		super();
		this.model = new PermissionModel();
	}
	setupRoutes(server){
		server.post( '/permissions',  this.create.bind(this) );
		server.get( '/permissions', this.read.bind(this) );
		server.delete( '/permissions', this.delete.bind(this));
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
module.exports = PermissionController;