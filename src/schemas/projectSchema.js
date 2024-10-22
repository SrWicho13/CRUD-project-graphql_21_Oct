// src/schemas/projectSchema.js

const { gql } = require('apollo-server-express');

const projectTypeDefs = gql`
  type Project {
    id: ID!
    name: String!
    description: String
    startDate: String
    endDate: String
    status: String
    createdAt: String
    updatedAt: String
  }

  input CreateProjectInput {
    name: String!
    description: String
    startDate: String
    endDate: String
    status: String
  }

  input UpdateProjectInput {
    name: String
    description: String
    startDate: String
    endDate: String
    status: String
  }

  type Query {
    getProjects: [Project]
    getProject(id: ID!): Project
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = projectTypeDefs;
