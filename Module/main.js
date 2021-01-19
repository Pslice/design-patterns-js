var Task = require('./task');
var Repo = require('./taskReposit');

var task1 = new Task('create a demo for constructors');

task1.complete();
task1.save();