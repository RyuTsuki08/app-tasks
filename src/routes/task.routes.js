const express = require('express');
const Task = require('../models/task');
const moment = require('moment')
const hour = moment().format('LTS');

const Router = express.Router();

Router.get('/', async (req, res) =>
{
    const tasks = await Task.find();
    res.send(tasks);
});

Router.get('/:id', async (req, res) => 
{
    const task = await Task.findById(req.params.id);
    res.json(task);
});

Router.post('/', async (req, res) => 
{
    const { title , description, time } = req.body;
    const task = new Task({ title , description, hour });
    await task.save();
    res.json({status : 'Task Saved!'});
});

Router.put('/:id', async (req, res) => 
{
    const { title , description, time } = req.body;
    const newTask = { title , description, time };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        status : "Task updated"
    });
});

Router.delete('/:id', async (req, res) => 
{
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status : "Task Deleted"
    });
});


module.exports = Router;