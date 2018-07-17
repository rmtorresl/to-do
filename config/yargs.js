const args = require('yargs')
    .command(
        'create',
        'Creates a new task', {
            desc: {
                demand: true,
                alias: 'd',
                desc: 'Task description'
            }
        })
    .command(
        'list',
        'List all to-do tasks', {

        })
    .command(
        'update',
        'Update task status', {
            desc: {
                demand: true,
                alias: 'd',
                desc: 'Description of task to be updated'
            },
            completed: {
                alias: 'c',
                default: true,
                desc: 'Indicates if task has been completed'
            }
        })
    .command(
        'delete',
        'Deletes the specified task', {
            desc: {
                demand: true,
                alias: 'd',
                desc: 'Task description'
            }
        })
    .help()
    .argv;

module.exports = {
    args
};