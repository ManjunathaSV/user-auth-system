'use strict';
const MongodbService = require('../utils/mongodb-service');
const revalidator = require('revalidator');
const q = require('q');
const config = require('../../config/config.js');

class Model {
	constructor(){
		this.mongodbService = new MongodbService(config.dbURL);
	}
	create(doc){
		let defered = q.defer();
		let validator = revalidator.validate(doc, this.schema);
		if(!validator.valid){
			defered.reject(validator.errors);
		}else{
			this.mongodbService.create(this.collection, doc).then(function(result){
				defered.resolve(result);
			});
		}
		return defered.promise;
	}
	read(filterObj){
		let defered = q.defer();
		this.mongodbService.read(this.collection, filterObj).then(function(result){
			defered.resolve(result);
		})
		return defered.promise;
	}
	delete(filterObj){
		let defered = q.defer();
		this.mongodbService.delete(this.collection, filterObj).then(function(result){
			defered.resolve(result);
		})
		return defered.promise;
	}
	update(filterObj, updateObj){
		let defered = q.defer();
		this.mongodbService.update(this.collection, filterObj, updateObj).then(function(result){
			defered.resolve(result);
		})
		return defered.promise;
	}
}

module.exports = Model;