
const Project = require('../models/projectModel');

const ProjectService = {
  // Obtener todos los proyectos
  getAllProjects: async () => {
    return await Project.find().populate('tasks');
  },

  // Obtener un proyecto por ID
  getProjectById: async (id) => {
    return await Project.findById(id).populate('tasks');
  },

  // Crear un nuevo proyecto
  createProject: async (input) => {
    const newProject = new Project(input);
    return await newProject.save();
  },

  // Actualizar un proyecto existente
  updateProject: async (id, input) => {
    return await Project.findByIdAndUpdate(id, input, { new: true });
  },

  // Eliminar un proyecto
  deleteProject: async (id) => {
    return await Project.findByIdAndDelete(id);
  },

  // Obtener tareas asociadas a un proyecto
  getTasksByProjectId: async (projectId) => {
    const project = await Project.findById(projectId).populate('tasks');
    return project.tasks;
  },
};

module.exports = ProjectService;
