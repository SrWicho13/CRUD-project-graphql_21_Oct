// src/resolvers/projectResolver.js

const Project = require('../models/projectModel');
const ProjectService = require('../services/projectService');

const projectResolvers = {
  Query: {
    getProjects: async () => {
      try {
        return await ProjectService.getAllProjects();
      } catch (error) {
        throw new Error(error);
      }
    },
    getProject: async (_, { id }) => {
      try {
        return await ProjectService.getProjectById(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createProject: async (_, { input }) => {
      try {
        return await ProjectService.createProject(input);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateProject: async (_, { id, input }) => {
      try {
        return await ProjectService.updateProject(id, input);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteProject: async (_, { id }) => {
      try {
        return await ProjectService.deleteProject(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = projectResolvers;
