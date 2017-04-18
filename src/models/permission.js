'use strict';
const Model = require('./index.js');
const q = require('q');

class Permission extends Model{
	constructor(){
		super();
		this.collection = 'permissions';
		this.schema = {
			properties :{
				id: {
					type: 'string',
					required: true
				},
				name: {
					type: 'string',
					required: true
				}
			}
		}
	}
	/*getPermissionsByIds(permissionIds){
    var defered = q.defer();
    var myPermList = [];
    var tasksToGo = permissionIds.length;
    permissionIds.forEach(function(element){
      var filterObj = {};
      filterObj['id'] = element;
      var permModel = new Permission();
      permModel.read(filterObj).then(function(permissions){
        myPermList.push(permissions[0]);
      });
      if(--tasksToGo == 0){
        defered.resolve(myPermList);
      }
    })
    return defered.promise;
	}*/
  
}
module.exports = Permission;