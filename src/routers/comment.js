const express = require('express')
const router = express.Router()

const Comment = require('../models/Comment')

router.post('/comments', async (req, res) => {
    const comment = new Comment(req.body)
    try {
        await comment.save()
        res.status(200).send(comment)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/comments/:issueId', async (req, res) => {
    try {
        const comments = await Comment.find({issueId: req.params.issueId})
        res.status(200).send(comments)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router