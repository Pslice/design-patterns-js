var repo = function () {
    return {
        get: function (id) {
            console.info('Getting task ' + id);
            return {
                name: 'new task from db'
            }
        }
    }
}
module.exports = repo();