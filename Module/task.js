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

module.exports = Task;