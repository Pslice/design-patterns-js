var TaskServiceWrapper = function () {
    var completeAndNotify = function () {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.completeDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask)
        }
        return {
            completeAndNotify: completeAndNotify
        }
    }
}();
var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    complete: false
});
TaskService.complete(myTask);
