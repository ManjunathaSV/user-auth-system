'use strict';
const MongoClient = require('mongodb').MongoClient;
const q = require('q');
class MongodbService{
	constructor(dbConnString){
		this.dbConnString = dbConnString;
	}

	getConnection(){
		var deferred = q.defer();
		MongoClient.connect(this.dbConnString, (err, db)=>{
			if(err) deferred.reject(err);
			deferred.resolve(db);
		});
		return deferred.promise;
	}

	create(collectionName, doc){
		var deferred = q.defer();
		this.getConnection().then((db)=>{
			var collection = db.collection(collectionName);
			collection.insertOne(doc,
				function(err, result){
					if(err) deferred.reject(err);
				deferred.resolve(result);
			});
		});
		return deferred.promise;
	}

	read(collectionName, filter){
		var deferred = q.defer();
		this.getConnection().then((db)=>{
			var collection = db.collection(collectionName);
			collection.find(filter).toArray(function(err, docs){
					if(err) deferred.reject(err);
				deferred.resolve(docs);
			});
		});
		return deferred.promise;
	}

	update(collectionName, filterObj, updateObj){
		var deferred = q.defer();
		this.getConnection().then((db)=>{
			var collection = db.collection(collectionName);
			collection.updateOne(filterObj, updateObj, function(err, docs){
					if(err) deferred.reject(err);
				deferred.resolve(docs);
			});
		});
		return deferred.promise;
	}

	delete(collectionName, doc){
		var deferred = q.defer();
		this.getConnection().then((db)=>{
			var collection = db.collection(collectionName);
			collection.deleteMany(doc, function(err,result){
				if(err) deferred.reject(err);
				deferred.resolve(result);
			});
		});
	return deferred.promise;	
	}
}
module.exports = MongodbService;