const express = require('express');

const ProjectsRouter = require('./projects/projects-routes.js');
const ResourcesRouter = require('./resources/resources-routes.js');
const TasksRouter = require('./tasks/tasks-routes.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

module.exports = server;
