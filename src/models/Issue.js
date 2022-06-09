const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    projectCode: {
        type: String,
        required: true
    },
    taskType: {
        type: String,
        enum : ['None', 'Bug','Issue', 'User Story', 'Backlog'],
        default: 'None'
    },
    taskTitle: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    originalEstimation: {
        type: String,
        required: true
    },
    taskPriority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    taskAssigneeName: {
        type: String,
        required: true
    },
    taskStatus: {
        type: String,
        enum: ['Open', 'In Progress', 'Blocked', 'Completed'],
        default: 'Open'
    }
}, {
    timestamps: true
})

// issueSchema.methods.toJSON = function () {
//     const issue = this;
//     const issueObject = issue.toObject()

//     delete issueObject.createdAt
//     delete issueObject.updatedAt

//     return issueObject
// }

const Issue = mongoose.model("Issue", issueSchema)

module.exports = Issue