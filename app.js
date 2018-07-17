const { args } = require('./config/yargs');
const { ListTasks, CreateTask, UpdateTask, DeleteTask } = require('./to-do/to-do');
const colors = require('colors');

let command = args._[0];

switch (command) {

    case 'list':

        ListTasks().then(result => {

                for (let item of result) {
                    console.log('=============== TO-DO ==============='.green);
                    console.log(item.description);
                    console.log(`Status: ${ item.completed }`);
                    console.log('====================================='.green);
                }
            })
            .catch(error => {
                console.log(error);
            });

        break;

    case 'create':

        CreateTask(args.desc).then(result => {
                console.log(result.message)
            })
            .catch(error => {
                console.log(error);
            });

        break;

    case 'update':

        UpdateTask(args.desc, args.completed).then(result => {
                console.log(result.message)
            })
            .catch(error => {
                console.log(error);
            });

        break;

    case 'delete':

        DeleteTask(args.desc).then(result => {
                console.log(result.message)
            })
            .catch(error => {
                console.log(error);
            });

        break;

    default:
        console.log(`Command ${ command } not recognized`);
}