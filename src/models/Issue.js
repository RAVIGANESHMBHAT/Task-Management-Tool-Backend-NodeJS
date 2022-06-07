const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    projectCode: {
        type: String,
        required: true
    },
    taskTitle: {
        type: String,
        required: true
    },
    taskType: {
        type: String,
        enum : ['None', 'Bug','Issue', 'User Story', 'Backlog'],
        default: 'None'
    },
    taskPriority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    taskAssigneeName: {
        type: String
    },
    taskStatus: {
        type: String,
        enum: ['Open', 'In Progress', 'Blocked', 'Completed'],
        default: 'Open'
    }
})

const Issue = mongoose.model("Issue", issueSchema)

module.exports = Issue