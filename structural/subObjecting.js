var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.info('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.info('saving Task: ' + this.name);
};

var myTask = new Task('legacy');
myTask.complete();
myTask.save();

var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
}
var ut = new UrgentTask('Urg', 1);
console.info(ut)