const express = require('express')

const router = express.Router()

const Issue = require('../models/Issue')

router.post('/issues', async (req, res) => {
    const issue = new Issue(req.body)
    try {
        await issue.save()
        res.status(201).send(issue)
    } catch (err) {
        res.status(400).send(err)
    }
})