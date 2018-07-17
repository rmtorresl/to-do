const fs = require('fs');

let ListTasks = async() => {
    return new Promise((resolve, reject) => {

        try {
            let data = require('../persistence/data.json');
            return resolve(data);
        } catch (error) {
            return resolve([]);
        }
    });
};

let CreateTask = async(description) => {

    let currentTasks = await ListTasks();

    return new Promise((resolve, reject) => {

        let task = {
            description,
            completed: false
        };

        currentTasks.push(task);
        let data = JSON.stringify(currentTasks);

        fs.writeFile(`./persistence/data.json`, data, (error) => {

            if (error) {
                return reject(error);
            }

            return resolve({ message: `The task has been saved!!` });
        });
    });
};

let UpdateTask = async(description, completed = true) => {

    let currentTasks = await ListTasks();

    return new Promise((resolve, reject) => {

        if (!currentTasks) {
            return reject('There are no tasks to update');
        }

        let taskToUpdate = currentTasks.find(item => {
            return item.description === description;
        });

        if (!taskToUpdate) {
            return reject('There is no task with the specified description');
        }

        taskToUpdate.completed = completed;
        let data = JSON.stringify(currentTasks);

        fs.writeFile(`./persistence/data.json`, data, (error) => {

            if (error) {
                return reject(error);
            }

            return resolve({ message: `The task has been updated!!` });
        });
    });
};

let DeleteTask = async(description) => {

    let currentTasks = await ListTasks();

    return new Promise((resolve, reject) => {

        if (!currentTasks) {
            return reject('There are no tasks to delete');
        }

        let taskToDelete = currentTasks.find(item => {
            return item.description === description;
        });

        if (!taskToDelete) {
            return reject('There is no task with the specified description');
        }

        currentTasks = currentTasks.filter(item => item.description !== description);
        let data = JSON.stringify(currentTasks);

        fs.writeFile(`./persistence/data.json`, data, (error) => {

            if (error) {
                return reject(error);
            }

            return resolve({ message: `The task has been deleted!!` });
        });
    });
};

module.exports = {
    ListTasks,
    CreateTask,
    UpdateTask,
    DeleteTask
};