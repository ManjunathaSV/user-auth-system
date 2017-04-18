'use strict';

class Controller{
	constructor(){

	}
	setupRoutes( server ){
		
	}
	create(req, res, next){
		this.model.create(req.body).then(function(doc){
			res.status(200).end();
			return next();
		})
		.fail(function(err){
			console.log('Failed');
			console.log(err);
			res.status(400).end();
			return next();
		})
	}
	read(req, res, next){
		this.model.read(req.body).then(function(docs){
			res.status(200).send(docs);
		})
		.fail(function(err){
			res.send(err.code, err);
			return next();
		})
	}
	update(req, res, next){
		this.model.update(req.body).then(function(docs){
			res.status(200).send(docs);
		})
		.fail(function(err){
			res.send(err.code, err);
			return next();
		})
	}
	delete(req, res, next){
		this.model.delete(req.body).then(function(docs){
			res.status(200).send(docs);
		})
		.fail(function(err){
			res.send(err.code, err);
			return next();
		})
	}
}
module.exports = Controller;