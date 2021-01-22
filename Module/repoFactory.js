var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }
    }
}