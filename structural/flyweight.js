const { Console } = require("console");
const { get } = require("http");
var Task = function (data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name;
}

//optimize with non-unique data
var Flyweight = function (data) {
    this.name = data.name;
    this.project = data.project;
    this.priority = data.priority;
    this.user = data.user;
    this.complete = data.complete;
}
var FlyweightFactory = function () {
    var flyweights = {};
    var get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };
    var getCount = function () {
        var count = 0;
        for (var f in flyweights) count++;
        return count;
    }
    return {
        get: get,
        getCount: getCount
    }
}()

function TaskCollection() {
    var task = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function (name) {
        return tasks[name];
    };
    var getCount = function () {
        return count;
    };
    return {
        add: add,
        get: get,
        getCount: getCount
    }
}

var tasks = new TaskCollection();

var projects = ['Configurator', 'Maintenance Scheduling Tool', 'International Web Form', 'RPG', 'Pinball Pop', 'Auto Kogeta'];
var priorities = [1, 2, 3, 4, 5, 6];
var users = ['Pat', 'Matt', 'Tim'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 100; i++) {
    tasks.add({
        name: 'task ' + i,
        project: projects[Math.floor((Math.random() * projects.length))],
        priority: priorities[Math.floor((Math.random() * priorities.length))],
        user: users[Math.floor((Math.random() * users.length))],
        complete: completed[Math.floor((Math.random() * completed.length))]
    })
    console.info(tasks['task ' + i]);
}

var afterMemory = process.memoryUsage().heapUsed;
console.info('Used memory: ' + (afterMemory - initialMemory) / 1000000);