'use strict';
const Model = require('./index.js');
const PermissionModel = require('./permission.js');
const RoleModel = require('./role.js');
const q = require('q');

class User extends Model{
  constructor(){
    super();
    this.collection = 'users';
    this.schema = {
      properties :{
        id: {
          type: 'string',
          required: true
        },
        roles: {
          type: 'array',
          required: true,
          default: ['user']
        }
      }
    }
  }
  /*method which returns permissions associated with a user*/
  getPermissions(userId){
    var defered = q.defer();
    this.getRoles(userId).then((roles)=>{
      this.getPermissionsList(roles).then((permList)=>{
        var permArray = Array.from(permList);
        var permModel = new PermissionModel();
        this.getPermissionListByIds(permArray).then((result)=>{
          defered.resolve(result);
        })
      })
    });
    return defered.promise;
  }
  /*method to check if a given user and permission pair is valid*/
  checkPermission(userperm){
    var defered = q.defer();
    this.getPermissions(userperm.userId).then((permissions)=>{
      var present = false;
      var tasksTogo = permissions.length;
      permissions.forEach((element)=>{
        if(element.id == userperm.permId){
          present = true;
          defered.resolve(present);
        }
        if(--tasksTogo == 0){
          defered.resolve(present);
        }
      });
    })
  return defered.promise;
  }
  /*method which returns roles of a particular user based on id*/
  getRoles(userId){
    var defered = q.defer();
    var filterObj = {};
    filterObj['id'] = userId;
      super.read(filterObj).then(function(docs){
        defered.resolve(docs[0].roles);
      }).fail(function(err){
        defered.reject(err);
      })
    return defered.promise;
  }
  /*A helper method which returns a union of permissions associated with a set of roles*/
  getPermissionsList(roles){
    var defered = q.defer();
    var tasksTogo = roles.length;
    var myPermissions = new Set();
    roles.forEach(function(element){
      var filterObj = {};
      var roleModel = new RoleModel();
      filterObj['id'] = element;
        roleModel.read(filterObj).then(function(docs){
          var permArr = docs[0].permissions;
          permArr.forEach(function(element){
            myPermissions.add(element);
          })
          if(--tasksTogo == 0){
            defered.resolve(myPermissions);
          }
        }).fail(function(err){
            defered.reject(err);
        });
      })
    return defered.promise;
  }

  /*A helpere method which returns an array of permission objects based on permission-id*/
  getPermissionListByIds(permissionIds){
    var defered = q.defer();
    var myPermList = [];
    var tasksToGo = permissionIds.length;
    permissionIds.forEach(function(element){
      var filterObj = {};
      filterObj['id'] = element;
      var permModel = new PermissionModel();
        permModel.read(filterObj).then(function(permissions){
          myPermList.push(permissions[0]);
        if(--tasksToGo == 0){
          defered.resolve(myPermList);
        }
        }); 
    })
    return defered.promise;
  } 
}
module.exports = User;