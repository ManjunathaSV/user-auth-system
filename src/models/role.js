'use strict';
var Model = require('./index.js');

class Role extends Model{
	constructor(){
		super();
		this.collection = 'roles';
		this.schema = {
			properties :{
				id: {
					type: 'string',
					required: true
				},
				permissions: {
					type: 'array',
					required: true
				}
			}
		}
	}

}
module.exports = Role;