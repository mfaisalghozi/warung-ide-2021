const express = require('express')
const router = express.router()

// TODO: Add projectController for handling project API

// const projectController
const Project = require("../controllers/project.controller.js");

// Create new project idea
router.get("/new", (req, res) => {
    res.render('new');
});

router.post("/new", Project.create);

// Get all project idea 
router.get("/project", Project.findAll);

// Get project idea based on projectId
router.get("/project/:projectId", Project.findOne);

// Get project idea based on categoryId
router.get("/project/:categoryId", Project.findOne);

// Update project idea
router.put("/project/:projectId", Project.update);

// Delete project idea
router.delete("/project/:projectId", Project.delete);