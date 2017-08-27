const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const schema = mongoose.Schema;

const TaskSchema = new schema({    
    taskDescription: {type:String, required: true},    
    taskStatus: {type:String},
    taskStartDate: {type:Date},
    taskEndDate: {type:Date},
    taskPriority: {type:Number, required: true}
});

TaskSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('tasks', TaskSchema, 'tasks');


/*
{
	"description": "Angular Session 2",
	"priority": 1,
	"status": "Completed",
	"startDate": "2018-08-25",
	"endDate": "2018-08-25"
}

*/