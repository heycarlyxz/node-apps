var events = require('events');
var util = require('util');

var User = function(name){
  this.name = name;
};

util.inherits(User, events.EventEmiiter);

var carl = new User('carl');
var tin = new User('tin');
var jm = new User('jm');

var data = [carl, tin, jm];

/*
data.forEach(function(user){
  user.on('register',function(type){
    console.log(user.name + ' has been registered as ' +type);
  });
});

carl.emit('register','admin');
*/
