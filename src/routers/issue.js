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

router.get('/issues', async (req, res) => {
    try {
        const issues = await Issue.find({ $orderby: { createdAt: +1 }})
        res.status(200).send(issues)
       
        
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/issues/:id', async (req, res) => {
    try {
        const issue = await Issue.findById(req.params.id)
        if(issue)
            res.status(200).send(issue)
        else {
            res.status(404).send({})
        }
       
        
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/issues/:id', async (req, res) => {
    try {
        const issue = await Issue.findByIdAndDelete(req.params.id)
        res.status(200).send(issue)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/issues/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        const issue = await Issue.findOne({ _id: req.params.id })

        if(!issue) {
            return res.status(404).send()
        }

        updates.forEach((update) => {
            issue[update] = req.body[update]
        })
        await issue.save()

        return res.status(200).send(issue)
    } catch(e) {
       return res.status(400).send(e)
    }

})

module.exports = router