const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    issueId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Issue'
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: new Date()
    }
}, {
    timestamps: true
})

commentSchema.methods.toJSON = function () {
    const comment = this;
    const commentObject = comment.toObject()

    delete commentObject.createdAt
    delete commentObject.updatedAt

    return commentObject
}

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment