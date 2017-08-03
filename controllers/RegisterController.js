
var events = require('events');
var util = require('util');
var entity = new events.EventEmitter;
var User = require('../models/User');
var db = [];

//add users
var addUser = function(){
  var model = new User;
  model.username = "heycarlxyz";
  model.password = "admin123";

  db.push(model);
};

//list all users
var listUsers = function(){
  db.forEach(function(val){
    console.log(val.username);
  });
};

addUser();
listUsers();

//console.log("List of registered users: " + list.view(list.arr));
//console.log("Total registered users: " + list.count(list.arr));
