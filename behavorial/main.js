var Task = require('./task');

var levelup = function () {
    this.update = function (task) {
        task.level++;
        console.log(`level up to ${task.level} for ${task.user}`);
    }
}
function ObserverList() {
    this.observerList = [];
};
ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};
var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}
var task1 = new Task({ name: 'Demo', user: 'Patrick' });
var leveling = new levelup();

task1.save();
