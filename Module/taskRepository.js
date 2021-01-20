var repo = function () {
    var db = {};

    var get = function (id) {
        console.info('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }
    var save = function (task) {
        console.info('Save task ' + task.name);
    }
    return {
        get: get,
        save: save
    }
}
module.exports = repo();