var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
    this.level = data.level = 0;
}

Task.prototype.complete = function () {
    console.log(`completing task ${this.name}`);
    this.completed = true;
};

Task.prototype.save = function () {
    console.info(`${this.name} is now saved.`);
};

module.exports = Task;

