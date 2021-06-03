const yargs = require('yargs')
const {addTask,deleteTask} =require("./task")

//command add task 
yargs.command ({
    command:'add',
    builder: {
        title: {
            type: "string",
        },
        description:{
            type: "string",
        },
        type: {
            type: "string",
        },
    },
    handler: function(args){
    addTask(args.title, args.description, args.type)
        console.log('add',args);
    }
});

//cmd delete task
yargs.command ({
    command:'delete',
    builder: {
        id: {
            type: "string",
        },
    },
    handler: function(args){
        deleteTask(args.id)
        console.log('delete',args);
    }
})
//cmd update task
yargs.command ({
    command:'update',
    builder: {
        id: {
            type: "string",
        },
        title: {
            type: "string",
        },
        description:{
            type: "string",
        },
        type: {
            type: "string",
        },
    },
    handler: function(args){
        console.log('update',args);
    }
})
//cmd view all tasks
yargs.command ({
    command:'list',
    handler: function(args){
        console.log('list all task',args);
    }
})
//cmd view task detail
yargs.command ({
    command:'detail',
    builder: {
        id: {
            type: "string",
        },
    },
    handler: function(args){
        console.log('view detail',args);
    }
})
//cmd view task by type
yargs.command ({
    command:'listByType',
    builder: {
        type: {
            type: "string",
        },
    },
    handler: function(args){
        console.log('listByType',args);
    }
})

//ko có dòng này sẽ ko chạy 
yargs.parse();