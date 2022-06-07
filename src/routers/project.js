const express = require('express')
const Project = require('../models/Project')

const router = express.Router()

router.post('/projects', async (req, res) => {
    const project = new Project(req.body)
    try {
        await project.save()
        res.status(201).send(project)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find({})
        res.status(200).send(projects)
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router