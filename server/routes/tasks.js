var mongoose = require('mongoose');
var Tasks = require('../models/task');
var config = require('../config');

exports.getTasks = function(req, res, next){

    Tasks.find().exec(function (err, tasks){
        if(err){
            res.status(400).json({
                success: false,
                message: 'Error processing request' + err
            });
        } else {
            res.status(200).json({
                success: true,
                data: tasks
            });
        }
    });
}

exports.getTask = function(req, res, next){

    Tasks.find({_id: req.params.id}).exec(function (err, task){
        if(err){
            res.status(401).json({
                success: false,
                message:'Error processing request '+ err 
            });
        } else {
            res.status(200).json({
                success: true,
                data: task
            });
        }
    });
}

exports.deleteTask = function(req, res, next){

    Tasks.remove({_id: req.params.id}, function (err, task){
        if(err){
            res.status(400).json({
                success: false,
                message:'Error processing request '+ err 
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Task deletion successful'
            });
        }        
    });
}

exports.createTask = function(req, res, next){

    const taskDescription = req.body.description;
    const taskStatus = req.body.status ? req.body.status: 'Created';
    const taskStartDate = req.body.startDate ? new Date (req.body.startDate) : null;
    const taskEndDate = req.body.endDate ? new Date (req.body.endDate) : null;
    const taskPriority = req.body.priority;

    let newTask = new Tasks({
        taskDescription: taskDescription,
        taskStatus: taskStatus,
        taskStartDate: taskStartDate,
        taskEndDate: taskEndDate,
        taskPriority: taskPriority
    })

    newTask.save(function(err){
        if(err){
            res.status(400).json({
                success: false,
                message: 'Error processing request '+ err 
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Task creation successful'
            });
        }
    });
}